import React from 'react';
import { Text } from 'react-native';

const getRandomText = () => {
    const texts = ['Hello', 'World', 'React Native', 'GitHub Copilot'];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
};

const RandomText = () => {
    return <Text>{getRandomText()}</Text>;
};

export default RandomText;