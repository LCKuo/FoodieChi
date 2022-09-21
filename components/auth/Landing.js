import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import axios from "axios";
import image from "../main/pngs/login.png";
import { login, Registration } from "../lib"
WebBrowser.maybeCompleteAuthSession();
export var userName = "Desa";
export var login_email = "";
export default function Landing(props) {
    const restoreToken = async () => {
        try {
            await AsyncStorage.setItem("token", token)
        } catch (e) {

        }
    }
    const restoreState = async (jsonFile) => {
        try {
            if (jsonFile) {
                props.doLoading()
                await AsyncStorage.setItem("name", jsonFile.name ? jsonFile.name : "")
                await AsyncStorage.setItem("picture", jsonFile.picture ? jsonFile.picture : "")
                await AsyncStorage.setItem("email", jsonFile.email ? jsonFile.email : "")
                await AsyncStorage.setItem("local", jsonFile.id ? jsonFile.id : "")
                props.doLin()
            } else {
            }
        } catch (e) {
        }
    };

    const getLoginData = async () => {
        try {
            login_email = await AsyncStorage.getItem("email")
            userName = await AsyncStorage.getItem("name")
        } catch (e) {
            alert(`cleaning error ${e}`)
        }
    }
    const [userInfo, setUserInfo] = React.useState();
    const [token, setToke] = React.useState();
    const [requestG, responseG, promptAsyncG] = Google.useAuthRequest({
        expoClientId: 'x',
        iosClientId: '1027851673622-7uh64821bbftqcb0c54dan8t9t7t4ksi.apps.googleusercontent.com',
        androidClientId: '1027851673622-bftlt6ubcsfisjje04rgn3g813ktran6.apps.googleusercontent.com',
        webClientId: 'x',
    });


    useEffect(
        () => {
            if (responseG?.type === 'success') {
                const { authentication } = responseG;
                //console.log(authentication)
                setToke(authentication.accessToken)
                axios.get('https://www.googleapis.com/oauth2/v3/userinfo?access_token=' + authentication.accessToken)
                    .then(function (response) {
                        const userDetails = response.data;
                        setUserInfo(userDetails)
                    })
            }

        }, [responseG]);

    useEffect(() => {
        restoreState(userInfo)
        getLoginData()
        //login(login_email,`${userName}`)

    }, [userInfo])
    useEffect(() => {
        restoreToken
    }, [token])

    return (

        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Button
                    title={"ForceLin"}
                    onPress={() => { props.doLin("a") }}
                />
                <TouchableOpacity onPress={() => { promptAsyncG({ useProxy: false, showInRecents: true }) }} style={{ width: '8%', aspectRatio: 1 }}>
                    <ImageBackground source={require('./Google.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});
