import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Keyboard,
    ScrollView
} from 'react-native';
import axios from 'axios';
import COLORS from './const/colors';
import Button from './Button';
import Input from './Input';
import Loader from './Loader';

const Register = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        password: '',
    });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [requetStatus, setRequetStatus] = React.useState();

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
        }

        if (!inputs.fullname) {
            handleError('Please input fullname', 'fullname');
            isValid = false;
        }

        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (inputs.password.length < 5) {
            handleError('Minimum password length of 5', 'password');
            isValid = false;
        }

        if (isValid) {
            register();
        }
    };

    const register = () => {
        const url = "https://demo8284225.mockable.io/register";
        setLoading(true);
        const response = axios.post(url);
        response
            .then(response => {
                let { StatusCode, Message } = response.data;
                alert(Message);
                if (StatusCode === 200) {
                    setRequetStatus({
                        success: true,
                        message: Message
                    });
                    setLoading(false);
                } else {
                    setRequetStatus({
                        success: true,
                        message: Message
                    });
                    setLoading(false);
                }
            })
            .catch(error => {
                setRequetStatus({
                    success: false,
                    message: "Someting went wrong."
                });
                setLoading(false);
            });
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <Loader visible={loading} />
            <ScrollView
                contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: COLORS.black, fontSize: 30, fontWeight: 'bold' }}>
                    Become a member of HouseEazy
                </Text>
                <View style={{ marginVertical: 20 }}>
                    <Input
                        onChangeText={text => handleOnchange(text, 'email')}
                        onFocus={() => handleError(null, 'email')}
                        label="Email"
                        placeholder="Enter your email address"
                        error={errors.email}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'fullname')}
                        onFocus={() => handleError(null, 'fullname')}
                        label="Full Name"
                        placeholder="Enter your full name"
                        error={errors.fullname}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'password')}
                        onFocus={() => handleError(null, 'password')}
                        label="Password"
                        placeholder="Enter your password"
                        error={errors.password}
                        password
                    />
                    <Button title="Register" onPress={validate} />
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text
                            onPress={() => navigation.navigate('UploadImage')}
                            style={{
                                color: COLORS.black,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontSize: 16,
                            }}>
                            Add Images/
                        </Text>
                        <Text
                            onPress={() => navigation.navigate('Home')}
                            style={{
                                color: COLORS.black,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontSize: 16,
                            }}>
                            Back to home!
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;