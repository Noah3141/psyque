import { SevenPointScaleSchema, SevenPointScaleType } from "./parse";

export class SevenPointScaleQuestion {
    model: SevenPointScaleType;

    constructor(data: object) {
        const model = SevenPointScaleSchema.parse(data);
        this.model = model;
    }
}
