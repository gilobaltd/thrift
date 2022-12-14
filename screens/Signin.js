import { useState,useEffect,useCallback } from "react";
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { SafeArea } from '../utils/safearea';
import { Theme } from '../utils/theme';
import { Righteous_400Regular } from "@expo-google-fonts/righteous";
import { Button, TextInput } from "react-native-paper";



export function Signin (navigation) {

    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({Righteous_400Regular});
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
        await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
    <SafeArea>
        <ScrollView>
                <Text style={styles.intro}> Login to your account</Text>

                <View style={styles.form}>

                    <TextInput 
                    placeholder="email address"
                    mode="outlined"
                    outlineColor={Theme.colors.purple300}
                    activeOutlineColor={Theme.colors.purple500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    keyboardType='email-address'/>

                    <TextInput 
                    placeholder="password"
                    mode="outlined"
                    outlineColor={Theme.colors.purple300}
                    activeOutlineColor={Theme.colors.purple500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    secureTextEntry={true}/>

                <TouchableOpacity onPress={() => ('Profile')}>
                    <Button
                    mode="contained"
                    color={Theme.colors.purple700}
                    contentStyle={{paddingVertical:Theme.sizes[3]}}> login </Button>

                </TouchableOpacity>



                </View>
            </ScrollView>
        <Text>Signin </Text>
    </SafeArea>
 )
}

const styles = StyleSheet.create({
    brand:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        fontFamily:'Righteous_400Regular',
        color:Theme.colors.purple700,
        marginBottom:Theme.sizes[3]
    },
    intro:{
        fontSize:Theme.fonts.fontSizePoint.title
    },
    infoTitle:{
        fontSize:Theme.fonts.fontSizePoint.h5
    },
    form:{
        marginTop:Theme.sizes[2]
    }
})