import {Limb} from "@/modals/types";

export class StickingPattern{
    id: string;
    name: string;
    description: string;
    pattern: Limb[];
    tempo: number;

    constructor(id: string, name: string, description: string, pattern: Limb[], tempo: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.pattern = pattern;
        this.tempo = tempo;
    }
}
