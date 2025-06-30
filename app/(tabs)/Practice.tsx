import {JSX, useEffect, useState} from "react";
import MetronomeControl from "@/components/MetronomeControl";
import StickingVisualizer from "@/components/StickingVisualizer";
import {StickingPattern} from "@/modals/StickingPattern";
import {Divider} from "react-native-paper";
import StickingNotation from "@/components/StickingNotation";
import {Limb} from "@/modals/types";
import {useMetronome} from "@/hooks/useMetronome";
import {useAudio} from "@/hooks/useAudio";

type PracticeProps = {
    pattern: StickingPattern;
    isKicks: boolean;
};

export default function Practice({pattern, isKicks}: PracticeProps):JSX.Element {
    console.log("Practice()");
    const [isPlaying, setIsPlaying] = useState<"play" | "pause">("pause");
    const [currentTempo, setCurrentTempo] = useState<number>(0);

    const { playRightHandClick, playLeftHandClick, playBothHandsClick, playRightKick, playLeftKick } = useAudio();

    const metronome =useMetronome({
        initialTempo: currentTempo,
        patternLength: pattern.pattern.length,
        onBeat: (beat:number) => {
            const currentLimb:Limb = pattern.pattern[beat];
            switch (currentLimb) {
                case "R":
                    playRightHandClick();
                    break;
                case "L":
                    playLeftHandClick();
                    break;
                case "RK":
                    playRightKick();
                    break;
                case "LK":
                    playLeftKick();
                    break;
                default:
                    playBothHandsClick();
                    break;
            }
        },

    });


    useEffect(() => {
            metronome.reset();
            setCurrentTempo(pattern.tempo);
            setIsPlaying("pause");
    }, [pattern]);


    return (
        <>
            <MetronomeControl
                tempo={metronome.tempo}
                isPlaying={metronome.isPlaying}
                setIsPlaying={metronome.setIsPlaying()}
                onTempoChange={metronome.changeTempo}
                reset={metronome.reset}
            />
            <Divider />
            <StickingNotation
                isPlaying={metronome.isPlaying}
                pattern={pattern.pattern}
                currentBeat={metronome.currentBeat}
            />
            <Divider />
            <StickingVisualizer
                isPlaying={metronome.isPlaying}
                isKicks={isKicks}
                currentLimb={metronome.currentLimb}
            />
        </>
    )
}
