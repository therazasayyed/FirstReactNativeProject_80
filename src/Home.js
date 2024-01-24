import { Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import Button from './Button'

const Home = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
                <Text style={{ color: 'white', fontSize: 50 }}>
                    Welcome to HouseEazy!
                </Text>
                <Text style={{ color: 'white', fontSize: 50, marginTop: 20, marginBottom: 8 }}>
                    Exciting times ahead: exclusive offers, insider tips, and much more, are all coming your way.
                </Text>
                <Button
                    title="Stay tuned!"
                    onPress={() => props.navigation.navigate("Register")}
                />
            </View>
        </Background>
    )
}

export default Home;