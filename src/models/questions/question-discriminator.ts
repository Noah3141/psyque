import { type Question } from "@prisma/client";
import { MultipleChoiceQuestion } from "./multiple-choice/Model";
import { SevenPointScaleQuestion } from "./7-point-scale/Model";

export const discriminate = (model: Question) => {
    switch (model.type) {
        case "MultipleChoice":
            return new MultipleChoiceQuestion(model);

        case "SevenPointScale":
            return new SevenPointScaleQuestion(model);

        default:
            throw new Error("Unimplemented Question Type");
    }
};
