
//واتساب

import * as React from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, Modal, Switch } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sms: [],
      add_message: '',
      isSwitchEnabled: false,
      fromMe: true
    }
  }

  add() {
    let arr = this.state.sms
    if (this.state.isSwitchEnabled == true) {
      let newobj1 = {
        message: this.state.add_message,
        direction: 'toMe',
        seen: false
      }
      arr.push(newobj1)
    } else {
      let newobj2 = {
        message: this.state.add_message,
        direction: 'formMe',
        seen: false
      }
      arr.push(newobj2)

    }
    this.setState({ sms: arr, add_message: '' })
  }
  changeswitch(){
      this.setState({isSwitchEnabled:!this.state.isSwitchEnabled})
      let newdata = this.state.sms
      if(newdata==[]){}
      else{
          for(let i=0 ; i<newdata.length ;i++){
              newdata[i].seen=true
          }
      }
  }
  render() {
    return (
      <>
        <ScrollView >
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5, flex: 0.1, backgroundColor: '#D5CABD' }}>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 5
            }}>
              {this.state.isSwitchEnabled ? '   me   ' : '   you   '}
            </Text>
            <Switch value={this.state.isSwitchEnabled} style={{ color: '#D5CABD' }}
              onValueChange={
                (value) => {
                  this.setState({ isSwitchEnabled: value})
                 this.changeswitch()
                }} />
          </View>
        </ScrollView>

        <ScrollView >
          {this.state.sms.map((Message) => (
            (Message.direction == 'fromMe') ?
              (<View style={{width:'80%',alignSelf: 'flex-end'}}>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: '#936C00',
                  alignSelf: 'flex-end',
                  marginTop: 10,
                  marginRight: 10
                }}
              >
                <Text style={{ marginTop: 10, fontSize: 17, marginLeft: 5, marginRight: 5, color: '#fff' }}>{Message.message} </Text>
              {(Message.seen==true)?
               ( <Icon name='check-double' color='#fff' style={{ marginLeft: 5, marginRight: 15 }} size={10} />):null
              }
              </View>
              </View>
              )
              :
              (<View style={{width:'80%',alignSelf: 'flex-start'}}>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: '#936C00',
                  alignSelf: 'flex-start',
                  marginTop: 10,
                  marginLeft: 10
                }}  >
                <Text style={{ marginTop: 10, fontSize: 17, marginLeft: 5, marginRight: 5, color: '#fff' }}>{Message.message} </Text>
                {(Message.seen==true)?
               ( <Icon name='check-double' color='#fff' style={{ marginLeft: 5, marginRight: 15 }} size={10} />):
               (<Icon name='check' color='#fff' style={{ marginLeft: 5, marginRight: 15 }} size={10} />)
              }
              </View>
              </View>)
          ))}
        </ScrollView>

        <View>
          <View style={{ flexDirection: 'row', flex: 0.10, marginBottom: 65 }}>
            <TextInput
              value={this.state.add_message}
              onChangeText={
                (value) => {
                  this.setState({ add_message: value })
                }
              }
              placeholder={'  Enter message'}
              style={{
                width: '80%',
                height: 50,
                borderRadius: 25,
                backgroundColor: '#D5CABD',
                color: '#000',
                marginLeft: 8,
                fontSize: 17
              }} />
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
                backgroundColor: '#7C662D',
                marginLeft: 5,
                justifyContent:'center'
              }} >
              <Text style={{alignSelf:'center', fontWeight: 'bold' }}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
 }

//  import * as React from 'react'
//  import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, Modal, Switch } from 'react-native'
//  import Icon from 'react-native-vector-icons/FontAwesome5'
//  export default class App extends React.Component {
//    constructor() {
//      super()
//      this.state = {
//        key: '',
//        Data: [],
 
//        add_message: '',
//        isSwitchEnabled: false,
//        fromMe: true,
 
//      }
//    }
 
 
//    add() {
//      let arr = this.state.Data
//      if (this.state.isSwitchEnabled == false) {
//        let newobj1 = {
//          message: this.state.add_message,
//          direction: 'toMe',
//  seen:false
 
 
 
//        }
 
