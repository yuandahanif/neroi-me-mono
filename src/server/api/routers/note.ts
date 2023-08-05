import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const noteRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z
        .object({
          page: z.number().default(1).optional().nullable(),
          amount: z.number().default(5).optional().nullable(),
        })
        .nullable()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.note.findMany({
        orderBy: { createdAt: "desc" },
        take: input?.amount ?? 5,
        skip: ((input?.page ?? 1) - 1) * (input?.amount ?? 5),
      });
    }),

  getById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.note.findFirst({
        where: {
          id: input.id,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        content: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.note.create({ data: { content: input.content } });
    }),
  updateById: protectedProcedure
    .input(
      z.object({
        content: z.string(),
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.note.update({
        data: { content: input.content },
        where: {
          id: input.id,
        },
      });
    }),
  deleteById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.note.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
