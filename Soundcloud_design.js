//This is a soundcloud design using a models.
import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [{name:'مهم جدا . حسين الجاسمي',img:require("./img/important.jpg")},
              {name:'لما تقول ي عوم . أصالة', img:require("./img/swim.jpg")},
              {name:'الرقصه الاخيره . مصطفي امين',img:require("./img/dance.jpg")} ]
    ,songs1:[{name:'country . Amr Diab',img:require("./img/country.jpg")},
    {name:'اسمي . أدهم سليمان',img:require("./img/name.jpg")},
    {name:'الغساله',img:require("./img/ghsala.jpg")}],

    songs2:[{name:'اختراع . تامر حسني و العسيلي',img:require("./img/tamer.jpg")},
    {name:'حسين الجاسمي .مهم جدا',img:require("./img/important.jpg")}
    ,{name:'يوم جديد . أمير عيد',img:require("./img/new.jpg")},
    {name:'مكانك في قلبي . عمر دياب ',img:require("./img/amr.jpg")},
    {name:'صحاب أصلية . حمزه نمرة',img:require("./img/friends.jpg")},
  {name:'كايروكي . ليلي ',img:require("./img/liala.jpg")},
  {name:'مهم جدا . حسين الجاسمي',img:require("./img/important.jpg")},
  {name:'لما تقول ي عوم . أصالة', img:require("./img/swim.jpg")},
  {name:'الرقصه الاخيره . مصطفي امين',img:require("./img/dance.jpg")}],
      visible: false,
      visible1: false,
      visible2: false,
      visible3:false
    }
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#171619'} />
        <View style={{ backgroundColor: '#171619', flex: 1 }}>
          <View style={{backgroundColor:'#262528',height:50}}>
            <Text style={{ color: '#99979E', marginLeft: 25,marginTop:15, fontSize: 20 }}>Home</Text>
            <Icon name='arrow-circle-up'size={20} color={'#99979E'} style={{marginTop:-28,marginLeft:270}}/>
            <Icon name='bell'size={20} color={'#99979E'} style={{marginTop:-20,marginLeft:320}}/>   
        </View>

        <View style={{height:300,backgroundColor:'#262528',marginTop:20 ,flexDirection:'row'}}>
          <Text style={{color:'#FFFFFF',fontSize:20,marginLeft:20,marginTop:5}}>More of what you like </Text>
          <Text style={{color:'#99979E',marginTop:30,marginLeft:-195}}>Suggestions based on what you have liked or played</Text>
        <ScrollView horizontal={true} style={{marginLeft:-340}}>
       { this.state.songs.map((songs)=>(

        <TouchableOpacity  style={{width:150,height:110 ,marginTop:70,marginLeft:10}}> 
          <Image source={songs.img} style={{width:150, height:150,resizeMode:'stretch'}}/>
          <Text style={{fontSize:15 ,color:'#99979E'}}>{songs.name}</Text>
       </TouchableOpacity>
    )) }
   </ScrollView>
        </View> 
        <View style={{height:250,backgroundColor:'#262528',marginTop:20}}>
        <Text style={{color:'#FFFFFF',fontSize:20,marginLeft:15,marginTop:5}}>Chart :Top 50 </Text>
          <Text style={{color:'#99979E',marginTop:5,marginLeft:15}}>The most played tracks on soundcloud...</Text>
        <ScrollView horizontal={true} style={{marginTop:-60}}>
       { this.state.songs1.map((songs1)=>(
        <TouchableOpacity  style={{width:150,height:110 ,marginTop:70,marginLeft:10}}> 
          <Image source={songs1.img} style={{width:150, height:150,resizeMode:'stretch'}}/>
          <Text style={{fontSize:15 ,color:'#99979E'}}>{songs1.name}</Text>
       </TouchableOpacity>
    )) }
   </ScrollView>
        </View>
        <View style={{backgroundColor:'#262528',height:60,marginTop:20}}>
        <Icon name='home'size={25} style={{color:'#FFFFFF',marginTop:15,marginLeft:25}}/>
        <TouchableOpacity
            onPress={() => {
              this.setState({ visible: true }
              )
            }
            }
            style={{  marginTop: -25, marginLeft: 130 }} >
              <Icon name='bolt'size={25} style={{color:'#99979E'}}/>
              </TouchableOpacity>
              <TouchableOpacity
            onPress={() => {
              this.setState({ visible1: true }
              )
            }
            }
            style={{  marginTop: -25, marginLeft: 210 }} >
              <Icon name='search'size={25} style={{color:'#99979E'}}/>
              </TouchableOpacity>
              <TouchableOpacity
            onPress={() => {
              this.setState({ visible2: true }
              )
            }
            }
            style={{  marginTop: -27, marginLeft: 300 }} >
              <Icon name='heart'size={25} style={{color:'#99979E'}}/>
              </TouchableOpacity>
        </View>
        </View>
        <Modal visible={this.state.visible} >
          <View style={{backgroundColor:'#000',flex:1}}>
        <View style={{backgroundColor:'#262528',height:50}}>
            <Text style={{ color: '#99979E', marginLeft: 25,marginTop:15, fontSize: 20 }}>Stream</Text>

        </View>
        <View style={{height:600,backgroundColor:'#262528',marginTop:20}}>
          <Text style={{fontSize:20,color:'#FFFFFF',marginTop:150,marginLeft:80}}>Hear The lasts tracks</Text>
          <Text style={{color: '#99979E',marginLeft:60,marginHorizontal:10,marginTop:15}}>Follow your favorite artists , bands and podcasts to hear their lastest tracks 
          </Text>
          <TouchableOpacity   onPress={() => {
              this.setState({ visible1: true }
              )
            }
            } 
          style={{backgroundColor:'#E56428',height:40,width:280,marginTop:20,marginLeft:45}}>
            <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:20,marginLeft:50,marginTop:5}}>Find people to Follow</Text></TouchableOpacity>
        </View>

        </View>
        <View style={{backgroundColor:'#171619'}}>
        <View style={{backgroundColor:'#262528',height:60,marginTop:20}}>
        <TouchableOpacity  onPress={() => {
              this.setState({ visible1: false,visible:false,visible2:false }
              )
            }
            } >
      <Icon name='home'size={25} style={{color:'#99979E',marginTop:15,marginLeft:25}}/>
      </TouchableOpacity>
        <Icon name='bolt'size={25} style={{color:'#FFFFFF', marginTop: -25, marginLeft: 130 }}/>
        <TouchableOpacity
            onPress={() => {
              this.setState({ visible1: true }
              )
            }
            }
            style={{  marginTop: -25, marginLeft: 210 }} >
              <Icon name='search'size={25} style={{color:'#99979E'}}/>
              </TouchableOpacity>

              <TouchableOpacity
            onPress={() => {
              this.setState({ visible2: true }
              )
            }
            }
            style={{  marginTop: -25, marginLeft: 310 }} >
              <Icon name='heart'size={25} style={{color:'#99979E'}}/>
              </TouchableOpacity>
        </View>
        </View>
