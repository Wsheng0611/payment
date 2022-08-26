import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Button} from 'react-native';
export default class PaymentSuccessful extends Component<Props> {
  render () {
    return (
      <View>
      <View style={styles.container}>
        <Image
          style={{
            resizeMode: "contain",
            height: 400,
            width: 400,
            position: 'absolute', top: 10
          }}
          source={require("../images/payment-success.png")}
        />
        <Text style = {styles.text}>Your payment has been successfully!</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Done"
            onPress={() => {
              this.props.navigation.navigate ('Payment');
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    position: 'absolute', top: 370
  },
  button: {
    position: 'relative', top: 530,
    alignItems: 'center',
    justifyContent: 'center'
},  
});