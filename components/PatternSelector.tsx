import {JSX, useEffect, useState} from "react";
import {ActivityIndicator, Card, Divider} from "react-native-paper";
import { Text } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';

import {services} from "@/services/servises";
import {StickingPattern} from "@/modals/StickingPattern";
import {ListItem} from "react-native-paper-select/lib/typescript/interface/paperSelect.interface";


type PatternSelectorProps = {
    onSelectPattern: (pattern: StickingPattern | null) => void;
};

export default function PatternSelector({onSelectPattern}: PatternSelectorProps):JSX.Element {
    console.log("PatternSelector()");
    const [loading, setLoading] = useState(true);
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
            })
            .finally(() =>
                setLoading(false)
            );
    }, []);

    if (loading) return <ActivityIndicator animating={true} />;

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
                        const selectedPattern = stickingPatterns.find(p => p.name === value.text);
                        onSelectPattern(selectedPattern || null);
                    }}
                    arrayList={patternsSelect.list}
                    selectedArrayList={patternsSelect.selectedList}
                    errorText={patternsSelect.error}
                    multiEnable={false}
                    hideSearchBox={true}
                    textInputMode="outlined"
                />
                {patternsSelect.error ? (
                    <Text style={{ color: 'red' }}>{patternsSelect.error}</Text>
                ) : null}
                <Divider />
            </Card.Content>
        </Card>
    )
}
