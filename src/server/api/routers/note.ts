import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const noteRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z
        .object({
          page: z.number().default(1).optional().nullable(),
          amount: z.number().default(10).optional().nullable(),
        })
        .nullable()
    )
    .query(({ ctx }) => {
      return ctx.prisma.note.findMany({ orderBy: { createdAt: "desc" } });
    }),
});
