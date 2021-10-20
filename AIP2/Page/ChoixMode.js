import React from 'react';
import { StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import * as IMAGE from '../Ressources/Variable/base64.js';
import * as Var from '../Ressources/Variable/Var.js';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';


    function getChemin(mode){
      if (Var.langue === 0){
        if(mode === 'Classique')
          return require('../Ressources/Regle/classique/fr.json');
        else if(mode === 'Coquin')
          return require('../Ressources/Regle/hot/fr.json');
        else if (mode === 'Buverie')
          return require('../Ressources/Regle/alcoolo/fr.json');
        
      }
      else if( Var.langue === 1){
        if(mode === 'Classique')
          return require('../Ressources/Regle/classique/eng.json');
        else if(mode === 'Coquin')
          return require('../Ressources/Regle/hot/eng.json');
        else if (mode === 'Buverie')
          return require('../Ressources/Regle/alcoolo/eng.json');
        
      }
      else {
        if(mode === 'Classique')
          return require('../Ressources/Regle/classique/esp.json');
        else if(mode === 'Coquin')
          return require('../Ressources/Regle/hot/esp.json');
        else if (mode === 'Buverie')
          return require('../Ressources/Regle/alcoolo/esp.json');
       
      }
    }
  function getdata(mode) {
    
    var fs = getChemin(mode);
    var T = []
    for (let i = 0; i < fs.nombre; i++) {

      T.push({ name: fs[i].name, src: { uri: fs[i].uri }, proba: fs[i].proba, regle: fs[i].regle })

    }
    Var.setState(T);
     
    let state_total = []
    for(let i = 0; i < Var.state.length; i++){
      for(let j = 0; j < Var.state[i].proba; j++){
        state_total.push(Var.state[i]);
      }
    }
    shuffle(state_total);
    Var.setStateTotal(state_total);
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

 let arrayMode =['Retour','Back','Volver'];

function ChoixMode( ) {
  return (
    <View style={styles.fond}>
      <StatusBar style="auto"/>
      <Image source={IMAGE.fondGoutte} style={styles.imageGoutte}/>
      <Image source={IMAGE.fondGraal} style={styles.imageGraal}/>
      <View style={styles.boxRepartie}>
        <Text style={styles.title}>GRAAL</Text>
      </View>
      <View style={styles.backgroundBox} >
          <View style={styles.boxSousTitre}>
              <View style={styles.spaceSousTitre}></View>
              <Text style={styles.sousTitre}>{Var.nameMode[Var.langue].toUpperCase()}</Text>
          </View>
          <View style={styles.boxRegle}>
            <View style={styles.containersModeUnit}>
                <TouchableOpacity onPress={() => {getdata(Var.tabMode[0].name); Var.navigation.replace('Roue'); Var.setModeChoisit(Var.tabMode[0]);}} >
                  <LinearGradient colors={['rgba(74, 45, 68, 0.5)','rgba(67, 67, 67, 0.5)']} 
                style={styles.containersLineaire}>
                          <View style={styles.containersModeUnitFirst}>
                            <Image source={Var.tabMode[0].src} style={styles.firstImage}/>
                          </View>
                          <View style={styles.containersModeUnitSecond}>
                            <Text style={styles.titleModeUnit}>{Var.tabMode[0].name}</Text>
                            <View style={styles.sepModeUnit}></View>
                            <Text style={styles.descriptionModeUnit}  >{Var.tabMode[0].description[Var.langue]}</Text>
                          </View>
                  </LinearGradient>
               </TouchableOpacity>
            </View>
            <View style={styles.containersModeUnit}>
                <TouchableOpacity onPress={() => {getdata(Var.tabMode[1].name); Var.navigation.replace('Roue'); Var.setModeChoisit(Var.tabMode[1]);}} >
                  <LinearGradient colors={['rgba(74, 45, 68, 0.5)','rgba(67, 67, 67, 0.5)']} 
                style={styles.containersLineaire}>
                          <View style={styles.containersModeUnitFirst}>
                            <Image source={Var.tabMode[1].src} style={styles.firstImage}/>
                          </View>
                          <View style={styles.containersModeUnitSecond}>
                            <Text style={styles.titleModeUnit}>{Var.tabMode[1].name}</Text>
                            <View style={styles.sepModeUnit}></View>
                            <Text style={styles.descriptionModeUnit}  >{Var.tabMode[1].description[Var.langue]}</Text>
                          </View>
                  </LinearGradient>
               </TouchableOpacity>
            </View>
            <View style={styles.containersModeUnit}>
                <TouchableOpacity onPress={() => {getdata(Var.tabMode[2].name); Var.navigation.replace('Roue'); Var.setModeChoisit(Var.tabMode[2]);}} >
                  <LinearGradient colors={['rgba(74, 45, 68, 0.5)','rgba(67, 67, 67, 0.5)']} 
                style={styles.containersLineaire}>
                          <View style={styles.containersModeUnitFirst}>
                            <Image source={Var.tabMode[2].src} style={styles.firstImage}/>
                          </View>
                          <View style={styles.containersModeUnitSecond}>
                            <Text style={styles.titleModeUnit}>{Var.tabMode[2].name}</Text>
                            <View style={styles.sepModeUnit}></View>
                            <Text style={styles.descriptionModeUnit}  >{Var.tabMode[2].description[Var.langue]}</Text>
                          </View>
                  </LinearGradient>
               </TouchableOpacity>
            </View>
          </View>
      </View>
      <View style={styles.boxRepartie2}>
        
        <TouchableOpacity onPress={() => { Var.navigation.replace('Nom');}}  style={styles.buttonTouch}>
            <LinearGradient colors={['rgba(74, 45, 68, 0.7)','rgba(67, 67, 67, 0.7)']} style={styles.button}>
              <View style={styles.backFirstBox}>
                <Image source={IMAGE.back} style={styles.backImage }/>
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

export default ChoixMode;


var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height

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
  title :{
     
    fontStyle : 'normal',
    fontWeight : 'normal',
    fontSize: deviceWidth * 0.096,
    color:"white"
  },
  boxRepartie :{
    width: "100%",
    height: "15%",
    justifyContent :"center",
    alignItems:"center",
    
  },
  boxRepartie2 :{
    width: "100%",
    height: "20%",
    justifyContent :"center",
    alignItems:"center",
  },
  backgroundBox :{
    width: "80%",
    height: "65%",
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
  boxSousTitre :{
    width : "100%",
    height : "5%",
    display : "flex",
    flexDirection : "row",
    alignItems :"center",

  },
  sousTitre : {
    fontStyle : 'normal',
    fontWeight : 'normal',
      fontSize :deviceWidth * 0.05333
  },
  spaceSousTitre :{
  width : "5%",
  height:"100%"
  },
  imageValider :{
    height : "50%",
    width : "50%",
    resizeMode : "contain"
  },
  boxRegle : {
    marginTop: "5%",
    height: "85%",
    width : "90%",
    display: "flex",
    flexDirection :"column",
    justifyContent : "space-evenly",
    alignItems :"center"
  },
 
  buttonTouch : {
    width : "40%",
    height : "30%",
    
    borderRadius : 10,
    zIndex : 3   
  },
  button : {
    width:"100%",
    height:"100%",
    
    borderRadius : 10,
    zIndex : 3,
    display:"flex",
    flexDirection:"row",
    justifyContent : "center"
  },
  backImage : {
    height:"70%",
    width : "70%",
    resizeMode : "contain",
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
  textButton:{
    color : "white",
     
    fontStyle : 'normal',
    fontWeight : 'normal',
      fontSize :deviceWidth * 0.05333
  },
  containersModeUnit :{
    width : "100%", 
    maxHeight : "25%",
    
  },
  containersLineaire : {
  width : "100%",
  height : "100%",
  borderRadius : 20,
  padding :"5%",
  flexDirection : "row",
  alignItems : "center",
  justifyContent : "space-between"
  },
  containersModeUnitFirst : {
  width:"30%",
  height:"100%",
  justifyContent:"center",
  alignItems:"center"
  },
  firstImage : {
  width : "80%",
  height : "80%",
  resizeMode : "contain"
  },
  containersModeUnitSecond : {
  width : "60%",
  height:"90%",
  display:"flex",
  flexDirection: "column",
  justifyContent :"center",
  alignItems:"flex-start"
  },
  titleModeUnit : {
  fontSize: deviceHeight * 0.02209,
  fontWeight: "bold" ,
  color:"white"
  },
  sepModeUnit : {
  height:"0.5%",
  width:"80%",
  backgroundColor : "white"
  },
  descriptionModeUnit : {
  fontSize: deviceHeight * 0.01616,
  color:"white"
}

});
