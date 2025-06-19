import {JSX, useEffect, useState} from "react";
import {Card, Divider} from "react-native-paper";
import { Text } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';

import {services} from "@/services/servises";
import {StickingPattern} from "@/modals/StickingPattern";


export default function PatternSelector():JSX.Element {
    console.log("PatternSelector()");
    const [handsStickingPatterns, setHandsStickingPatterns] = useState<StickingPattern[]>();
    const [footsStickingPatterns, setFootsStickingPatterns] = useState<StickingPattern[]>();

    useEffect(() => {
            services.getPatterns("handPattern")
                .then((fatchedPatterns:StickingPattern[]) => {
                    setHandsStickingPatterns(fatchedPatterns)
                });
        services.getPatterns("footPattern")
            .then((fatchedPatterns:StickingPattern[]) => {
                setFootsStickingPatterns(fatchedPatterns)
            });
    }, []);

    return (
        <Card>
            <Card.Title title="Sticking Pattern" subtitle="select sticking pattern to practice" />
            <Card.Content>
                <Text variant="DisplayMedium">Hands Pattern</Text>
                <PaperSelect
                    label="Hands Sticking Pattern"
                    value={}
                    onSelection={(P) => {
                        setHandsStickingPatterns({
                            ...gender,
                            value: value.text,
                            selectedList: value.selectedList,
                            error: '',
                        });
                    }}
                    arrayList={[...gender.list]}
                    selectedArrayList={gender.selectedList}
                    errorText={gender.error}
                    multiEnable={false}
                    hideSearchBox={true}
                    textInputMode="outlined"
                />
                <Divider />
                <Text variant="DisplayMedium" >Foots Pattern</Text>



            </Card.Content>
        </Card>
    )
}
