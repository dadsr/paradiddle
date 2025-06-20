import {JSX, useEffect, useState} from "react";
import {Card, Divider} from "react-native-paper";
import { Text } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';

import {services} from "@/services/servises";
import {StickingPattern} from "@/modals/StickingPattern";
import {ListItem} from "react-native-paper-select/lib/typescript/interface/paperSelect.interface";

export default function PatternSelector():JSX.Element {
    console.log("PatternSelector()");

    const [handsStickingPatterns, setHandsStickingPatterns] = useState<StickingPattern[]>([]);
    const [handsPatternsSelect, setHandsPatternsSelect] = useState<{
        list: ListItem[];
        selectedList: ListItem[];
        value: string;
        error: string;
    }>({
        list: [],
        selectedList: [],
        value: '',
        error: '',
    });
    const [feetStickingPatterns, setFeetStickingPatterns] = useState<StickingPattern[]>();


    useEffect(() => {
        services.getPatterns("handPattern")
            .then((fetchedPatterns:StickingPattern[]) => {
                setHandsStickingPatterns(fetchedPatterns);
                setHandsPatternsSelect(prev => ({
                    ...prev,
                    list: fetchedPatterns.map(p => ({
                        _id: p.id,
                        value: p.name,
                    })) as ListItem[],
                }));
            })
            .catch(error => {
                setHandsPatternsSelect(prev => ({
                    ...prev,
                    error: 'Failed to load hand patterns',
                }));
            });
    }, []);

    return (
        <Card>
            <Card.Title title="Sticking Pattern" subtitle="select sticking pattern to practice" />
            <Card.Content>
                <Text variant="displayMedium">Hands Pattern</Text>
                <PaperSelect
                    label="Hands Sticking Pattern"
                    value={handsPatternsSelect.value}
                    onSelection={value => {
                        setHandsPatternsSelect(prev => ({
                            ...prev,
                            value: value.text,
                            selectedList: value.selectedList,
                            error: '',
                        }));
                    }}
                    arrayList={handsPatternsSelect.list}
                    selectedArrayList={handsPatternsSelect.selectedList}
                    errorText={handsPatternsSelect.error}
                    multiEnable={false}
                    hideSearchBox={true}
                    textInputMode="outlined"
                />
                <Divider />
                <Text variant="displayMedium" >Feet Pattern</Text>



            </Card.Content>
        </Card>
    )
}
