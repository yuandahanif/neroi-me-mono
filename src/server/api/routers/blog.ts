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
          page: z.number().default(1).optional().nullable(),
          amount: z.number().default(10).optional().nullable(),
          cursor: z.string().optional().nullable(),
        })
        .nullable()
    )
    .query(({ ctx }) => {
      return ctx.prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
        include: { Tags: { select: { title: true } } },
      });
    }),

  getBySlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.blog.findFirst({
        orderBy: { createdAt: "desc" },
        include: { Tags: { select: { title: true } } },
        where: { slug: input.slug },
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
        data: { visit: { increment: 1 } },
        where: { id: input.id },
      });
    }),

  getBlogVisitorStatistic: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blog.findMany({
      take: 10,
      orderBy: { visit: "desc" },
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
        title: z.string(),
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
        },
      });
    }),
});
