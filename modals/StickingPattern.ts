import {Limbs} from "@/modals/types";

export class StickingPattern{
    id: string;
    name: string;
    description: string;
    pattern: Limbs[];
    tempo: number;

    constructor(id: string, name: string, description: string, pattern: Limbs[], tempo: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.pattern = pattern;
        this.tempo = tempo;
    }
}
