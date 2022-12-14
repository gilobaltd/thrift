import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {About} from './About';
import {Deposit} from './Deposit';
import {Withdrawal} from './Withdraw';
import {Profile} from './Profile';
import {Loan} from './Loan';
import { Signup } from './Signup';
import{Signin} from './Signin';

const Stack = createNativeStackNavigator();
export function StackNavigator () {
    return (
        <Stack.Navigator initialRouteName='Signup' screenOption={{headerShown:false}}>
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Deposit' component={Deposit}/>
            <Stack.Screen name='Withdrawal' component={Withdrawal}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Loan' component={Loan}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Signin' component={Signin} options={{headrerShown:true}}/>

        </Stack.Navigator>
        
    )
}