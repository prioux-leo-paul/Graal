import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Var from '../Ressources/Variable/Var.js';
import * as IMAGE from '../Ressources/Variable/base64.js';


let Regle="";
export default function App() {

  function donneJoueur(signe) {
    Var.Melanger();
    let signeNum;
    if(signe === "**"){
      signeNum = 1;
    }
    else if(signe === "##"){
      signeNum = 0;
    }
    else signeNum = 3;
    let joueurTmp;
  
    if(signeNum === 3){
      joueurTmp = Var.listetmp[0];
      Var.supprimerDeListe(joueurTmp);
      return joueurTmp.name;
    }
  
    
  
    for(let i = 0;i < listetmp.length; i++){
      if(listetmp.genre === signeNum){
        joueurTmp = Var.listetmp[i];
      Var.supprimerDeListe(joueurTmp);
        
        return joueurTmp.name;
      }
    }
    joueurTmp = Var.listetmp[0];
    Var.supprimerDeListe(joueurTmp);
    return joueurTmp.name;
  
  }
  
  function getIndiceCat(nomCategortie) {
    for (let index = 0; index < Var.state.length; index++) {
      if (Var.state[index].name === nomCategortie)
        return index;
    }
  }
  
  
  function donneRegle(nomCategortie) {
    let joueurActuelle = Var.listeJoueur[Var.joueurCourant];
    Var.supprimerDeListe(joueurActuelle);
    Var.setIndice(getIndiceCat(nomCategortie));
  
    let r = Math.floor(Math.random() * (Var.state[Var.indice].regle.length - 1));
    let regle = Var.state[Var.indice].regle[r];
  
    regle = regle.replace("**", Var.listeJoueur[Var.joueurCourant].name);
      if(regle.includes("%%")){
      regle =regle.replace("%%", donneJoueur("%%"));
      }
      if(regle.includes("##")){
        regle =regle.replace("##", donneJoueur("##"));
      }
      if(regle.includes("$$")){
        regle =regle.replace("$$", donneJoueur("$$"));
      }
    
    return regle;
  }
  
  function joueurSuivant() {
    Var.setJoueurCourant(Var.joueurCourant + 1);
    if (Var.joueurCourant === Var.listeJoueur.length)
      Var.setJoueurCourant(0);
  }

  Regle = donneRegle(Var.state_total[Var.indice].name);

  return (
    <View style={styles.fond}>
      <StatusBar style="auto"/>
      <Image source={IMAGE.fondGoutte} style={styles.imageGoutte}/>
      <Image source={IMAGE.fondGraal} style={styles.imageGraal}/>
      <View style={styles.boxRepartie}>
        <Text style={styles.title}>{Var.state_total[Var.indice].name.toUpperCase()}</Text>
      </View>
      <View style={styles.backgroundBox} >
          <View style={styles.boxSousTitre}>
              <View style={styles.spaceSousTitre}></View>
              <View style={{height:"100%",width:"15%"}}>
                <Image style={{height:"90%", width:"90%", resizeMode:"contain"}} source={Var.state_total[Var.indice].src}/>
              </View>
              <Text style={styles.sousTitre}>{Var.nameRegle[Var.langue].toUpperCase()}</Text>
          </View>
          <View style={styles.boxRegle}>
          <Text style={styles.textRegle}>{Regle}</Text>
          </View>
      </View>
      <View style={styles.boxRepartie}>
        
      <TouchableOpacity onPress={() => { Var.setLancer(0); joueurSuivant();Var.navigation.replace('Roue'); Var.MajListeTmp();}}  style={styles.buttonTouch}>
          <LinearGradient colors={['rgba(74, 45, 68, 0.7)','rgba(67, 67, 67, 0.7)']} style={styles.button}>
            <Image source={IMAGE.roue_validation_defi} style={styles.imageValider}/>
          </LinearGradient>
      </TouchableOpacity>
      </View>
    </View>

  );
}




function TailleRegle(){
  let taille = Regle.length;
  if(taille <= 100)
    return 3;
  else if(taille <= 200)
    return 2;
    else if(taille <= 250)
  return 1;
  else
    return 0.1;
}
var taille_regle_description = Var.get_adaptive_size(40, 90);
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
  title :{
      
    fontStyle : 'normal',
    fontWeight : 'normal',
    fontSize: 36,
    color:"white",
    fontFamily: 'Staatliches-Regular',
    letterSpacing : 0.18
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
  buttonTouch : {
    width : "30%",
    height : "40%",
    
    borderRadius : 10,
    zIndex : 3   
  },
  button : {
    width:"100%",
    height:"100%",
    borderRadius : 10,
    zIndex : 3,
    justifyContent : "center",
    alignItems :"center"

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
    fontSize :deviceWidth * 0.05333,
    color : '#000000',
    opacity: 0.6,
    letterSpacing : 0.18,
    fontFamily: 'Staatliches-Regular'


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
    height: "80%",
    width : "95%",
    justifyContent : "center",
    alignItems :"center",
  },
  textRegle : {
    overflow:"scroll",
    fontSize: taille_regle_description * TailleRegle(),
    textAlign: 'center',
    color: "white" ,
    fontFamily: 'Staatliches-Regular'
  }
  
 
});