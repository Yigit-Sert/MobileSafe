import React from 'react';
import { View, Button } from 'react-native';

const MainScreens = ({ navigation }) => {
    return (
        <>
            <View>
                <Button title="Go to Sales" onPress={() => navigation.navigate('Sales')} />
                <Button title="Go to Payment" onPress={() => navigation.navigate('Payment')} />
                <Button title="Go to Product" onPress={() => navigation.navigate('Product')} />
                <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
                <Button title="Go to Report" onPress={() => navigation.navigate('Report')} />
            </View>
        </>
    );
};

export default MainScreens;