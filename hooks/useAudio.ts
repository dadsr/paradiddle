import {AudioPlayer, useAudioPlayer} from 'expo-audio';
import { useCallback } from 'react';

// Import your sound assets
const rightHandSound = require('./assets/right-hand.wav');
const leftHandSound = require('./assets/left-hand.wav');
const bothHandsSound = require('./assets/both-hands.wav');
const rightKickSound = require('./assets/right-kick.wav');
const leftKickSound = require('./assets/left-kick.wav');

export const useAudio = () => {

    const rightHandPlayer = useAudioPlayer(rightHandSound);
    const leftHandPlayer = useAudioPlayer(leftHandSound);
    const bothHandsPlayer = useAudioPlayer(bothHandsSound);
    const rightKickPlayer = useAudioPlayer(rightKickSound);
    const leftKickPlayer = useAudioPlayer(leftKickSound);


    const playAndReset = useCallback(async (player:AudioPlayer) => {
        await player.seekTo(0);
        await player.play();
    }, []);

    const playRightHandClick = useCallback(() => {
        playAndReset(rightHandPlayer);
    }, [rightHandPlayer, playAndReset]);

    const playLeftHandClick = useCallback(() => {
        playAndReset(leftHandPlayer);
    }, [leftHandPlayer, playAndReset]);

    const playBothHandsClick = useCallback(() => {
        playAndReset(bothHandsPlayer);
    }, [bothHandsPlayer, playAndReset]);

    const playRightKick = useCallback(() => {
        playAndReset(rightKickPlayer);
    }, [rightKickPlayer, playAndReset]);

    const playLeftKick = useCallback(() => {
        playAndReset(leftKickPlayer);
    }, [leftKickPlayer, playAndReset]);

    return {
        playRightHandClick,
        playLeftHandClick,
        playBothHandsClick,
        playRightKick,
        playLeftKick,
    };
};
