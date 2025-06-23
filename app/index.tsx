import {Redirect} from "expo-router";
import {ActivityIndicator, PaperProvider} from "react-native-paper";
import {StickingPattern} from "@/modals/StickingPattern";
import {useEffect, useState} from "react";
import PatternSelector from "@/components/cards/PatternSelector";
import StickingVisualizer from "@/components/cards/StickingVisualizer";
import Practice from "./(tabs)/Practice";

export default function MainScreen() {
    console.log('MainScreen()');
    const [stickingPattern, setStickingPattern] = useState<StickingPattern | null>(null);


    return (
        <PaperProvider>
            {/*on start load patterns*/}
            {stickingPattern === null && (
                <PatternSelector onSelectPattern={setStickingPattern} />)};
            {stickingPattern !== null && (
                <Practice pattern = {stickingPattern}/>
            )};
        </PaperProvider>
)

}

