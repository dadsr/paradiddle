import { JSX } from "react";
import {Animated} from "react-native";
import View = Animated.View;
import PatternSelector from "@/components/PatternSelector";
import MetronomeControl from "@/components/MetronomeControl";
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
                <MetronomeControl />
            </View>
        </>
    )
}
