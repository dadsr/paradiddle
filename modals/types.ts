
export type Limbs = 'R' | 'L' | 'RL' | 'RK' | 'LK' ;

export interface SerializedPattern {
    id: string;
    name: string;
    description: string;
    pattern: Limbs[];
    tempo: number;
}

export type PatternOption = { id: string; text: string };

export type stickingProps ={
    pattern: string[];
    beat: number;
    isPlaying: "play" | "pause";
}