//        arr.push(newobj1)
//        this.setState({Data:arr,add_message:''})
//      } else {
//        let newobj2 = {
//          message: this.state.add_message,
//          direction: 'fromMe',
//          seen:false
//        }
//        arr.push(newobj2)
//        this.setState({ Data: arr, add_message: '' })
//      }
//    }
 
//    changeSwitch() {
//  this.setState({isSwitchEnabled:!this.state.isSwitchEnabled})
//  let newData=this.state.Data
//  if(newData==[]){
 
//  }else{
//    for(i=0;i<newData.length;i++){
//      newData[i].seen=true
//    }
//    this.setState({Data:newData})
//  }
//    }
 
//    render() {
//      return (
//        <>
//          <ScrollView style={{ backgroundColor: '#ddd' }}>
//            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5, flex: 0.2, }}>
//              <Text style={{
//                fontSize: 25,
//                fontWeight: 'bold',
//                textAlign: 'center',
//                marginTop: 5
//              }}>
//                {this.state.isSwitchEnabled ? 'Me' : 'You'}
 
//              </Text>
//              <Switch trackColor={{false:"#767577",true:"#053a17"}}
//              value={this.state.isSwitchEnabled}
//                onValueChange={
//                  (value) => {
 
//                    this.setState({ isSwitchEnabled: value })
//  this.changeSwitch()
 
//                  }}
//                  thumbColor={false?"#f5dd4b":"#f4f3f4"}
//              />
 
 
//            </View>
//          </ScrollView>
//          <ScrollView style={{ backgroundColor: '#ddd' }}>
 
//            {this.state.Data.map((Message) => (
//              (Message.direction == 'fromMe') ?
 
//                (
//                  <View style={{ width: '50%', alignSelf: 'flex-end' }}>
//                    <View
//                      style={{
//                        borderRadius: 10,
//                        backgroundColor: '#252222',
//                        alignSelf: 'flex-end',
//                        marginTop: 20,
//                        marginRight: 10
//                      }}
//                    >
//                      <Text style={{ marginTop: 5, fontSize: 17, marginLeft: 5, marginRight: 5, color: '#fff' }}>{Message.message} </Text>
//                      {(Message.seen) ? 
//                        <Icon name='check-double' style={{ color: '#4d6c88' }} size={10} />
//                       :    <Icon name='check' style={{ color: '#ddd' }} size={10} />
//                      }
//                    </View>
//                  </View>)
 
//                :
 
//                (
//                  <View style={{ width: '50%', alignSelf: 'flex-start', }}>
//                    <View
 
//                      style={{
//                        borderRadius: 10,
//                        backgroundColor: '#213e0f',
//                        alignSelf: 'flex-start',
//                        marginTop: 20,
 
//                        marginLeft: 10,
 
//                      }}
//                    >
//                      <Text style={{ marginTop: 5, fontSize: 17, marginLeft: 5, marginRight: 5, color: '#fff' }}>{Message.message} </Text>
//                      {(Message.seen) ? 
//                        <Icon name='check-double' style={{ color:'#4d6c88' }} size={10} />
//                    : <Icon name='check' style={{ color:'#ddd' }} size={10} />
//                      }
//                    </View>
//                  </View>)
 
 
 
//            ))}
 
 
//          </ScrollView>
 
 
//          <View style={{ backgroundColor: '#ddd', }}>
//            <View style={{ flexDirection: 'row', flex: 0.10, marginBottom: 55 }}>
 
//              <TextInput
 
//                value={this.state.add_message}
//                onChangeText={
//                  (value) => {
//                    this.setState({ add_message: value })
//                  }
//                }
//                style={{
//                  width: '80%',
//                  height: 50,
//                  borderRadius: 25,
//                  backgroundColor: '#f1f5ef',
//                  color: '#000',
 
//                  fontSize: 17,
 
 
//                }}
//              ></TextInput>
 
//              <TouchableOpacity
//                onPress={
//                  () => {
//                    this.add()
 
//                  }
//                }
//                style={{
//                  width: 50,
//                  height: 50,
//                  borderRadius: 25,
//                  backgroundColor: '#213e0f',
//                  marginLeft: 15
//                }}
 
//              >
//                <Icon name='telegram-plane' size={27} style={{ alignSelf: 'center', marginTop: 10, color: '#fff' }}></Icon>
//              </TouchableOpacity>
//            </View>
//          </View>
 
