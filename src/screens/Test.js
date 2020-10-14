import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import ScreenOrientation, { PORTRAIT, LANDSCAPE } from "react-native-orientation-locker/ScreenOrientation";

export default function App() {
    const [showVideo, setShowVideo] = useState(true);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScreenOrientation
                orientation={PORTRAIT}
                onChange={orientation => console.log('onChange', orientation)}
                onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
            />
            <Button title="Toggle Video" onPress={() => setShowVideo(!showVideo)} />
            {showVideo && (
                <View>
                    <ScreenOrientation orientation={LANDSCAPE} />
                    <View style={{ width: 320, height: 180, backgroundColor: '#ccc' }}>
                        <Text>Landscape video goes here</Text>
                    </View>
                </View>
            )}
        </View>
    );
};