
export type Limbs = 'R' | 'L' | 'RL';
export type LimbsType = 'handPattern' | 'footPattern' ;

export interface SerializedPattern {
    id: string;
    name: string;
    LimbType: LimbsType;
    description: string;
    pattern: Limbs[];
    tempo: number;
}
