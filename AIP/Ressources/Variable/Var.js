import * as IMAGE from './base64.js';

var indice = 1;
function setIndice(t) {
    indice = t;
}

var langue = 0;
function setLangue(t) {
    langue = t;
}

var listeJoueur = [] ;
function setListeJoueur(t) {
    listeJoueur = t;
    listetmp = t.slice();
}

var joueurCourant = 0;
function setJoueurCourant(t) {
    joueurCourant = t;
}

let state = [];
function setState(t) {
    state = t;
}
let state_total = [];
function setStateTotal(t) {
    state_total = t;
}

var navigation;
function setNavigation(t) {
    navigation = t;
}
let lancer = 0;
function setLancer(t) {
    lancer = t;
}
let nbrTour = 0;
function setNbrTour(t) {
    nbrTour = t;
}
let nbrTourMax = 0;
function setNbrTourMax(t) {
    nbrTourMax = t;
}

let taille_ecran_largeur = 0;
function set_Taille_ecran_largeur(t) {
    taille_ecran_largeur = t;
}

let taille_ecran_longueur = 0;
function set_Taille_ecran_longueur(t) {
    taille_ecran_longueur = t;
}
let tabMode = [{id : 1, name :'Classique',description : ["Rien de tel qu'un mode classique pour une soirée chill !","en anglais", " en espagnol"], src : IMAGE.mode_classique},
    {id : 2, name :'Coquin',description : ["Donnez votre consentement pour un moment de pur délice !","en anglais", " en espagnol"], src :IMAGE.mode_hot},
    {id : 3, name :'Buverie',description : ["Tu aimes boire ? Alors, ce mode de jeu est fait pour toi !","en anglais", " en espagnol"], src : IMAGE.mode_alcoolo}]

let ModeChoisit = 0;
function setModeChoisit(t) {
    ModeChoisit = t;
}

let nameRoullette = ['Roulette','wheel','Rueda de la ruleta'];

let nameRegle = ['Regle','Rule','Regla']

let nameMode =['Mode','Mode','Modo']

//max est pour la plus grosse taille possible
//min ...
//ex pour les gros titres()
//get_adaptive_size(40,100)
function get_adaptive_size(min, max) {

    let deviceWidth = taille_ecran_largeur;
    let deviceHeight = taille_ecran_longueur;


    //Taille min sur l'iphone 4
    var minW = 375;
    var minH = 667;

    //Taille max sur l'ipad pro
    var maxW = 1024
    var maxH = 1366;

    //coef régulateur
    var coef_h = 0.45;
    var coef_l = 1.3;

    var echelon = maxW - minW
    var val = deviceWidth - minW
    var pourcent = val / echelon

    var plus_largeur = pourcent * (max - min) / 2

    echelon = maxH - minH
    val = deviceHeight - minH
    pourcent = val / echelon
    var plus_hauteur = pourcent * (max - min) / 2


    var taille_2 = min + plus_hauteur * coef_h + plus_largeur * coef_l
    return taille_2
}


let listetmp= [];
function MajListeTmp(){
    listetmp = listeJoueur.slice();
}
function supprimerDeListe(joueur){
    listetmp.splice(listetmp.indexOf(joueur),1);
}
function Melanger(){
    listetmp.sort((a, b) => 0.5 - Math.random());
}
let tabPartage = ['Envenime tes soirée avec GRAAL \n','Liven up your evening with GRAAL \n','Anima tu noche con GRAAL \n']
export {tabPartage,nameMode,nameRegle,nameRoullette,listetmp,MajListeTmp,supprimerDeListe,Melanger,ModeChoisit,setModeChoisit,tabMode, set_Taille_ecran_longueur, set_Taille_ecran_largeur, get_adaptive_size, langue, setLangue, nbrTour, setNbrTour, nbrTourMax, setNbrTourMax, lancer, setLancer, setNavigation, navigation, state, setState, state_total, setStateTotal, indice, setIndice, listeJoueur, setJoueurCourant, setListeJoueur, joueurCourant };