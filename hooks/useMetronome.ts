import {useState} from "react";

const getIntervalFromTempo = (tempo) => 60000 / tempo;

interface metronomeProps {
    tempo: number;
    patternLength: number;
    onBeat:(beat:number) => void;
}
export function useMetronome({ tempo: initialTempo, patternLength, onBeat }: metronomeProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [tempo, setTempo] = useState(0);
    const [currentBeat, setCurrentBeat] = useState(0);





}
