
import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, StatusBar, AsyncStorage } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class Souk extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [
        { name: 'HP zbook 15 G2', price: 8000, img: require("./img/hp.jpg"),details:'حجم الشاشة : 15.6 بوصة . معالج : Intel Core i7-4910MQ . معالج رسومي : NVIDIA Quadro K2100M . ذاكرة عشوائية : 32 جيجا بايت DDR3L .', valid: 1 },
        { name: 'Dell inspiration 15 3593', price: 11250, img: require("./img/dell.jpg"),details:'  Computer CPU Manufacturer : intel.  Processor Type : null. Hard Disk Interface : Serial ATA . Model Number : Dell Inspiron 15-3593  واجهة القرص الصلب : null.' ,valid: 1 },
        { name: 'Samsung Galaxy J6', price: 3000, img: require("./img/j6.jpg"), valid: 1 },
        { name: 'Dell 3567', price: 8875, img: require("./img/dell1.jpg"), valid: 1 },
        { name: 'Hp Elitebook 8470p', price: 4500, img: require("./img/hpelite.jpg"), valid: 1 },
        { name: 'Lenovo yoga C940', price: 16434, img: require("./img/lenovo.jpg"), valid: 1 },
        { name: 'Huawei y9 2019', price: 3800, img: require("./img/huawei.jpg"), valid: 1 },
        { name: 'iphone 11 pro', price: 29000, img: require("./img/iphone.jpg"), valid: 1 },
        { name: 'Apple MacBook air', price: 21910, img: require("./img/mac.jpg"), valid: 1 },
        { name: 'Oppo Reno 2', price: 7000, img: require("./img/oppo.jpg"), valid: 1 },
        { name: 'Oppo Reno 2F', price: 5400, img: require("./img/oppo1.jpg"), valid: 1 },
        { name: 'Lenovo V145-15AST', price: 6998, img: require("./img/lenovo1.jpg"), valid: 1 },
      ],obj:{name:'', price:'',img:''},
      item_index: '',
      item_name: '',
      item_price: '',
      visible: false,
      visible1: false,
    }
  }
