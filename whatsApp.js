//simple simulation for whatsapp chating .
 import * as React from 'react'
 import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, Modal, Switch } from 'react-native'
 import Icon from 'react-native-vector-icons/FontAwesome5'
 export default class App extends React.Component {
   constructor() {
     super()
     this.state = {
       key: '',
       Data: [],
 
       add_message: '',
       isSwitchEnabled: false,
       fromMe: true,
 
     }
   }
 
 
   add() {
     let arr = this.state.Data
     if (this.state.isSwitchEnabled == false) {
       let newobj1 = {
         message: this.state.add_message,
         direction: 'toMe',
 seen:false
 
 
 
       }
 
       arr.push(newobj1)
       this.setState({Data:arr,add_message:''})
     } else {
       let newobj2 = {
         message: this.state.add_message,
         direction: 'fromMe',
         seen:false
       }
       arr.push(newobj2)
       this.setState({ Data: arr, add_message: '' })
     }
   }
 
   changeSwitch() {
 this.setState({isSwitchEnabled:!this.state.isSwitchEnabled})
 let newData=this.state.Data
 if(newData==[]){
 
 }else{
   for(i=0;i<newData.length;i++){
     newData[i].seen=true
   }
   this.setState({Data:newData})
 }
   }
 
   render() {
     return (
       <>
         <ScrollView style={{ backgroundColor: '#ddd' }}>
           <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5, flex: 0.2, }}>
             <Text style={{
               fontSize: 25,
               fontWeight: 'bold',
               textAlign: 'center',
               marginTop: 5
             }}>
               {this.state.isSwitchEnabled ? 'Me' : 'You'}
 
             </Text>
             <Switch trackColor={{false:"#767577",true:"#053a17"}}
             value={this.state.isSwitchEnabled}
               onValueChange={
                 (value) => {
 
                   this.setState({ isSwitchEnabled: value })
 this.changeSwitch()
 
                 }}
                 thumbColor={false?"#f5dd4b":"#f4f3f4"}
             />
 
 
           </View>
         </ScrollView>
         <ScrollView style={{ backgroundColor: '#ddd' }}>
 
           {this.state.Data.map((Message) => (
             (Message.direction == 'fromMe') ?
 
               (
                 <View style={{ width: '50%', alignSelf: 'flex-end' }}>
                   <View
                     style={{
                       borderRadius: 10,
                       backgroundColor: '#252222',
                       alignSelf: 'flex-end',
                       marginTop: 20,
                       marginRight: 10
                     }}
                   >
                     <Text style={{ marginTop: 5, fontSize: 17, marginLeft: 5, marginRight: 5, color: '#fff' }}>{Message.message} </Text>
                     {(Message.seen) ? 
                       <Icon name='check-double' style={{ color: '#4d6c88' }} size={10} />
                      :    <Icon name='check' style={{ color: '#ddd' }} size={10} />
                     }
                   </View>
                 </View>)
 
               :
 
               (
                 <View style={{ width: '50%', alignSelf: 'flex-start', }}>
                   <View
 
                     style={{
                       borderRadius: 10,
                       backgroundColor: '#213e0f',
                       alignSelf: 'flex-start',
                       marginTop: 20,
 
                       marginLeft: 10,
 
                     }}
                   >
                     <Text style={{ marginTop: 5, fontSize: 17, marginLeft: 5, marginRight: 5, color: '#fff' }}>{Message.message} </Text>
                     {(Message.seen) ? 
                       <Icon name='check-double' style={{ color:'#4d6c88' }} size={10} />
                   : <Icon name='check' style={{ color:'#ddd' }} size={10} />
                     }
                   </View>
                 </View>)
 
 
 
           ))}
 
 
         </ScrollView>
 
 
         <View style={{ backgroundColor: '#ddd', }}>
           <View style={{ flexDirection: 'row', flex: 0.10, marginBottom: 55 }}>
 
             <TextInput
 
               value={this.state.add_message}
               onChangeText={
                 (value) => {
                   this.setState({ add_message: value })
                 }
               }
               style={{
                 width: '80%',
                 height: 50,
                 borderRadius: 25,
                 backgroundColor: '#f1f5ef',
                 color: '#000',
 
                 fontSize: 17,
 
 
               }}
             ></TextInput>
 
             <TouchableOpacity
               onPress={
                 () => {
                   this.add()
 
                 }
               }
               style={{
                 width: 50,
                 height: 50,
                 borderRadius: 25,
                 backgroundColor: '#213e0f',
                 marginLeft: 15
               }}
 
             >
               <Icon name='telegram-plane' size={27} style={{ alignSelf: 'center', marginTop: 10, color: '#fff' }}></Icon>
             </TouchableOpacity>
           </View>
         </View>
 
       </>
     )
   }
 }
