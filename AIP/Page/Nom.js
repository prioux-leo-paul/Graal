import React, { Component, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from "expo-linear-gradient";
import {Dimensions, StyleSheet, Text, View, Image,  TextInput, FlatList, TouchableOpacity } from 'react-native';
import * as IMAGE from '../Ressources/Variable/base64.js';
import * as Var from '../Ressources/Variable/Var.js';
import { useFonts } from 'expo-font';



let tabJoueur = [];
const tabPlacehoder = ['ajouter un joueur', 'add player', 'Agregar un jugador'];

let id = 0;
let erreurNow;

export default function NomEnter() {

    let [fontsLoaded] = useFonts({
      'Staatliches-Regular': require('../assets/fonts/Staatliches-Regular.ttf'),
    });
  const [tabJoueur2, setTabJoueur] = useState(tabJoueur);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState(1);
  
  const [Placehoder, setPlacehoder] = useState(tabPlacehoder[Var.langue]);
  const [refreshFlatlist, setRefreshFlatList] = useState(false);

  useEffect(() => {
    console.log(tabJoueur2);
  }, [tabJoueur2])

  function rmJoueur(joueur ) {
    let index = tabJoueur.indexOf(joueur);
    tabJoueur.splice(index, 1);
    setTabJoueur(tabJoueur);
    setRefreshFlatList(!refreshFlatlist);
  }
  function joueurExist(nom) {
    for (let i = 0; i < tabJoueur.length; i++)
      if (tabJoueur[i].name === nom)
        return true;
    return false;
  }

  function donneImage(genre) {


    if (Number(genre) === 1) {
      return IMAGE.homme;
    }
    else
      return IMAGE.femme
  }
  function changeType(item) {
    let index = tabJoueur.indexOf(item);
    tabJoueur[index].genre = Math.abs(tabJoueur[index].genre - 1);
    setTabJoueur(tabJoueur);
    setRefreshFlatList(!refreshFlatlist)
  }

  function donneImageDrapeau() {
    if (Var.langue === 0) {
      return IMAGE.drapeau_france;
    }
    else if (Var.langue === 1) {
      return IMAGE.drapeau_anglais;
    }
    else return IMAGE.drapeau_espagnol;
  }
  function incrementeLangue() {
    if (Var.langue === 2) {
      Var.setLangue(0);
    }
    else Var.setLangue(Var.langue + 1);
  }
  let arraySelection = ['Selection','Selection','Selección'];
  let arrayJoueur =['Joueur','Player','Jugador'];
  let arrayStart = ['Commencez','Start','Inicie'];
  const [constSelection, setConstSelection]= useState(arraySelection[0]);
  const [constArrayJoueur,setConstArrayJoueur]= useState(arrayJoueur[0]);
  const [constStart, setConstStart]= useState(arrayStart[0]);

  function changeTextLanguage() {
    setPlacehoder(tabPlacehoder[Var.langue]);
    setConstSelection(arraySelection[Var.langue]);
    setConstArrayJoueur(arrayJoueur[Var.langue]);
    setConstStart(arrayStart[Var.langue]);
    if(userErreur.length > 2){
      setUserErreur(userRequis[erreurNow][Var.langue]);
    }
  }

  function typeJoueur(item) {
    var taille_div = Var.get_adaptive_size(20, 60);
    var taille_text = Var.get_adaptive_size(15, 30);
    var taille_image = Var.get_adaptive_size(15, 40);
    var taille_selection = Var.get_adaptive_size(25, 75);


    return (
      <LinearGradient colors={['rgba(74, 45, 68, 0.5)','rgba(67, 67, 67, 0.5)']} style={{marginBottom:"5%",padding:"3%",width:"100%",height:taille_div*2, display:"flex",flexDirection:"row", alignItems:"center",justifyContent :"space-between", borderRadius : 20}}>
          <View style={{width : "20%",height:"100%",justifyContent:"center",alignItems:"flex-start"}}>
            <TouchableOpacity onPress={() => { changeType(item); }}>
              <Image style={{ height: taille_selection, width: taille_selection,resizeMode:"contain" }} source={donneImage(item.genre)} />
            </TouchableOpacity>
          </View>
          <View style={{height:"100%",width:"60%",alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white", fontSize: taille_text, fontWeight: 'normal', fontFamily: 'Staatliches-Regular' }}>{item.name}</Text>
          </View>
          <View style={{width : "20%",height:"100%",justifyContent:"center",alignItems:"flex-end"}}>
            <TouchableOpacity onPress={() => { rmJoueur(item); }}>
              <Image source={IMAGE.remove} style={{height:taille_image*2,width:taille_image*2,resizeMode :"contain"}}/>
            </TouchableOpacity>
          </View>
      </LinearGradient >



    )
  }

  
    

  const [userErreur, setUserErreur]= useState('');
  let userRequis =[["Le nom doit être entre 2 et 15 charactères","The name must be between 2 and 15 characters","El nombre debe tener entre 2 y 15 caracteres"],
  ["Le nom de se joueur existe déjà", "The name of this player already exists", "El nombre de este jugador ya existe"],
  ["Le nom ne doit pas contenir d'espace", "The name must not contain spaces", "El nombre no debe contener espacios"],
["Il faut au minium trois joueurs pour commencer une partie","You need at least three players to start a game","Se necesitan al menos tres jugadores para empezar una partida"]];

  var taille_font = Var.get_adaptive_size(10, 30);
  var taille_selection = Var.get_adaptive_size(25, 75);

  if (!fontsLoaded) {
    return <Text>oupss</Text>;
  } else {

   

  return (
    <View style={styles.fond}>
      <StatusBar style="auto"/>
      <Image source={IMAGE.fondGoutte} style={styles.imageGoutte}/>
      <Image source={IMAGE.fondGraal} style={styles.imageGraal}/>
      <View style={styles.boxTitre}>
        <View style={{width:"15%"}}></View>
        <View style={{width:"70%",alignItems:"center"}}>
          <Text style={styles.title}>GRAAL</Text>
        </View>
        <View style={{width:"15%",height:"100%", alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity onPress={() => { incrementeLangue(); changeTextLanguage(); }}>
            <Image style={{ height: taille_selection,width:taille_selection, resizeMode: "contain"}} source={donneImageDrapeau()} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.backgroundBox} >
          <View style={styles.boxSousTitre}>
              <View style={styles.spaceSousTitre}></View>
              <Text style={styles.sousTitre}>{constSelection.toUpperCase()}</Text>
          </View>
          <View style={styles.containerSelection}>
          <View style={{height : "5%",width:"100%"}}></View>
            <LinearGradient colors={['rgba(74, 45, 68, 0.8)','rgba(67, 67, 67, 0.8)']} style={styles.boxSelection}>
              <TouchableOpacity onPress={() => { setGenre(genre * -1);}}>
                <Image style={{ height: taille_selection, width: taille_selection, resizeMode : "contain" }} source={donneImage(genre)} />
              </TouchableOpacity>
              <TextInput style={{ textAlign: 'center',fontFamily: 'Staatliches-Regular',fontSize: taille_font, borderBottomColor: "black", borderWidth: 2, borderRadius: 10, height: taille_font*2.5 , width: "55%", backgroundColor: "white" }} onChangeText={(input) => { setName(input) }} value={name} placeholder={Placehoder} />
              <TouchableOpacity onPress={() => {
            if (name.length > 1 && name.length <= 15) {
              if(!joueurExist(name)){
                if(!name.includes(' ')){
                  tabJoueur.unshift({ id: id, name: name, genre: Number(genre) });
                  setName('');
                  setUserErreur('');
                  setTabJoueur(tabJoueur);
                  
                  id++;
                }
                else{
                  erreurNow = 2;
                  setUserErreur(userRequis[2][Var.langue]);
                  
                }
              }
              else{
                erreurNow = 1;
                setUserErreur(userRequis[1][Var.langue]);
                
              }
            }
            else{
              erreurNow = 0;
              setUserErreur(userRequis[0][Var.langue]);
              
            }
            
          }}>
                <Image style={{ height: taille_selection, width: taille_selection, resizeMode : "contain" }} source={IMAGE.add} />
              </TouchableOpacity>
            </LinearGradient>
            <View style={{height : "45%",width:"100%",alignItems:"center",justifyContent:"center"}}>
              <Text style={{fontSize: taille_font,color : '#000000',opacity: 0.6, fontFamily: 'Staatliches-Regular'}}>{userErreur}</Text>
            </View>
          </View>
          <View style={styles.boxSousTitre}>
              <View style={styles.spaceSousTitre}></View>
              <Text style={styles.sousTitre}>{constArrayJoueur.toUpperCase()}</Text>
          </View>
          <View style={styles.boxPlayers}>
            <FlatList
            style={{  width: "100%",height:"100%" }}
            data={tabJoueur2}
            extraData={refreshFlatlist}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => typeJoueur(item)}
            />
          </View>

      </View>
      <View style={styles.boxRepartie}>
        
      <TouchableOpacity onPress={() => { if (tabJoueur.length > 2) { Var.setListeJoueur(tabJoueur); Var.navigation.replace('Mode'); }else{setUserErreur(userRequis[3][Var.langue]); erreurNow = 3;} }}  style={styles.buttonTouch}>
          <LinearGradient colors={['rgba(74, 45, 68, 0.7)','rgba(67, 67, 67, 0.7)']} style={styles.button}>
            <View style={{height:"100%",width:"100%",display:"flex",flexDirection:"row"}}>
              <View style={{width:"80%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                  <Text style={styles.textButton}>{constStart.toUpperCase()}</Text>
              </View>
              <View style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"flex-start"}}>
                  <Image source={IMAGE.suivant} style={styles.backImage}/>
              </View>
            </View>
          </LinearGradient>
      </TouchableOpacity>
  
      </View>
    </View>

  );
  }
}


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
  boxTitre :{
    width: "100%",
    height: "15%",
    display:"flex",
    flexDirection :"row",
    justifyContent :"center",
    alignItems:"center",
    
  },
  backgroundBox :{
    width: "80%",
    height: "70%",
    zIndex : 1,
    display : "flex",
    justifyContent : 'space-evenly',
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
    width : "50%",
    height : "40%",
    borderRadius : 10,
    zIndex : 3,
    
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
    height : "5%",
    display : "flex",
    flexDirection : "row",
    alignItems :"center",

  },
  sousTitre : {
    fontStyle : 'normal',
    fontWeight : 'normal',
    fontSize : deviceWidth*0.04,
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
    height : "80%",
    width:"80%",
    resizeMode :"contain",
  },
  textButton:{
    color : "white",
    fontStyle : 'normal',
    fontWeight : 'normal',
    fontSize :deviceWidth * 0.05333,
    letterSpacing : deviceWidth * 0.00768,
    fontFamily: 'Staatliches-Regular'
  },
  boxSelection : {
    height :"60%",
    width: "100%",
    padding : "5%",
    borderRadius :20,
    display: "flex",
    flexDirection : "row",
    alignItems:"center",
    justifyContent : "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.62,
    elevation: 4,
  },
  boxPlayers :{
    height:"65%",
    width : "80%",
    overflow :"scroll"
  },
  containerSelection : {
    width : "80%",
    height : "15%",
    justifyContent : "center",
    alignItems : "center",
    borderBottomColor : "#FFFFFF",
    borderBottomWidth : 3,
    opacity : 0.7
  }
 
});