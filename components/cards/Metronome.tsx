import {JSX} from "react";
import {Card, IconButton} from "react-native-paper";
import Slider from '@react-native-community/slider';


type TempoProps = {
    tempo: number;
    isPlaying: "play" | "pause";
    setIsPlaying: (isPlaying: "play" | "pause") => void;
    onTempoChange: (tempo: number) => void;
}

export default function Metronome({tempo, isPlaying, onTempoChange, setIsPlaying}: TempoProps):JSX.Element{
    console.log("Metronome()");

    const handlePress = () => {
        setIsPlaying(isPlaying === "play" ? "pause" : "play");
    }

    return (
        <Card>
            <Card.Title title="Metronome" subtitle={`${tempo} BPM`}/>
            <Card.Content>
                <Slider
                    style={{ width: '100%', height: 40 }}
                    minimumValue={0}
                    maximumValue={240}
                    step={1}
                    value={tempo}
                    onValueChange={value => onTempoChange(Math.round(value))}
                    minimumTrackTintColor="#6200ee"
                    maximumTrackTintColor="#bdbdbd"
                    thumbTintColor="#6200ee"
                />
                <Card.Actions>
                    <IconButton
                        icon={isPlaying === "play" ? "pause" : "play"}
                        size={28}
                        onPress={handlePress}
                        mode="contained"
                        accessibilityLabel ={isPlaying === "play" ? "pause" : "play"}
                    />
                </Card.Actions>
            </Card.Content>
        </Card>
    )
}
