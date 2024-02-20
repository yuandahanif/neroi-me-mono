import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z
        .object({
          inDraft: z.boolean().default(false),
          page: z.number().default(1).optional().nullable(),
          amount: z.number().default(10).optional().nullable(),
          cursor: z.string().optional().nullable(),
        })
        .nullable()
    )
    .query(({ ctx, input }) => {
      const inDraft = input?.inDraft ? undefined : input?.inDraft;

      return ctx.prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
        include: { Tags: { select: { title: true } } },
        where: { isDraft: inDraft },
        take: input?.amount ?? undefined,
      });
    }),

  getAll_withPagination: publicProcedure
    .input(
      z
        .object({
          inDraft: z.boolean().default(false),
          page: z.number().default(1).optional().nullable(),
          amount: z.number().default(10).optional().nullable(),
        })
        .nullable()
    )
    .query(({ ctx, input }) => {
      const inDraft = input?.inDraft ? undefined : input?.inDraft;

      return ctx.prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          Tags: { select: { title: true } },
          slug: true,
          createdAt: true,
          updatedAt: true,
          isDraft: true,
        },
        where: { isDraft: inDraft },
        take: input?.amount ?? undefined,
        skip: input?.page ?? undefined,
      });
    }),

  getBySlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.blog.findFirstOrThrow({
        include: { Tags: { select: { title: true } } },
        where: { slug: input.slug },
      });
    }),

  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.blog.findFirst({
        include: { Tags: true },
        where: { id: input.id },
      });
    }),

  incrementVisitById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.blog.update({
        data: {},
        where: { id: input.id },
      });
    }),

  getBlogVisitorStatistic: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blog.findMany({
      take: 10,
      orderBy: {},
    });
  }),

  checkSlugAvaliable: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.blog.findFirst({
        where: { slug: input.slug },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
        content: z.string(),
        description: z.string(),
        title: z.string(),
        isDraft: z.boolean(),
        tags: z.array(z.string()),
      })
    )
    .mutation(({ ctx, input }) => {
      const tags = input.tags.map((tag) => ({ id: tag }));

      return ctx.prisma.blog.create({
        data: {
          content: input.content,
          slug: input.slug,
          title: input.title,
          Tags: { connect: tags },
          isDraft: input.isDraft,
          description: input.description,
        },
      });
    }),

  updateById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        slug: z.string(),
        content: z.string(),
        description: z.string(),
        title: z.string(),
        isDraft: z.boolean(),
        tags: z.array(z.string()),
      })
    )
    .mutation(({ ctx, input }) => {
      const tags = input.tags.map((tag) => ({ id: tag }));

      return ctx.prisma.blog.update({
        data: {
          content: input.content,
          slug: input.slug,
          title: input.title,
          Tags: { connect: tags },
          isDraft: input.isDraft,
          description: input.description,
        },
        where: { id: input.id },
      });
    }),

  deleteById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.blog.delete({
        where: { id: input.id },
      });
    }),
});
