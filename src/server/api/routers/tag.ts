import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const tagRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany({ orderBy: { createdAt: "desc" } });
  }),
});
