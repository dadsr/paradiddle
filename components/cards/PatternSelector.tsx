import {JSX, useEffect, useState} from "react";
import {Card, Divider} from "react-native-paper";
import { Text } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';

import {services} from "@/services/servises";
import {StickingPattern} from "@/modals/StickingPattern";
import {ListItem} from "react-native-paper-select/lib/typescript/interface/paperSelect.interface";



export default function PatternSelector():JSX.Element {
    console.log("PatternSelector()");

    const [stickingPatterns, setStickingPatterns] = useState<StickingPattern[]>([]);
    const [patternsSelect, setPatternsSelect] = useState<{
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



    useEffect(() => {
        services.getPatterns()
            .then((fetchedPatterns:StickingPattern[]) => {
                setStickingPatterns(fetchedPatterns);
                setPatternsSelect(prev => ({
                    ...prev,
                    list: fetchedPatterns.map(p => ({
                        _id: p.id,
                        value: p.name,
                    })) as ListItem[],
                }));
            })
            .catch(error => {
                setPatternsSelect(prev => ({
                    ...prev,
                    error: 'Failed to load patterns',
                }));
            });
    }, []);

    return (
        <Card>
            <Card.Title title="Sticking Pattern" subtitle="select sticking pattern to practice" />
            <Card.Content>
                <Text variant="displayMedium">Hands Pattern</Text>
                <PaperSelect
                    label="Sticking Pattern"
                    value={patternsSelect.value}
                    onSelection={value => {
                        setPatternsSelect(prev => ({
                            ...prev,
                            value: value.text,
                            selectedList: value.selectedList,
                            error: '',
                        }));
                    }}
                    arrayList={patternsSelect.list}
                    selectedArrayList={patternsSelect.selectedList}
                    errorText={patternsSelect.error}
                    multiEnable={false}
                    hideSearchBox={true}
                    textInputMode="outlined"
                />
                <Divider />
            </Card.Content>
        </Card>
    )
}
