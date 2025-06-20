
export type Limbs = 'R' | 'L' | 'RL';
export type LimbsType = 'handPattern' | 'feetPattern' ;

export interface SerializedPattern {
    id: string;
    name: string;
    LimbType: LimbsType;
    description: string;
    pattern: Limbs[];
    tempo: number;
}

export type PatternOption = { id: string; text: string };