//        </>
//      )
//    }
//  }

//تمارين كامل

// import * as React from 'react'
// import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, StatusBar } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome5'
// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       exercise: [
//         { name: 'High stepping ', img: require("./img/high-stepping.jpg"),explain:'So, with the high step, you are just going to lift your leg up as high as you can, pulling your knee towards your chest, up and up. You can bring your shoulder in as well so that you Are getting your upper body into it, okay? But it is simple, just stepping up. High step up and up .' },
//         { name: 'jump squats ', img: require("./img/squat.jpg"),explain:'Jump squats increase your explosive power, improve upper and lower body strength, and burn calories faster than regular squats. ... Plus, the flexibility gained in your ankles and hips from the fluid motion of a jump squat will help prevent injuries during other exercise routines .' },
//         { name: 'Butt bridge', img: require("./img/butt-bridge.jpg"),explain:'The basic bridge isolates and strengthens your gluteus (butt) muscles and hamstrings (back of the thigh). When done correctly, the move can also enhance core stability by targeting your abdominal muscles and the muscles of lower back and hip.'},
//         { name: 'Side hop ', img: require("./img/side-hop.jpg"), explain:'Start off in a standing position with your feet at hip width and your hands on your hips. ... Crouch down by bending your knees and hips, then jump sideways approximately a yard or as much as you can safely manage.'},
//         { name: 'Wall push-ups', img: require("./img/wall-push-ups.jpg"),explain:'Wall pushups are suitable for beginners or anyone with a shoulder injury. This type of pushup helps build shoulder and chest strength but places a reduced load on the muscles. Muscles worked: arms, shoulders, and chest. Stand in front of a wall, just over an arm is length away.' },
//         { name: 'Plank', img: require("./img/plank.jpg"),explain:'Since planks work your core, that means they work basically the whole body, from your pelvic girdle to your shoulder girdle as well as your legs. The plank strengthens your spine, your rhomboids and trapezius, and your abdominal muscles, which naturally ' },
//         { name: 'Crunches', img: require("./img/crunches.jpg"),explain:'To do a crunch: Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale.Exhale and lift your upper body, keeping your head and neck relaxed. Inhale and return to the starting position.' },
//         { name: 'Flutter kick squats', img: require("./img/flutter-kick-squats.jpg"),explain:'Flutter kicks are an exercise that works the muscles of your core, specifically the lower rectus abdominal muscles, plus the hip flexors. ... You can perform them lying on your back, or, if you want to also strengthen your back muscles, you can do them lying on your stomach' },
//         { name: 'Forward jump shuffle back', img: require("./img/forward-jump-shuffle-back.jpg"),explain:'Steps:• Stand with your feet hip-width apart, one foot starts slightly forward, the other slightly back.• Hop up and change your foot position. Quickly repeat by switching legs.Useful Tips:• Keep your feet parallel to the direction you are moving.• Keep your chest up, your back straight, and knees slightly bent throughout.• Take small but quick hops forward and back.You should feel your: • Hamstrings, quads and calves.' },
//         { name: 'Lunge back kick', img: require("./img/lunge-back-kick.jpg"),explain:' Start standing tall. Lunge back with one leg, dropping the back knee toward the ground as you sit back in your front heel. Drive through your front heel to come back up to standing without putting the other foot down.' },
//         { name: 'Squats', img: require("./img/squats1.jpg"),explain:'Squats Help Build Muscle. They do not just help you achieve wonderful, toned legs; they promote body-wide muscle building by creating an anabolic (muscle building) environment in the body. They work up your quadriceps, hamstrings, calves, abdominal muscles, lower back and your butt too' }],
//       obj: {
//         name: '', img: ''
//       },
//       visible: false,
//       visible1: false
//     }
//   }
//   render() {
//     return (
//       <>
//         <StatusBar backgroundColor={'#3D314A'} />
//         <View style={{ backgroundColor: '#AFA9B6', flex: 1 }}>
//           <Image source={require("./img/sport1.jpg")} style={{ width: 330, height: 200, marginTop: 180, marginLeft: 16, borderRadius: 10 }} />
//           <Text style={{ color: '#FFFFFF', marginHorizontal: 22, marginTop: 5 }}>What you do today for your body will be reflected in it tomorrow.</Text>
//           <TouchableOpacity
//             onPress={() => {
//               this.setState({ visible: true }
//               )
//             }
//             }
//             style={{ backgroundColor: '#3D314A', width: 200, height: 50, marginTop: 150, marginLeft: 78, borderRadius: 20 }}
//           ><Text style={{ color: '#FFFFFF', marginLeft: 65, fontSize: 35 }}>Start</Text>
//           </TouchableOpacity>
//         </View>
//         <Modal visible={this.state.visible} >
//           <View style={{ backgroundColor: '#AFA9B6', flex: 1 }}>
//             <View style={{ backgroundColor: '#3D314A', width: 360, height: 70 }}>
//             <TouchableOpacity  onPress={() => {
//                 this.setState({visible:false }  
//                  )} }
//       style={{backgroundColor:'#3D314A',height:40,width:100,marginTop:10,marginLeft:25,borderRadius:10}}>
//       <Icon name='arrow-alt-circle-left'size={25} color={'#FFFFFF'} style={{marginTop:20,marginBottom:5}}/>
//       </TouchableOpacity>
//               <Text style={{ fontSize: 25, color: '#FFFFFF', marginLeft: 60, marginTop: -25 ,marginBottom:5}}>Exercises</Text>
//             </View>
//             <ScrollView>
//               {this.state.exercise.map((exercise) => (
//                 <TouchableOpacity
//                   onPress={() => {
//                     this.setState({ visible1: true,obj:exercise }
//                     )
//                   }
//                   }
//                   style={{ height: 60, width: 340, backgroundColor: '#3D314A', marginTop: 10, borderRadius: 20, marginLeft: 10 }}>

