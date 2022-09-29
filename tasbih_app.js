//simple tasbih app.
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground, Vibration } from 'react-native'
import {
  Container, Header, Button, Content, ActionSheet, Root, Left, Right, Body, Title, Footer, FooterTab, Accordion, Fab, DatePicker
  , Item, Input, ListItem, CheckBox, Badge
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Picker } from '@react-native-community/picker';
export default class Tasbih extends React.Component {
  constructor() {
    super();
    this.state =
    {
      count: 0,
      language: 'لا إله لا الله',
    }
  }
  plusFun() { this.setState({ count: this.state.count + 1 }) }

  resetFun() { this.setState({ count: 0 }) }
  render() {
    return (
      <>
        {/* header */}
        
        <View style={{
          height: '7%',
          backgroundColor: '#008F7A',
          justifyContent: 'center'

        }}>
          <Text style={{
            color: '#fff', fontSize: 20, paddingRight: '5%'
          }}>السبحة</Text>
        </View>
        <View
          style={{ flex: 1, backgroundColor: '#ECECEC' }} >

          <View style={{ backgroundColor: '#008F7A', height: '67%' }}>

            <View style={{

              alignSelf: 'center',
              borderRadius: 10, width: '90%', height: "9%",
              justifyContent: 'center', marginTop: 10
              , borderColor: '#fff', borderWidth: 1, marginBottom: 10
            }}>
              <Picker
                selectedValue={this.state.language}
                style={{ height: 60, width: 300, color: '#fff', alignSelf: 'center' }}
                mode={'dialog'}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })
                }
              >
                <Picker.Item label=" لا إله إلا الله محمد رسول الله" value="1" />
                <Picker.Item label="سبحان الله " value="2" />
                <Picker.Item label="الحمد لله" value="3" />
                <Picker.Item label="الله أكبر" value="4" />
                <Picker.Item label="اللهم صلي علي محمد" value="5" />
                <Picker.Item label="لا حول و لا قوة إلا بالله" value="6" />
                <Picker.Item label="سبحان الله و بحمده سبحان الله العظيم" value="7" />
                <Picker.Item label="أستغفر الله" value="8" />

              </Picker>
            </View>

            <View style={{
              width: '95%', height: '85%', backgroundColor: "#d2e1dfa1",
              alignSelf: 'center',
              borderRadius: 15,
            }}>
              <ImageBackground source={require("../img/window.png")} resizeMode={'cover'} style={{ width: '100%', height: "100%" }}>
                <Text style={{ fontWeight: 'bold', color: '#fff', alignSelf: 'center', fontSize: 37, marginTop: "75%" }}>{this.state.count}</Text>
              </ImageBackground>
            </View>
          </View>

          <View
            style={{


              alignSelf: 'center'

            }}
          >
            <View style={{
              alignSelf: 'center', justifyContent: 'center',
              borderRadius: 65, width: 130, height: 130, backgroundColor: '#ECECEC', marginTop: -70
            }} >
              <TouchableOpacity

                onPress={
                  () => {
                    this.plusFun();
                   }
                }
                style={{
                  alignSelf: 'center', elevation: 10,
                  borderRadius: 67.5, width: 115, height: 115, backgroundColor: '#008F7A', justifyContent: 'center',
                }}>
                <Icon name={'plus'} size={25} style={{ alignSelf: 'center', color: '#fff' }} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: '12%' }}>


              <TouchableOpacity
                onPress={
                  () => {


                  }
                }
                style={{
                  borderRadius: 10, width: 130, height: 60, backgroundColor: '#fff', elevation: 1, marginHorizontal: 10
                }}

              >
                <Icon name={"save"} style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, color: '#008F7A', alignSelf: 'center', marginTop: 10 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, color: '#008F7A', alignSelf: 'center' }}>حفظ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={
                  () => {
                    this.resetFun();

                  }
                }
                style={{
                  borderRadius: 10, width: 130, height: 60, backgroundColor: '#fff', elevation: 1, marginHorizontal: 10
                }}

              >

                <Icon name={"redo"} style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, color: '#008F7A', alignSelf: 'center', marginTop: 10 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, color: '#008F7A', alignSelf: 'center', }}>اعادة</Text>

              </TouchableOpacity>
            </View>
          </View>
          {/* footer */}
          <Footer style={{ backgroundColor: '#F0E9E8' }}>
            <FooterTab style={{ backgroundColor: '#008F7A', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} >
              <Button>
                <Icon name={'home'} size={20} color={"#fff"} />


              </Button>

              <Button>
                <Icon name={'user'} size={20} color={"#ddd"} />
              </Button>
            </FooterTab>
          </Footer>

        </View>


      </>
    )
  }
}
