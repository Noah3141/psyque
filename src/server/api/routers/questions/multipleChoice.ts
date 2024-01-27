import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { discriminate } from "~/models/questions/question-discriminator";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

const getSchema = z.object({ questionId: z.string() });
const deleteSchema = z.object({ questionId: z.string() });
const updateSchema = z.object({ questionId: z.string() });
const createSchema = z.object({ questionId: z.string() });

export const Router = createTRPCRouter({
    getById: publicProcedure.input(getSchema).query(async ({ ctx, input }) => {
        const questionModel = await ctx.db.question.findUnique({
            where: {
                id: input.questionId,
            },
        });

        if (!questionModel) {
            throw new Error();
        }

        const question = discriminate(questionModel);

        return question;
    }),

    delete: protectedProcedure
        .input(deleteSchema)
        .mutation(async ({ ctx, input }) => {
            return null;
        }),

    create: protectedProcedure
        .input(createSchema)
        .mutation(async ({ ctx, input }) => {
            return null;
        }),

    update: protectedProcedure
        .input(updateSchema)
        .mutation(async ({ ctx, input }) => {
            return null;
        }),
});