</Modal>
          <Modal visible={this.state.visible1}>
          <View style={{ backgroundColor: '#171619', flex: 1 }}>
          <View style={{backgroundColor:'#262528',height:50}}>  
            <TextInput placeholder={'Search Soundloud'} 
            placeholderTextColor={'#99979E'} style={{backgroundColor:'#171619',color:'#99979E', width:330, marginLeft: 18,height:40,marginTop:5,borderRadius:5 }}>
              </TextInput></View>

      <View style={{backgroundColor:'#262528',height:60,marginTop:600}}>
      <TouchableOpacity  onPress={() => {
              this.setState({ visible1: false,visible:false,visible2:false }
              )
            }
            } >
      <Icon name='home'size={25} style={{color:'#99979E',marginTop:15,marginLeft:25}}/>
      </TouchableOpacity>
        <Icon name='bolt'size={25} style={{color:'#FFFFFF', marginTop: -25, marginLeft: 130 }}/>
        <Icon name='search'size={25} style={{color:'#99979E',marginTop: -25, marginLeft: 210}}/>
              <TouchableOpacity
            onPress={() => {
              this.setState({ visible2: true }
              )
            }
            }
            style={{  marginTop: -25, marginLeft: 310 }} >
              <Icon name='heart'size={25} style={{color:'#99979E'}}/>
              </TouchableOpacity>
        </View>
</View>
</Modal>

            <Modal visible={this.state.visible2}>
            <View style={{backgroundColor:'#000',flex:1}}>
        <View style={{backgroundColor:'#262528',height:50}}>
            <Text style={{ color: '#99979E', marginLeft: 25,marginTop:5,marginBottom:10, fontSize: 20 }}>Library</Text>
            <Text style={{ color: '#99979E', marginLeft: 25, fontSize: 15,marginTop:-15 }}>Liked tracks.</Text>
        </View>
        { this.state.songs2.map((songs2)=>(
          <TouchableOpacity 
          onPress={() => {
            this.setState({ visible3:true}
            )
          }
          } 
          style={{height:80,marginTop:10,marginLeft:5}}>
            <Image source={songs2.img} style={{height:70,width:70,resizeMode:'stretch'}}/>
        <Text style={{fontSize:20,color:'#FFFFFF',marginRight:60,marginTop:-45,}}>{songs2.name}</Text>
          </TouchableOpacity>
        ))}
      <View style={{backgroundColor:'#262528',height:60,marginTop:-200}}>
      <TouchableOpacity  onPress={() => {
              this.setState({ visible1: false,visible:false,visible2:false }
              )} } >
      <Icon name='home'size={25} style={{color:'#99979E',marginTop:15,marginLeft:25}}/>
      </TouchableOpacity>
        <Icon name='bolt'size={25} style={{color:'#99979E', marginTop: -25, marginLeft: 130 }}/>
              <Icon name='search'size={25} style={{color:'#99979E',marginTop:-25,marginLeft:210}}/>
              <Icon name='heart'size={25} style={{color:'#FFFFFF',marginTop: -25, marginLeft: 310}}/>
              </View>
        </View>
          </Modal>

      </>
    )
  }
}
