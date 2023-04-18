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
});
