import {PaperProvider} from "react-native-paper";
import {StickingPattern} from "@/modals/StickingPattern";
import {useEffect, useState} from "react";
import PatternSelector from "@/components/PatternSelector";
import Practice from "./(tabs)/Practice";
import {Limb} from "@/modals/types";

export default function MainScreen() {
    console.log('MainScreen()');
    const [stickingPattern, setStickingPattern] = useState<StickingPattern | null>(null);
    const [isKicks, setIsKicks] = useState<boolean>(false);

    useEffect(() => {
        if(stickingPattern !== null){
            if(stickingPattern.pattern.filter((limb:Limb) => limb === 'RK' || limb === 'LK').length > 0){
                setIsKicks(true)
            }
        }
    },[stickingPattern])

    return (
        <PaperProvider>
            {/*on start load patterns*/}
            {stickingPattern === null && (
                <PatternSelector onSelectPattern={setStickingPattern} />)};
            {stickingPattern !== null && (
                <Practice pattern = {stickingPattern} isKicks={isKicks} />
            )};
        </PaperProvider>
)

}

