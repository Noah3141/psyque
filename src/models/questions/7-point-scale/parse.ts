import { QuestionType } from "@prisma/client";
import { z } from "zod";

const tag: QuestionType = "SevenPointScale";
export const SevenPointScaleSchema = z.object({
    prompt: z.string(),
    labels: z.array(z.string()).length(7).optional(),
    type: z.literal(tag),
});

export type SevenPointScaleType = z.infer<typeof SevenPointScaleSchema>;
