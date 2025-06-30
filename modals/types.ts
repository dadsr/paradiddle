
export type Limb = 'R' | 'L' | 'RL' | 'RK' | 'LK' ;

export interface SerializedPattern {
    id: string;
    name: string;
    description: string;
    pattern: Limb[];
    tempo: number;
}

export type PatternOption = { id: string; text: string };

export type stickingProps ={
    pattern: Limb[];
    currentBeat: number;
    isPlaying: "play" | "pause";
}

export type limbVisualizerProps ={
    isPlaying: "play" | "pause";
    isKicks: boolean;
    currentLimb: Limb;
}
