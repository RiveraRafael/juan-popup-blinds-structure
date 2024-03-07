/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import BlindStructurePopupComponent from './src/blinds-structure-popup/controller/BlindsStructurePopupComponent';

const App = () => {
    const TimeBasedRules = [
        {
            after_seconds: 0,
            ante: 1,
            big_blind: 2,
            small_blind: 1,
        },
        {
            after_seconds: 180,
            ante: 2,
            big_blind: 4,
            small_blind: 2,
        },
        {
            after_seconds: 360,
            ante: 3,
            big_blind: 8,
            small_blind: 4,
        },
        {
            after_seconds: 540,
            ante: 4,
            big_blind: 16,
            small_blind: 8,
        },
        {
            after_seconds: 720,
            ante: 5,
            big_blind: 32,
            small_blind: 16,
        },
        {
            after_seconds: 900,
            ante: 6,
            big_blind: 64,
            small_blind: 32,
        },
        {
            after_seconds: 1080,
            ante: 7,
            big_blind: 128,
            small_blind: 64,
        },
        {
            after_seconds: 1260,
            ante: 8,
            big_blind: 256,
            small_blind: 128,
        },
        {
            after_seconds: 1440,
            ante: 9,
            big_blind: 512,
            small_blind: 256,
        },
        {
            after_seconds: 1620,
            ante: 10,
            big_blind: 1024,
            small_blind: 512,
        },
    ]
    return (
        <View>
            <BlindStructurePopupComponent
                TimeBasedRules={TimeBasedRules}
                CurrentLevel={8}
            />
        </View>
    )
};

export default App;
