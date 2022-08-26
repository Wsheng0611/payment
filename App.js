import CreditCardScreen from './screens/CreditCardScreen';
import PaymentScreen from './screens/PaymentScreen';
import OnlineBankingScreen from './screens/OnlineBankingScreen';
import EwalletScreen from './screens/EwalletScreen';
import PaymentSuccessful from './screens/PaymentSuccessful';

import {Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const StackNav = createStackNavigator ();
export default class App extends Component<Props> {
  render () {
    return (
      <NavigationContainer>
        <StackNav.Navigator initialRouteName="Payment">
          <StackNav.Screen
            name="Payment"
            component={PaymentScreen}
            options={styles.PaymentHeader}
          />
          <StackNav.Screen
            name="CreditCard"
            component={CreditCardScreen}
            options={styles.CreditCardHeader}
          />
          <StackNav.Screen
            name="OnlineBanking"
            component={OnlineBankingScreen}
            options={styles.OnlineBankingHeader}
          />
          <StackNav.Screen
            name="E-wallet"
            component={EwalletScreen}
            options={styles.EwalletHeader}
          />
          <StackNav.Screen
            name="Successful Payment"
            component={PaymentSuccessful}
            options={styles.SuccessfulHeader}
          />
        </StackNav.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create ({
  PaymentHeader: {
    title: 'Payment',
    headerStyle: {
      backgroundColor: '#a80000',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },

  CreditCardHeader: {
    title : 'Credit Card',
    headerStyle: {
      backgroundColor: '#a80000',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },

  OnlineBankingHeader: {
    title : 'Online Banking',
    headerStyle: {
      backgroundColor: '#a80000',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },

  EwalletHeader: {
    title : 'E-wallet',
    headerStyle: {
      backgroundColor: '#a80000',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  PaymentSuccessfulHeader: {
    title : 'Payment Successful',
    headerStyle: {
    backgroundColor: '#a80000',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }, 
}    
},
);