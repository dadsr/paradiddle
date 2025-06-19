import {Limbs, LimbsType} from "@/modals/types";

export class StickingPattern{
    id: string;
    name: string;
    LimbType: LimbsType;
    description: string;
    pattern: Limbs[];
    tempo: number;

    constructor(id: string, name: string, LimbType: LimbsType, description: string, pattern: Limbs[], tempo: number) {
        this.id = id;
        this.name = name;
        this.LimbType = LimbType;
        this.description = description;
        this.pattern = pattern;
        this.tempo = tempo;
    }

}
