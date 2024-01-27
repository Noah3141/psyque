import { QuestionType } from "@prisma/client";
import { z } from "zod";

const tag: QuestionType = "MultipleChoice";
export const MultipleChoiceSchema = z.object({
    prompt: z.string(),
    choices: z.array(
        z.object({
            text: z.string(),
            value: z.number(),
        }),
    ),
    correctChoice: z.number(),
    type: z.literal(tag),
});

export type MultipleChoiceType = z.infer<typeof MultipleChoiceSchema>;