//                   <Text style={{ fontSize: 18, color: '#FFFFFF', marginLeft: 10, marginTop: 20 }}>{exercise.name}</Text>
//                   <Image source={exercise.img} style={{ height: 50, width: 90, marginLeft: 240, marginTop: -40, borderRadius: 10 }} />
//                 </TouchableOpacity>
//               ))}
           
//             </ScrollView>
//           </View>
//           <Modal visible={this.state.visible1}>
//             <View style={{ backgroundColor: '#AFA9B6', flex: 1 }}>
//               <View style={{ backgroundColor: '#3D314A', width: 360, height: 50 }}>
//                 <Text style={{ fontSize: 25, color: '#FFFFFF', marginLeft: 20, marginTop: 10 }}>{this.state.obj.name}</Text>
//                 <Image source={this.state.obj.img} style={{width:330,height:200,marginTop:30,marginLeft:15,borderRadius:20,borderWidth:3,borderColor:'#3D314A'}}/>
//             <Text style={{marginLeft:20,marginTop:10,color:'#FFFFFF',fontSize:20,marginHorizontal:15}}>{this.state.obj.explain}</Text>
//             </View>
//             <TouchableOpacity  onPress={() => {
//                 this.setState({visible1:false }  
//                  )} }
//       style={{backgroundColor:'#3D314A',height:40,width:100,marginTop:580,marginLeft:140,borderRadius:10}}>
//         <Text style={{marginTop:5,marginLeft:30,fontSize:20,color:'#FFFFFF'}}>back</Text>
//       </TouchableOpacity>
           
//             </View>
//           </Modal>
//         </Modal>
//       </>
//     )
//   }
// }


