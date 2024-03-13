import React, { useState } from 'react';
import { View, Text, Alert } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


const App = () => {
    const [qrCode, Setdata] = useState('');

    return (
        <QRCodeScanner
            onRead={({ data }) => Setdata(data)}
            // flashMode={RNCamera.Constants.FlashMode.torch}   // torch light on
            reactivate={true}
            reactivateTimeout={2000}
            showMarker={true}
            topContent={
                <View>
                    <Text>{qrCode}</Text>
                </View>
            }
            bottomContent={
                <View>
                    <Text>Scan QR Code</Text>
                </View>
            }
        />
    );
};

export default App;