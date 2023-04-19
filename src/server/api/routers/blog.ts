import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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
});