//اكلات
// import * as React from 'react'
// import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, StatusBar } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome5'
// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       food: [{ name: 'Pizza', img: require("./img/pizza.jpg") ,recipe:' chicken pizza : 1/2 cup whole wheat flour . 2 packages (1/4 ounce each) quick-rise yeast . 1 teaspoon garlic powder . 1/2 teaspoon salt . 2-1/2 cups all-purpose flour . 1 cup water . 2 tablespoons olive oil. SAUCE: 1 can (14-1/2 ounces) diced tomatoes, undrained . 1 tablespoon minced fresh parsley . 1-1/2 teaspoons sugar . 1-1/2 teaspoons Italian seasoning . 1-1/2 teaspoons dried basil . 1/2 teaspoon garlic powder. 1/4 teaspoon pepper. TOPPINGS: 1 teaspoon olive oil . 1 cup chopped zucchini . 1 cup sliced fresh mushrooms . 1/2 cup chopped green or red pepper . 1/4 cup chopped onion . 1-1/4 cups shredded part-skim mozzarella cheeseChicken pizza:Step 1 Let dough rest, covered, at room temperature for 30 minutes.Step 2 Preheat oven to 450°. Step 3 Heat a large skillet over medium-high heat. Add 1 1/2 teaspoons oil, chicken, and sausage; sauté 5 minutes. Remove mixture from pan. Add 1 tablespoon oil to pan; swirl. Add onion, mushrooms, and garlic; sauté 5 minutes, stirring constantly.Step 4 Punch dough down. Sprinkle a baking sheet with cornmeal. Roll dough out to a 14-inch circle on baking sheet. Brush dough with 1 tablespoon oil; sprinkle with 2 ounces cheese. Arrange chicken mixture, vegetable mixture, and bell pepper over cheese, leaving a 1/4-inch border. Top with remaining cheese and crushed red pepper. Bake at 450° for 20 minutes or until golden. Sprinkle with herbs. Cut into slices.Pizza Hot Dogs:Preheat oven to 350°. Open hot dog buns and brush the inside with melted butter. Sprinkle with garlic powder. Place on baking sheet and bake until lightly golden, about 5 minutes. Preheat broiler. Spoon a little sauce onto each hot dog bun then place boiled hot dog on top. Top each hot dog with mozzarella, sprinkle with Italian seasoning, then place mini pepperoni on top. Broil until the cheese is melty, about 2 minutes'},
//       { name: 'Salades', img: require("./img/salade.jpg"), recipe:'Garden salad with vinaigrette: Get your fill of greens from this French-style, crisp classic topped with a balsamic vinaigrette. Heirloom tomato, radish and yoghurt flatbread panzanella Panzanella is a traditional Tuscan salad which features stale chunks of bread and tomatoes soaked in a vinegary dressing. This version has doughy yoghurt flatbreads that are perfect for mopping up the tangy dressing.Colin Fassnidge is pea, fennel and feta salad This easy, fresh pea and fennel salad showcases the best of Spring produce.Turkey, avocado and crunchy noodle salad Leftover Christmas turkey gets a tasty makeover in this vibrant and crunchy salad . Rainbow salad Crunchy, colourful and with lashings of flavour – this spring salad will bring any meal to life. Mint, bean and feta salad Add a burst of seasonal freshness to the menu. Mozzarella and prosciutto panzanella Put a new spin on everyone is favourite cucina with this easy weeknight recipe of bread salad - panzanella. Sticky barbecued prawn salad  These sticky prawns done on the barbecue are perfect in this Mediterranean-inspired salad. Slaws are some of the best make-ahead salad recipes out there. Typically made with hearty vegetables like cabbage, kale, or broccoli, they’re sturdy enough to be dressed ahead of time. I like to accent the veggie base with a punchy dressing, herbs, and even fruit for maximum flavor.You won’t miss the bacon in this lightened-up take on classic broccoli salad. Smoky roasted nuts take its place, adding delectable savory bites. A lightly creamy, sweet & tangy dressing takes the whole thing over the top.' },
//       { name: 'Desserts', img: require("./img/desserts.jpg"),recipe:'1 tsp. pure vanilla extract 2 c. all-purpose flour 3 tbsp. cornstarch 1 1/2 tsp. baking powder. 1 tsp. kosher salt. 1/2 c. milk (preferably whole or 2%) FOR THE FROSTING  (2 sticks) butter, sugar. 1/4 c. fresh lime juice 1/4 c. tequila Coarse salt, for garnish Lime zest, for garnish  Small lime wedges, for garnish This ingredient shopping module is created and maintained by a third party, and imported onto this page. You may be able to find more information about this and similar content on their web site. GET INGREDIENTS Powered by Chicory DIRECTIONS MAKE CUPCAKES Preheat oven to 350° and line two muffin tins with 18 cupcake liners. In a large bowl using a hand mixer, beat butter and sugar until light and fluffy. Add eggs, one at a time, beating well after each addition. Add lime juice and zest and vanilla and mix until combined. In another large bowl, whisk together flour, cornstarch, baking powder, and salt. Add half the dry ingredients to the wet ingredients, beating until just combined. Pour in milk and mix until fully incorporated. Add remaining dry ingredients and stir until just combined. Fill cupcake liners 3/4 full with batter. Bake until slightly golden and a toothpick inserted into center of each cupcake comes out clean, about 25 minutes. Let cupcakes cool in pans 5 to 10 minutes, then transfer to a wire rack to cool completely.  MAKE FROSTING In a large bowl using a hand mixer, beat butter, half of powdered sugar, lime juice, and tequila until light and fluffy. Add remaining powdered sugar and beat until smooth. Pipe frosting onto cooled cupcakes. Garnish with coarse salt, lime zest, and lime wedges and a cut decorative straw before serving. Slow-cooker meatballs with fettuccine:'},
//       { name: 'Pasta', img: require("./img/pasta.jpg"),recipe:'Cheesy corn and bacon mac cheese:Step 1 Preheat oven to 200C/180C fan-forced. Grease a 12-cup-capacity roasting pan. Step 2:Cook pasta in a large saucepan of boiling water, following packet directions. Drain well. Return to pan. Step 3: Meanwhile, melt 10g butter in a large saucepan over medium-high heat. Add bacon. Cook, stirring occasionally, for 5 minutes or until bacon is golden. Transfer to paper towel to drain. Step 4: Melt remaining butter in saucepan over medium heat. Add flour. Cook, stirring, with a wooden spoon, for 1 to 2 minutes or until mixture bubbles. Add garlic and thyme. Stir to combine. Gradually stir in milk. Bring to the boil. Reduce heat to medium. Cook, stirring, for 4 to 5 minutes or until mixture thickens. Add mustard and 1/2 cup cheese. Stir for 1 minute or until melted and smooth.Step 5:Add sauce mixture, corn, onion and three-quarters of the bacon to pasta. Season with salt and pepper. Stir well to combine. Spoon into prepared pan. Combine breadcrumbs and remaining cheese and bacon in a bowl. Sprinkle over pasta mixture. Bake for 20 to 25 minutes or until top is golden. Sprinkle with parsley Serve.Step 1Place beef mince, sausage mince, grated onion, breadcrumbs, egg, sage, oregano and basil in a large bowl. Use your hands to mix until well combined. Season. Shape tablespoonfuls of mince mixture into balls. Place on a plate. Step 2:Heat the oil in a frying pan over medium heat. Add the meatballs. Cook, turning, for 5 mins or until brown all over. Transfer to a slow cooker. Step 3:Add the chopped onion to the pan. Cook, stirring, for 5 mins or until onion softens. Add garlic and cook for 1 min or until aromatic. Add the wine or beef stock and bring to the boil. Add the tomato and pasta sauce and stir to combine. Pour over the meatballs in the slow cooker. Cover. Cook for 4 hours on high (or 6 hours on low) or until the meatballs are cooked through and sauce thickens slightly. Season. (To freeze now, see tip below.)Step 4:Cook the pasta in a large saucepan of boiling water following packet directions or until al dente. Drain well. Return the pasta to the pan with a little of the sauce from the slow cooker. Toss to combine. Divide the pasta mixture evenly among serving bowls. Spoon over the meatballs and sauce.' },
//       { name: 'Beverages', img: require("./img/beverages.jpg"),recipe:'Orange Juice Fruit Smoothie : INGREDIENTS: 1 cup of Orange Juice, ½ peach, sliced  ¼ cup strawberries, sliced ¼ cup blackberries . PREPARATION: Blend all ingredients until desired consistency. If you use frozen fruit, you may opt to skip the ice. If not, I add a handful of ice cubes to my blender.                                                                 lemon juice:Firstly take lemon and cut into two equal half. With the help of squeezer item, squeeze the lemon juice into a glass from each half. Now add sugar, salt and water. Stir it properly until the sugar and salt content get dissolves. Lemon juice is ready to be served.mango juice: Wash, peel and chop the mango. Take mango and sugar into a blender. Grind into smooth puree. Then add water and blend it again. Strain the juice and discard the fibrous pulp if any. This step is optional though. Keep refrigerated, chilled till serving.' }],
//       obj: {recipe:''},
//       visible1:false,
//       visible2: false,
//       visible3:false,
//       visible4:false,
//       visible5:false,
//       visible6:false
//     }
//   }
//   render() {
//     return (
//       <>
//         <StatusBar backgroundColor={'#008E9B'} />

