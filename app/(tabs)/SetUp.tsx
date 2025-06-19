import { JSX } from "react";
import {Animated} from "react-native";
import View = Animated.View;
import PatternSelector from "@/components/cards/PatternSelector";
import Metronome from "@/components/cards/Metronome";
import Options from "@/components/cards/Options";


export default function SetUp():JSX.Element {
    console.log("SetUp()");

    return (
        <>
            <View>
                <Options />
            </View>
            <View>
                <PatternSelector />
            </View>
            <View>
                <Metronome />
            </View>
        </>
    )
}
