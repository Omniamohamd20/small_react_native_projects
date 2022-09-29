
import * as React from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, Modal, Switch, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: [{
        p: 'صلي علي محمد',
        img: require("./img/20.jpg"), name: 'Omnia Mohamed', icon: 1, 
       comments: []} , 
       {
        p: 'Be proud of the progress you make, however small. Progress is progress. ',
        img: require("./img/20.jpg"), name: 'Omnia Mohamed', icon: 1, 
       comments: []} ,
       {
        p: '"لا تُربوا أولادكم كما ربَاكم أباؤكم، فَقد خلقوا لِزمان غير زمَانكم"💙 - الامام علي بن أبي طالب.',
        img: require("./img/20.jpg"), name: 'Omnia Mohamed', icon: 1, 
       comments: []} ,
       {
        p: 'عض الحقائق اللى غالبا محتاج تسمعها:  - عادي يكون جسمك مش احلى حاجة  - عادي تكون بتoverthink حاجات حصلتلك او احتمال تحصلك - عادي تحس انك مش محقق اللى عايزه في السن ده - عادي انك فجاة تحس بقلق بدون سبب السوشيال ميديا ممكن تحسسك ان الحاجات ديه مش عادية...بس الحاجات ديه ',
        img: require("./img/20.jpg"), name: 'Omnia Mohamed', icon: 1, 
       comments: []} 

],
      visible1: false,
      visible2: false,
      visible3:false,
      TextValue: '',
      item_index: '',
      item_message: '',
      addpost:' ',
      newcomments:[],
      addreply:'',
      reply:false
    }
  }
  addpost() {
    let arr = this.state.posts;
    let newobj1 = {
     p: this.state.addpost,
     img: require("./img/20.jpg"), name: 'Omnia Mohamed', icon: 1,
     comments:[]
    }
    arr.unshift(newobj1)
    this.setState({ posts: arr,addpost: '' })
    this.storeposts()
     }
  likefun(index) {
    let newlist = this.state.posts
    newlist[index].icon = (newlist[index].icon == 0) ? 1 : 0
    this.setState({ posts: newlist })
    this.storeposts()
  }
  fun() {
let arr = this.state.posts;
let newobj1 = {
 name:'Omnia Mohamed',
 message: this.state.TextValue,
}
arr[this.state.item_index].comments.push(newobj1)
this.setState({ posts: arr, TextValue: '' })
 this.storeposts()
 }
 funreply(){

let arr = this.state.posts;
let newobj1 = {
 name:'Omnia Mohamed',
 message: this.state.addreply,
}
arr[this.state.item_index].replycomments.push(newobj1)
this.setState({ posts: arr,addreply: '' })
 this.storeposts()
 }
  delete(index) {
    let newlist = this.state.posts
    newlist[this.state.item_index].comments.splice(index, 1)
    this.setState({ posts: newlist })
    this.storeposts()
  }

  edit() {
    let newlist = this.state.newcomments
    newlist[this.state.item_index].message = this.state.item_message

    this.setState({ newcomments: newlist })
     this.storeposts()
  }
  edit1(index) {
    let newlist = this.state.newcomments
    this.setState({
      item_index: index,
      item_message: newlist[index].message
    })
    this.storeposts()
  }

  async setposts() {
    let arr = this.state.posts
    await AsyncStorage.setItem('post', JSON.stringify(arr))

  }
  async getposts() {
    let arr = await AsyncStorage.getItem('post')
    if (arr == null) { arr = [] }
    else {
      arr = JSON.parse(arr)
    }
    this.setState({ posts: arr })
  }

  async storeposts() {
    let arr = this.state.posts
    await AsyncStorage.setItem('post', JSON.stringify(arr))
  }
  componentDidMount() {
    this.setposts()
    this.getposts()
  }

  render() {
    return (
      <>
         <ScrollView>
         <View style={{marginBottom:5}}>
           <Icon name={'smile-wink'} style={{ marginTop: 5, marginLeft: 260, fontSize: 25, fontWeight: 'bold', color: '#3F77D4'}}/>
          <Text style={{  fontSize: 25, fontWeight: 'bold', color: '#3F77D4',marginTop:-30}}>  تواصل    </Text>
          </View>
          <View style={{ borderColor: '#ABAAAD', borderWidth: 1 ,width:350,borderRadius:20,marginLeft:5,marginBottom:5}}>
         <TextInput
             style={{
              backgroundColor:'#fff',
              color:'#000',
              width: 300,
              height: 40,
              marginHorizontal: 30,
              borderRadius: 15,
              borderColor: '#ABAAAD',
              borderWidth: 1,
              marginTop: 10
            }}
            value={this.state.addpost}
            onChangeText={(value) => {
              this.setState({ addpost : value })
            }}
            />
            <TouchableOpacity
            onPress={() => {
              this.addpost()
            }}
            style={{
              borderColor: '#ABAAAD ',backgroundColor:'#fff',
              borderWidth: 1, marginTop: 10, width: 100, height: 30, marginHorizontal: 130, borderRadius: 30,marginBottom:5
            }} >
            <Text style={{ marginLeft: 35, marginTop: 5, fontWeight: 'bold' }}>Post</Text>
          </TouchableOpacity>
          </View>
          {this.state.posts.map((posts, index) => (
            <View>
            <View style={{ borderColor: '#ABAAAD', borderWidth: 2 }}
              key={index}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={posts.img} style={{ height: 40, width: 40, borderRadius: 20, marginTop: 5 }} />
                <Text style={{ fontWeight: 'bold', marginTop: 15, marginLeft: 5 }}>{posts.name}</Text>
                <TouchableOpacity >
                  <Icon name='angle-down' style={{ marginTop: 15, marginLeft: 185, fontSize: 15 }} />
                </TouchableOpacity>
              </View>
              <Text style={{ marginHorizontal: 5, marginTop: 10, marginBottom: 10 }}>{posts.p}</Text>
              <View style={{ flexDirection:'row', marginBottom: 5, borderTopWidth: 1, borderTopColor: '#D8E4EA' }}>
                <TouchableOpacity onPress={() => { this.likefun(index) }}>
                  <Icon name='thumbs-up' style={{ fontSize: 20, marginLeft: 90, marginTop: 5, color: (posts.icon) ? '#000' : '#3F77D4' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.setState({ visible1: true , item_index:index , newcomments : this.state.posts[index].comments }) }} >
                  <Icon name='comment' style={{ fontSize: 20, marginLeft: 140, marginTop: 5 }} />
                </TouchableOpacity>
                </View>
                </View>
                {posts.comments.map((comments,index)=>(
                (index<=1)?
                (
                  <View>
                  <Image source={require("./img/20.jpg")} style={{width:30,height:30,borderRadius:15,marginTop:3,marginLeft:3}}/>
                 <View
                  style={{
                    borderRadius: 10,
                    backgroundColor: '#ABAAAD',
                    alignSelf: 'flex-start',
                    marginTop: 1,
                    marginLeft: 35,
                    marginTop:-30,
                    marginBottom:3
                  }}
                  key={index}   >
                   <Text style={{ marginTop:1, fontSize: 15, marginLeft:5,fontWeight:'bold',marginRight:5 }}>{comments.name}</Text>
                  <Text style={{  fontSize: 17,marginHorizontal:5 }}>{comments.message}</Text>
                </View>
                </View>):
                null
                 ) )}
            </View>
          ))}
        </ScrollView>

        <Modal visible={this.state.visible1}
         onRequestClose={() => { this.setState({ visible1: false }) }}>
          <View style={{ flex: 0.07, marginBottom: 10 }}>
            <Text style={{ marginTop: 5, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#9299A6' }}> Comments </Text>
          </View>
          <View style={{ flex: 0.9 }}>
            {this.state.newcomments.map((comments, index) =>(
              <View>
                <Image source={require("./img/20.jpg")} style={{width:30,height:30,borderRadius:15,marginTop:3,marginLeft:3}}/>
                <View
                  style={{
                    borderRadius: 10,
                    backgroundColor: '#ABAAAD',
                    alignSelf: 'flex-start',
                    marginTop: -30,
                    marginLeft: 40,
                    flexDirection: 'row'
                  }}
                  key={index}   >
                       <Text style={{ marginTop: 2, fontSize: 15, marginLeft: 5, marginRight: 5, fontWeight:'bold' }}>{comments.name}</Text>
                  <Text style={{  fontSize: 17,marginTop:15 }}>{comments.message}</Text>
                  <TouchableOpacity
            onPress={() => {
              this.delete(index)
              this.setState({ visible2: false })
            }}
            style={{
              marginTop: 20,
              marginRight:10,
              marginBottom:3
            }}>
              <Icon name ='trash' size={15}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.edit1(index)
              this.setState({ visible2: true ,message:this.state.item_message  })
            }}
            style={{
              marginTop: 20,
              marginRight:10,
              marginBottom:3
            }}>
              <Icon name ='edit' size={15}/>
          </TouchableOpacity>

                </View>
             <TouchableOpacity
             style={{alignSelf:'flex-start',marginLeft:50}}
             onPress={()=>this.setState({newreplycomments:this.state.posts[index].replycomments,reply:true})}
             >
               <Text style={{fontSize:16}}>reply</Text></TouchableOpacity>


             </View>
             ) )}
          </View>
          <View style={{ flexDirection: 'row', flex: 0.1 }}>
            <TextInput value={this.state.TextValue}
              onChangeText={(value) => {
                this.setState({ TextValue: value })
              }}
              placeholder={'  Write a comment '}
              style={{
                height: 40,
                width: 300,
                backgroundColor: '#fff',
                marginLeft: 10,
                borderRadius: 27,
                borderColor: '#ABAAAD',
                borderWidth: 1,
              }} />
            <TouchableOpacity onPress={() => {
              this.fun()
            }}>
              <Icon name='paper-plane' 
              style={{ fontSize: 20, marginLeft: 10, color: '#3F77D4', marginTop: 10 }} />
            </TouchableOpacity>
          </View>
        </Modal>  


          <Modal visible={this.state.visible2}>
               <View
                style={{
                  height: 40,
                  width: 100,
                  marginLeft: 10,
                  marginTop: 10
                }}>
                <Text style={{ marginTop: 20, marginLeft: 10, textDecorationLine: 'underline' }}>Edit comment</Text>
              </View>
              <TextInput
                 style={{
                  color:'#000',
                  width: 300,
                  height: 50,
                  marginHorizontal: 30,
                  borderRadius: 15,
                  borderColor: '#ABAAAD',
                  borderWidth: 1,
                  marginTop: 10
                }}
                value={this.state.item_message}
                onChangeText={(value) => {
                  this.setState({ item_message : value })
                }}
               defaultValue={this.state.item_message}
                />
              <TouchableOpacity
                onPress={() => {
                  this.edit()
                  this.setState({ visible2: false })
                }}
                style={{
                  borderColor: '#ABAAAD',
                  borderWidth: 1, marginTop: 10, width: 150, height: 50, marginHorizontal: 90, borderRadius: 30
                }} >
                <Text style={{ marginLeft: 60, marginTop: 15, fontWeight: 'bold' }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ visible2: false })
                }}
                style={{
                  borderColor: '#ABAAAD',
                  borderWidth: 1, marginTop: 10, width: 150, height: 50, marginHorizontal: 90, borderRadius: 30
                }} >
                <Text style={{ marginLeft: 50, marginTop: 15, fontWeight: 'bold' }}>Cancel</Text>
              </TouchableOpacity>
            </Modal>

      </>
    )
  }
}



