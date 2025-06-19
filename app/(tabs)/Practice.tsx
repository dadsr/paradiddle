import {JSX} from "react";
import Metronome from "@/components/cards/Metronome";
import VisualGuide from "@/components/cards/VisualGuide";
import View = Animated.View;

export default function Practice():JSX.Element {
    console.log("Practice()");
    return (
        <>
            <View>
                <VisualGuide />
            </View>

            <View>
                <Metronome />
            </View>
        </>
    )
}