//         <View style={{ flex: 1 }}>
//           <Text style={{ color: '#008E9B', marginLeft: 10, marginTop: 85, fontWeight: 'bold', fontSize: 30 }}>Cooking Recipes.</Text>
//           <Text style={{ color: '#008E9B', marginLeft: 10, fontSize: 15 }}>There is no love sincerer than the love of food.</Text>
//           <Image source={require("./img/food.jpg")} style={{
//             width: 330, height: 350, marginTop: 20, resizeMode: 'stretch', marginLeft: 16
//             , borderColor: '#008E9B', borderWidth: 3
//           }} />

//           <TouchableOpacity
//             onPress={() => {
//               this.setState({ visible1: true }
//               )
//             }
//             }
//             style={{ backgroundColor: '#008E9B', width: 200, height: 50, marginTop: 50, marginLeft: 78, borderRadius: 20 }} >
//                   <Text style={{ color: '#FFFFFF', marginLeft: 70,marginTop:5, fontSize: 30 }}>Start </Text>
//           </TouchableOpacity>
// </View>
// <Modal visible={this.state.visible1}>
//   <TextInput placeholder={'first name'} style={{marginTop:20}}></TextInput>
//   <TextInput placeholder={'last name'}></TextInput>
//   <TextInput keyboardType='email-address' placeholder={'google or facebook account'}></TextInput>
//   <TextInput secureTextEntry={true} placeholder={'password'}></TextInput>
// <TouchableOpacity
//             onPress={() => {
//               this.setState({ visible2: true }
//               )
//             }
//             }
            