componentDidMount(){
  this.getlist()

}
  delete(index){
 let newstate = this.state.product
 newstate.splice(index,1)
 this.setState({product:newstate})
 this.storelist()
  }

    edit() {
    let newlist = this.state.product
    newlist[this.state.item_index].name = this.state.item_name
    newlist[this.state.item_index].price = this.state.item_price
    this.setState({ product: newlist })
    this.storelist()
  }
  edit1(index) {
    let newlist = this.state.product
    this.setState({
      item_index: index,
      item_name: newlist[index].name,
      item_price: newlist[index].price,
    })
    this.storelist()
  }
    icon(index){
   let newlist =  this.state.product
   newlist[index].valid=(newlist[index].valid==0)?1:0
    this.setState({product:newlist})
    this.storelist()
   }
   async getlist(){
     let arr= await AsyncStorage.getItem("list")
     if(arr==null){arr=[]}
     else{
       arr=JSON.parse(arr)
      }
     this.setState({product:arr})
   }

   async storelist(){
     let arr=this.state.product
     await AsyncStorage.setItem("list",JSON.stringify(arr))
   }

  render() {
    return (
      <>

        <View style={{ backgroundColor: '#296073', height: 50, width: 400 }}>
          <Text style={{ color: '#FFF', marginLeft: 15, fontWeight: 'bold', marginTop: 5, fontSize: 30 }}>Home</Text>
          <Icon name='search' size={20} color={'#FFF'} style={{ marginTop: -28, marginLeft: 320 }} />
        </View>
        <ScrollView horizontal={true} style={{marginBottom:10,height:60}}>
        <TouchableOpacity style={{ backgroundColor: '#296073', width: 100, height: 40, marginLeft: 5, marginVertical: 5, borderRadius: 15 }}>
          <Text style={{ color: '#FFF', margin: 10 }}># Best seller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#296073', width: 120, height: 40, borderRadius: 15,marginTop:5,marginLeft:5 }}>
          <Text style={{ color: '#FFF', fontSize: 12, margin: 10 }}># Most searched</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#296073', width: 100, height: 40, borderRadius: 15 ,marginTop:5,marginLeft:5 }}>
           <Text style={{ color: '#FFF', margin: 10 }}># Top charts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#296073', width: 100, height: 40,  borderRadius: 15 ,marginLeft:5,marginTop:5 }}>
        <Text style={{ color: '#FFF',marginTop:10,marginLeft:10 }}># Trending</Text>
        </TouchableOpacity>
        </ScrollView>



        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {this.state.product.map((product, index) => (
              <TouchableOpacity key={index}
                onPress={() => {
                  this.setState({obj:product, visible: true, name: product.name, price: product.price + "" })
                  this.edit1(index)
                }}  >
                <View style={{ height: 220, width: 175, backgroundColor: '#296073', borderColor: '#000',
borderWidth: 1, margin: 2, borderRadius: 10 }}>
                  <Image source={product.img} resizeMode='stretch' style={{ height: 120, width: 150, marginLeft: 10, marginTop: 10 }} />
                  <Text style={{ marginHorizontal: 10, color: '#FFF', marginTop: 3 }}>{product.name}</Text>
                  <Text style={{ marginHorizontal: 10, color: '#FFF' }}>{product.price + '  LE'}</Text>
                  <TouchableOpacity onPress={()=>{this.icon(index)}} >
                    <Icon name={(product.valid)?'heart':'gratipay'} style={{marginLeft:140,fontSize:20,color:'#fff',marginTop:-10}}/>
                  </TouchableOpacity>

                  <Text style={{ color: '#FFF', marginLeft: 120, textDecorationLine: 'underline',marginTop:5 }}>Details</Text>

                </View>
              </TouchableOpacity>

            ))}
          </View>
        </ScrollView>



        <Modal visible={this.state.visible}
          onRequestClose={() => { this.setState({ visible: false }) }}  >
          <View style={{ backgroundColor: '#296073', height: 50, width: 400 }}>

            <Text style={{ color: '#FFF', marginLeft: 10, marginTop: 10, fontSize: 20,fontWeight:'bold' }}>{this.state.obj.name}</Text>
          </View>

          <ScrollView style={{borderWidth:5,borderColor:'#296073',flex:1}} >
        <View flexDirection={'row'}>
          <Image source={this.state.obj.img} resizeMode='stretch' style={{height:200,width:200,marginTop:10,marginLeft:20,borderWidth:1,borderColor:'#AAA3B4'}}/>
          <TouchableOpacity onPress={()=>{this.icon(this.state.item_index)}} >
                    <Icon name={(this.state.obj.valid)?'heart':'gratipay'} style={{marginLeft:40,fontSize:30,color:'#000',marginTop:170}}/>
           </TouchableOpacity>
           </View>
          <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:20}}> Product's name : {this.state.obj.name}</Text>
          <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}> Price : {this.state.obj.price}</Text>
          <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:5}}> Details : {this.state.obj.details}</Text>
        <TextInput style={{height:100,width:300,borderWidth:2,borderColor:'#296073',marginLeft:20,marginTop:10}}
        placeholder={'Notes'}/>


        <TouchableOpacity onPress={()=>{this.setState({visible1:true})}}
        style={{height:50,width:50,borderRadius:25,backgroundColor:'#296073',marginTop:40,marginLeft:100}}>
          <Icon name='edit' size={20} color={'#fff'} style={{marginLeft:15,marginTop:15}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                        this.delete(this.state.item_index)
                         this.setState({visible:false})}}
        style={{height:50,width:50,borderRadius:25,backgroundColor:'#296073',marginTop:-50,marginLeft:200}}>
          <Icon name='trash' size={20} color={'#fff'} style={{marginLeft:15,marginTop:15}}/>
        </TouchableOpacity>
          </ScrollView>
        </Modal>





        <Modal visible={this.state.visible1}
           onRequestClose={() => { this.setState({ visible1: false }) }} >
                <View style={{ backgroundColor: '#296073', height: 50, width: 400 }}>

        <Text style={{ color: '#FFF', marginLeft: 10, marginTop: 10, fontSize: 20,fontWeight:'bold' }}>update</Text>
      </View>
         <View style={{borderWidth:5,borderColor:'#296073',flex:1}}>
            <TextInput value={this.state.item_name}
            onChangeText={(value) => { this.setState({ item_name: value }) }}
            style={{ backgroundColor: '#296073', width: 300, height: 50, marginTop: 20, marginHorizontal: 30, borderRadius: 15 ,color:'#fff'}}
            defaultValue={this.state.name} />
          <TextInput value={this.state.item_price}
            onChangeText={(value) => { this.setState({ item_price: value }) }}
            style={{ backgroundColor: '#296073', padding: 10, width: 300, height: 50, marginVertical: 20, marginHorizontal: 30, borderRadius: 15 ,color:'#fff'}}
            defaultValue={this.state.price} />
          <TouchableOpacity onPress={
            () => {
              this.edit()
              this.setState({ visible1:false,visible: false })
            }
          }
            style={{ backgroundColor: '#296073', marginTop: 30, width: 150, height: 50, marginHorizontal: 90, borderRadius: 30 }}
          ><Text style={{ marginLeft: 60, marginTop: 15,color:'#fff',fontWeight:'bold' }}>update</Text></TouchableOpacity>
      </View>
        </Modal>
      </>
    )
  }
 }



