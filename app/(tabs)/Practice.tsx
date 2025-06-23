import {JSX, useState} from "react";
import Metronome from "@/components/cards/Metronome";
import StickingVisualizer from "@/components/cards/StickingVisualizer";
import {StickingPattern} from "@/modals/StickingPattern";
import {Divider} from "react-native-paper";
import StickingNotation from "@/components/cards/StickingNotation";

type PracticeProps = {
    pattern: StickingPattern;
};

export default function Practice({pattern}: PracticeProps):JSX.Element {
    console.log("Practice()");
    const [isPlaying, setIsPlaying] = useState<"play" | "pause">("pause");
    const [currentTempo, setCurrentTempo] = useState<number>(pattern.tempo);

    return (
        <>
            <Metronome  tempo={currentTempo} onTempoChange={setCurrentTempo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            <Divider />
            <StickingNotation
                pattern={pattern.pattern}
                tempo={currentTempo}
                isPlaying={isPlaying}
            />
            <Divider />
            <StickingVisualizer
                pattern={pattern.pattern}
                tempo = {currentTempo}
                isPlaying={isPlaying}
            />
        </>
    )
}
