
import { useState, useRef, useCallback, useEffect } from 'react';

interface UseMetronomeProps {
    initialTempo?: number;
    patternLength?: number;
    onBeat?: (beat: number) => void;
}

export const useMetronome = ({ initialTempo = 120, patternLength = 8, onBeat }: UseMetronomeProps = {}) => {
    const [isPlaying, setIsPlaying] = useState<'play'|'pause'>('pause');
    const [tempo, setTempo] = useState(initialTempo);
    const [currentBeat, setCurrentBeat] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const beatRef = useRef(0);

    const stopMetronome = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsPlaying('pause');
    }, []);

    const startMetronome = useCallback(() => {
        if (intervalRef.current) return; // Already playing

        const interval = (60 / tempo) * 1000; // Convert BPM to milliseconds

        intervalRef.current = setInterval(() => {
            beatRef.current = (beatRef.current + 1) % patternLength; // Use actual pattern length
            setCurrentBeat(beatRef.current);
            onBeat?.(beatRef.current);
        }, interval);

        setIsPlaying('play');
    }, [tempo, patternLength, onBeat]);

    const togglePlay = useCallback(() => {
        if (isPlaying === 'play') {
            stopMetronome();
        } else {
            startMetronome();
        }
    }, [isPlaying, startMetronome, stopMetronome]);

    const reset = useCallback(() => {
        stopMetronome();
        beatRef.current = 0;
        setCurrentBeat(0);
    }, [stopMetronome]);

    const changeTempo = useCallback((newTempo: number) => {
        setTempo(newTempo);
        if (isPlaying) {
            stopMetronome();
            // Restart with new tempo after a brief delay
            setTimeout(() => startMetronome(), 50);
        }
    }, [isPlaying, stopMetronome, startMetronome]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return {
        isPlaying,
        tempo,
        currentBeat,
        togglePlay,
        changeTempo,
        reset,
        start: startMetronome,
        stop: stopMetronome
    };
};
