import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native';
import React, { useState } from 'react';
import Button from './Button';
import COLORS from './const/colors';

const UploadImage = () => {
    const [imageUri, setImageUri] = useState('');

    const takePhotoFromCamera = () => {
        alert("Take Image");
    };

    const choosePhotoFromLibrary = () => {
        alert("Choose From Gallery");
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <View>
                    <Text style={{ color: COLORS.black, fontSize: 30, fontWeight: 'bold' }}>Upload Photo</Text>
                    <Button title="Take Photo" onPress={takePhotoFromCamera} />
                    <Button title="Choose From Gallery" onPress={choosePhotoFromLibrary} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Image
                            //source={imageUri}
                            style={{
                                height: 100,
                                width: 116,
                                borderRadius: 2,
                                borderWidth: 2,
                                borderColor: COLORS.blue
                            }}
                        />
                        <Image
                            style={{
                                height: 100,
                                width: 116,
                                borderRadius: 2,
                                borderWidth: 2,
                                borderColor: COLORS.blue
                            }}
                        />
                        <Image
                            style={{
                                height: 100,
                                width: 116,
                                borderRadius: 2,
                                borderWidth: 2,
                                borderColor: COLORS.blue
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UploadImage