//             style={{ backgroundColor: '#008E9B', width: 200, height: 50, marginTop: 50, marginLeft: 78, borderRadius: 20 }}
//           ><Text style={{ color: '#FFFFFF', marginLeft: 55, fontSize:30 }}>Sign up</Text>
//           </TouchableOpacity>
// </Modal>
    
//         <Modal visible={this.state.visible2}>
//           <View style={{backgroundColor:'#008E9B',height:40}}>
//           <Text style={{ color: '#FFFFFF', marginLeft: 15,marginTop:5, fontSize:20 }}>let's see our recipes..... </Text></View>
//           <TouchableOpacity 
//           onPress={() => {
//             this.setState({ visible6: true }
//             ) }}>
//           <Icon name='user' style={{color:'#FFFFFF',marginTop:-30,fontSize:20,marginLeft:300}}/>
//         </TouchableOpacity>

//           <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
     
//           {this.state.food.map(foods=>(
//       <TouchableOpacity     onPress={() => {
//         this.setState({ visible5: true , obj:foods }
//         )
//       }
//       }
//       style={{backgroundColor:'#008E9B',width:160,height:200,marginLeft:15,marginTop:10,borderRadius:10}}>
//         <Image source={foods.img} style={{width:140,height:120,marginTop:5,marginLeft:10}}/> 
//          <Text style={{marginTop:10,marginLeft:20,fontSize:20,color:'#FFFFFF'}}>{foods.name}</Text> 
//          <TouchableOpacity >
//       <Icon name='heart' style={{color:'#FFFFFF',fontSize:20,marginLeft:120,marginTop:5}}/></TouchableOpacity> 
//       </TouchableOpacity>
//           ))}
//           </View>
//           <View style={{backgroundColor:'#008E9B',height:40,marginTop:20}}>
//         <Icon name='home'size={20} style={{color:'#FFFFFF',marginTop:10,marginLeft:30}}/>
//               <TouchableOpacity
//             onPress={() => {
//               this.setState({ visible3: true }
//               )
//             }
//             }
//             style={{  marginTop: -20, marginLeft: 170 }} >
//               <Icon name='search'size={20} style={{color:'#99979E'}}/>
//               </TouchableOpacity>
//               <TouchableOpacity
//             onPress={() => {
//               this.setState({ visible4: true }
//               )
//             }
//             }
//             style={{  marginTop: -20, marginLeft: 300 }} >
//               <Icon name='heart'size={20} style={{color:'#99979E'}}/>
//               </TouchableOpacity>
//         </View>
//         </Modal>
//         <Modal visible={this.state.visible3}>
//           <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
//           <View style={{backgroundColor:'#008E9B',height:50}}>  
//             <TextInput placeholder={'Search a recipe'} 
//             placeholderTextColor={'#008E9B'} style={{backgroundColor:'#FFFFFF',color:'#99979E', width:330, marginLeft: 18,height:40,marginTop:5,borderRadius:5 }}>
//               </TextInput>
//               </View>
//       <View style={{backgroundColor:'#008E9B',height:50,marginTop:610}}>
//       <TouchableOpacity  onPress={() => {
//               this.setState({ visible1:false,visible2:true ,visible3:false}
//               )
//             }
//             } >
//       <Icon name='home'size={25} style={{color:'#99979E',marginTop:15,marginLeft:25}}/>
//       </TouchableOpacity>
//         <Icon name='search'size={25} style={{color:'#FFFFFF',marginTop: -25, marginLeft: 170}}/>
//               <TouchableOpacity
//             onPress={() => {
//               this.setState({ visible4 : true }
//               )
//             }
//             }
//             style={{  marginTop: -25, marginLeft: 310 }} >
//               <Icon name='heart'size={25} style={{color:'#99979E'}}/>
//               </TouchableOpacity>
//         </View>
// </View>
// </Modal>
// <Modal visible={this.state.visible4}>
// <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
//           <View style={{backgroundColor:'#008E9B',height:50}}>  
//           <Text style={{color:'#FFFFFF',marginTop:10,marginLeft:10,fontSize:20,fontWeight:'bold'}}>Favourites</Text>
//               </View>
//               <Text style={{marginTop:150,marginLeft:50,color:'#B0A8B9'}}>You have not selected favourite recipes</Text>
//       <View style={{backgroundColor:'#008E9B',height:50,marginTop:445}}>
//       <TouchableOpacity  onPress={() => {
//               this.setState({ visible1:false,visible2:true ,visible3:false,visible4:false,visible5:false}
//               )
//             }
//             } >
//       <Icon name='home'size={25} style={{color:'#99979E',marginTop:15,marginLeft:25}}/>
//       </TouchableOpacity>
//       <TouchableOpacity
//             onPress={() => {
//               this.setState({ visible1:false ,visible2:false ,visible3:true ,visible4:false ,visible5:false }
//               )
//             }
//             }>
//         <Icon name='search'size={25} style={{color:'#99979E',marginTop: -25, marginLeft: 170}}/>
//         </TouchableOpacity>
//               <Icon name='heart'size={25} style={{color:'#FFFFFF',marginTop:-25,marginLeft:310}}/>  
//         </View>
// </View>
// </Modal>
// <Modal visible={this.state.visible5}>
// <View style={{backgroundColor:'#008E9B',height:50}}>  
//           <Text style={{color:'#FFFFFF',marginTop:10,marginLeft:10,fontSize:20,fontWeight:'bold'}}>Recipes</Text>
//      </View>
//      <ScrollView>
//           <Text style={{marginVertical:10,marginHorizontal:10}}>{this.state.obj.recipe}</Text>
//           </ScrollView>
//      <View style={{backgroundColor:'#008E9B',height:50,marginTop:10}}>
//       <TouchableOpacity  onPress={() => {
//               this.setState({ visible1:false,visible2:true ,visible3:false,visible4:false,visible5:false}
//               )
//             }
//             } >
//       <Icon name='home'size={25} style={{color:'#99979E',marginTop:15,marginLeft:25}}/>
//       </TouchableOpacity>
//       <TouchableOpacity
//             onPress={() => {
//               this.setState({ visible1:false ,visible2:false ,visible3:true ,visible4:false ,visible5:false }
//               )
//             }
//             }>
//         <Icon name='search'size={25} style={{color:'#99979E',marginTop: -25, marginLeft: 170}}/>
//         </TouchableOpacity>
        
//               <Icon name='heart'size={25} style={{color:'#99979E',marginTop:-25,marginLeft:310}}/>  
//         </View>
// </Modal>
// <Modal visible={this.state.visible6}></Modal>
//       </>
//     )
//   }
// }







