import {JSX} from "react";
import {Limbs, stickingProps} from "@/modals/types";
import {View, Text, Surface} from 'react-native-paper';

import {Card} from "react-native-paper";


export default function StickingNotation({pattern, beat, isPlaying}:stickingProps):JSX.Element{
    console.log("StickingVisualizer()");

    return (
        <Card >
            <Card.Title title="Notation" />
            <Card.Content>
                {pattern.map((limb:Limbs,index:number) => (
                    <Surface key={index}>
                        <Text key={index} title={limb} />
                        <Divider />
                    </Surface>
                ))}
            </Card.Content>
        </Card>
    )

}

