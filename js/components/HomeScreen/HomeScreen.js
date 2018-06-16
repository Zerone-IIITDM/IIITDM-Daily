import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  onPress,
  Alert,
  alert,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const{height,width}=Dimensions.get('window');


export default class Homescreen extends Component {
    constructor(){
    super()
    this.state = {
      types1: [{label: 'Student', value: 0}, {label: 'Others', value: 1}],
      value1: 0,
      value1Index: 0,
      value1_1: 0,
      value1_1Index: 0,
    }
  }


  static navigationOptions={
    header:null,
  };



  render(){

    return(

        <View style={styles.mainContainer}>
           <Swiper autoplay={false}>
            <View>
                <View style={styles.container1}>
                  <Text style={styles.text1}>IIITD&M {"\n"} KANCHEEPURAM</Text>
                  <Image style={styles.image1} source={{uri:'data:image/png;base64,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'}}>
                  </Image>
                  <View style={styles.container2}>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                      <Text style={styles.text2}>Design</Text>
                      <Text style={{fontSize:20,color:'green'}}> * Create</Text>
                      <Text style={{fontSize:20,color:'black'}}> * Innovate</Text>
                    </View>
                    <Text style={styles.text3}>An institute of National Importance {"\n"} Specialized in IT Enabled Design and {"\n"} Manufacturing</Text>
                  </View>
                </View>
            </View>
            <View>
                <View style={styles.header}>
                </View>
                <View style={styles.container3}>
                  <Text style={styles.text4}>GET STARTED...</Text>
                  <FontAwesome name='graduation-cap' size={200} color={'black'} />
                  <Text style={styles.text5}>I am a :</Text>
                  <View>
                    <RadioForm
                        ref="radioForm"
                        radio_props={this.state.types1}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#2196f3'}
                        labelColor={'#000'}
                        labelStyle={{padding:20}}
                        animation={true}
                        onPress={(value, index) => {
                          this.setState({
                            value1:value,
                            value1Index:index
                          })
                          }}
                    />
                  </View>
                </View>
                <View style={styles.container4}>
                    <View style={styles.miniContainer4}>
                        <Text style={styles.text6}>Login</Text>
                        <TouchableOpacity onPress={()=> Alert.alert('!')}>
                            <FontAwesome name='angle-right' size={30} color={'black'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           </Swiper>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    mainContainer:{
    flex:1,
    backgroundColor:'white',
  },

  container1:{
    marginTop:height*0.15,
    alignItems:'center',
  },

  text1:{
    fontSize:30,
    textAlign:'center',
    color:'black',
  },

  image1:{
    width:150,
    height:150,
  },

  container2:{
    padding:15,
  },

  text2:{
    fontSize:20,
    textAlign:'center',
    color:'blue',
  },

  text3:{
    padding:20,
    fontSize:18,
    textAlign:'center',
    color:'black',
  },

  header:{
    height:height*0.05,
    backgroundColor:'#617AB5',
  },

  container3:{
    marginTop:height*0.15,
    alignItems:'center',
  },

  text4:{
    fontSize:30,
    textAlign:'center',
    color:'black',
    fontWeight:'bold',
  },

  text5:{
    fontSize:25,
    textAlign:'center',
    color:'black',
  },

  container4:{
    padding:15,
    alignItems:'flex-end',
    height:height*0.25,
  },

  miniContainer4:{
    flexDirection:'row',
    paddingHorizontal:15,
    position:'absolute',
    bottom:0,
  },

  text6:{
    fontSize:25,
    color:'blue',
    paddingHorizontal:5,
  }
});