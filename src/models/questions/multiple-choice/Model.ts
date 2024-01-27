import { MultipleChoiceSchema, MultipleChoiceType } from "./parse";

export class MultipleChoiceQuestion {
    model: MultipleChoiceType;

    constructor(data: object) {
        const model = MultipleChoiceSchema.parse(data);
        this.model = model;
    }
}
