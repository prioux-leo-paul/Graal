import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as Var from '../Ressources/Variable/Var.js';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as IMAGE from '../Ressources/Variable/base64.js';

let timer = undefined;

function App() {
  const [img1, setImg1] = useState(Var.state_total[2].src);
  const [img2, setImg2] = useState(Var.state_total[1].src);
  const [img3, setImg3] = useState(Var.state_total[0].src);


  function Lancer() {
    if (Var.nbrTour === Var.nbrTourMax) {
      clearInterval(timer);
      timer = undefined;
      Var.setLancer(0);
      Var.navigation.replace('Règles');

    }
    else {
      Var.setNbrTour(Var.nbrTour + 1);
      tourner();
      incrementIndice();
    }
  }


  function tourner() {
    let t1 = Var.indice - 1;
    let t2 = Var.indice;
    let t3 = Var.indice + 1;
    if (t1 < 0)
      t1 = Var.state_total.length - 1;
    if (t3 > Var.state_total.length - 1)
      t3 = 0;
    setImg1(Var.state_total[t3].src);
    setImg2(Var.state_total[t2].src);
    setImg3(Var.state_total[t1].src);
  }
  function incrementIndice() {
    Var.setIndice(Var.indice + 1);
    if (Var.indice > Var.state_total.length - 1)
      Var.setIndice(0);
  }

  let arrayMode =['Retour','Back','Volver'];

  return (
    <View style={styles.fond}>
      <StatusBar style="auto"/>
      <Image source={IMAGE.fondGoutte} style={styles.imageGoutte}/>
      <Image source={IMAGE.fondGraal} style={styles.imageGraal}/>
      <View style={styles.boxRepartie}>
        <Text style={styles.title}>{Var.ModeChoisit.name.toUpperCase()}</Text>
      </View>
      <View style={styles.backgroundBox} >
        <View style={styles.boxSousTitre}>
          <View style={styles.spaceSousTitre}></View>
          <Text style={styles.sousTitre}>{Var.nameRoullette[Var.langue].toUpperCase()}</Text>
        </View>
        <View style={styles.boxDuo}>
          <Image source={img1} style={styles.smallImage} />
        </View>
        <LinearGradient colors={['rgba(74, 45, 68, 0.5)','rgba(67, 67, 67, 0.5)']} style={styles.backgroundUnit}>
          <TouchableHighlight style={{height:"100%",width:"100%",justifyContent:"center", alignItems:"center"}} onPress={() => {
        if (Var.lancer == 0) {
          Var.setNbrTourMax(Math.floor(Math.random() * 10) + Var.state_total.length + 3);
          Var.setNbrTour(0);
          timer = setInterval(Lancer, 100);
          Var.setLancer(1);     
        }
      }}>
            <Image source={img2} style={styles.tallImage}/>
          </TouchableHighlight>
        </LinearGradient>
        <View style={styles.boxDuo}>
          <Image source={img3} style={styles.smallImage}/>
        </View>
      </View>
      <View style={styles.boxRepartie}>
        
      <TouchableOpacity onPress={() => { if(timer === undefined){Var.navigation.replace('Mode');}}}  style={styles.buttonTouch}>
          <LinearGradient colors={['rgba(74, 45, 68, 0.7)','rgba(67, 67, 67, 0.7)']} style={styles.button}>
            <View style={styles.backFirstBox}>
              <Image source={IMAGE.back} style={styles.backImage}/>
            </View>
            <View style={styles.backSecondBox}>
              <Text style={styles.textButton}>{arrayMode[Var.langue].toUpperCase()}</Text>
            </View>
          </LinearGradient>
      </TouchableOpacity>
      </View>
    </View>

  );
}

export default App;

var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  fond : {
    backgroundColor : "#DDC4DD",
    height :"100%",
    width : "100%",
    zIndex : -2,
    justifyContent : 'center',
    alignItems : "center",
    
  },
  imageGoutte : {
    position : "absolute",
    resizeMode:"contain",
    transform: [{ rotate: "-30deg" }],
    width: "61.22666666666667%",
    height: "30.78817733990148%",
    left: "-9.333333333333333%",
    top: "1.231527093596059%",
    opacity : 0.5,
    zIndex : -1,
    
  },
  imageGraal : {
    width: "136.5333333333333%",
    height: "63.05418719211823%",
    resizeMode:"contain",
    position : "absolute",
    left: "15%",
    top: "42.73399014778325%",
    opacity : 0.5,
    zIndex : -1
  },
  textButton:{
    color : "white",
      
    fontStyle : 'normal',
    fontWeight : 'normal',
    fontSize : deviceWidth * 0.05333,
    letterSpacing : deviceWidth * 0.00768,
    fontFamily: 'Staatliches-Regular'
  },
  title :{
      
    fontStyle : 'normal',
    fontWeight : 'normal',
    fontSize: deviceWidth * 0.096,
    color:"white",
    letterSpacing : deviceWidth * 0.015,
    fontFamily: 'Staatliches-Regular'
  },
  boxRepartie :{
    width: "100%",
    height: "15%",
    justifyContent :"center",
    alignItems:"center",
    
  },
  backgroundBox :{
    width: "80%",
    height: "70%",
    zIndex : 1,
    display : "flex",
    justifyContent : 'center',
    alignItems : "center",
    backgroundColor: "rgba(230, 211, 230, 0.9)",
    borderRadius : 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

  },
  backgroundUnit : {
    
    width: "100%",
    height: "40%",
    opacity : 1,
    
  },
  boxDuo : {
    width :"100%",
    height : "25%",
    justifyContent : "center",
    alignItems : "center"
    
  },
  buttonTouch : {
    width : "40%",
    height : "40%",
    
    borderRadius : 10,
    zIndex : 3   
  },
  button : {
    width:"100%",
    height:"100%",
    
    borderRadius : 10,
    zIndex : 3,
    display:"flex",
    flexDirection:"row"
  },
  boxSousTitre :{
    width : "100%",
    height : "10%",
    display : "flex",
    flexDirection : "row",
    alignItems :"center",

  },
  sousTitre : {
    fontStyle : 'normal',
    fontWeight : 'normal',
    fontSize : deviceWidth * 0.05333,
    color : '#000000',
    opacity: 0.6,
    letterSpacing : deviceWidth * 0.004,
    fontFamily: 'Staatliches-Regular'
  },
  spaceSousTitre :{
  width : "5%",
  height:"100%"
  },
  backImage : {
    height:"70%",
    width : "70%",
    resizeMode : "contain"
  },
  backSecondBox :{
    height:"100%", 
    width:"70%",
    alignItems:"center",
    justifyContent:"center",
    
  },
  backFirstBox :{
    height:"100%",
    width:"30%",
    justifyContent:"center",
    alignItems:"flex-end"
  },
  smallImage : {
    width : "50%",
    height : "50%",
    resizeMode : "contain",
    zIndex : 4
  },
  tallImage : {
    width : "50%",
    height : "50%",
    resizeMode : "contain",
    opacity : 1,
    zIndex : 5
  },
});