import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Zocial from "react-native-vector-icons/Zocial";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const App = () => {
  return (  
    <SafeAreaView style={{flex: 1, top: 0, backgroundColor: 'white', alignItems: 'center' }}>
      <View style={{ padding: 24, flexGrow: 1, flexBasis: 1}}>
        <View style={{ width: 80, 
            height: 80, 
            borderRadius: 9999, 
            backgroundColor: 'aqua', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderWidth: 3,
            marginTop: 10,
            marginBottom: 15}} >
          <FeatherIcon color='black' name='gitlab' size={48}/>
        </View>
        <View>
          {/***message */}
            <Text style={{fontSize: 40, fontWeight: 'bold' }}>Start your journey with your amazing Team</Text>
            <Text style={style.subtitle}>
              By proceeding you agree with our
              <Text style={{ color: '#0469FF', fontWeight: '600', textDecorationLine: 'underline'}}> Terms and conditions </Text>
              and confirm to read our
              <Text style={{ color: '#0469FF', fontWeight: '600'}}> Privacy and policy</Text>
            </Text>
            <View style={style.form}>
              <TouchableOpacity>
                <View style={style.btn}>
                  <MaterialCommunityIcons 
                      color='#000'
                      name='apple'
                      size={35}
                      style={{ marginRight: 12, right: 2 }}
                      />
                      <Text style={style.btnText}>Continue with Apple</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.form}>
              <TouchableOpacity>
                <View style={style.btn}>
                  <Zocial 
                      color='#000'
                      name='email'
                      size={35}
                      style={{ marginRight: 12, right: 2, color: 'red' }}
                      />
                      <Text style={style.btnText}>Continue with Email</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.form}>
              <TouchableOpacity>
                <View style={style.btn}>
                  <AntDesign 
                      color='#000'
                      name='googleplus'
                      size={35}
                      style={{ marginRight: 12, right: 2, color: 'green' }}
                      />
                      <Text style={style.btnText}>Continue with Google</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.form}>
              <TouchableOpacity>
                <View style={style.btn}>
                  <FontAwesome 
                      color='#000'
                      name='facebook-square'
                      size={35}
                      style={{ marginRight: 12, right: 2, color: 'blue' }}
                      />
                      <Text style={style.btnText}>Continue with Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ top: 240, left: 90}}>Have an account already? 
                <Text style={{color: 'blue', textDecorationLine: 'underline'}}> Log in</Text>
              </Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  title: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#313131',
  },
  form: {
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 0,
    top: 80,
    marginTop: 10,
    // marginBottom: 20
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    paddingVertical: 2,
    paddingHorizontal: 15,
    width: 400,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderColor: '#000',
    marginBottom: 14,
    marginTop: 2,
    height: 60
  },
  btnText: {
    fontSize: 15,
    lineHeight: 28,
    fontWeight: '800',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default App