const divColDechet = document.getElementById("div-col-dechet");

var dechet = {
    "nom" : "",
    "numDechet" : -1,
    "image" : "",
    "idImgPoubelle" : "",
    "dejaPresente" : false,
    "messageErreur" : "",

    afficher : function() { 
        divColDechet.innerHTML=
        '<img id="'+
        this.nom +
        '_'+
        this.numDechet+
        '" class="dechet" src="'+
        this.image+
        '" alt="'+
        this.nom+
        '"></img>';
    }
};
var tabDesInstances = [];

//init objets :

var monDechet = Object.create(dechet);
monDechet.numDechet = tabDesInstances.length; //avant push
tabDesInstances.push(monDechet);
tabDesInstances[monDechet.numDechet].nom="assiette";
tabDesInstances[monDechet.numDechet].image="assiette-cassee.png";
tabDesInstances[monDechet.numDechet].idImgPoubelle="poubelle-marron";
tabDesInstances[monDechet.numDechet].messageErreur="Perdu : une assiette n'est pas recyclable, ce n'est pas du verre, c'est une ordure ménagère !";

monDechet = Object.create(dechet);
monDechet.numDechet = tabDesInstances.length; //avant push
tabDesInstances.push(monDechet);
tabDesInstances[monDechet.numDechet].nom="arete";
tabDesInstances[monDechet.numDechet].image="arete-de-poisson.png";
tabDesInstances[monDechet.numDechet].idImgPoubelle="poubelle-marron";
tabDesInstances[monDechet.numDechet].messageErreur="Perdu : une arête est un déchet alimentaire, bien sûr !";

//init événements :

const btCommencer = document.getElementById("bt-commencer");
var partieCommencee = false;
btCommencer.addEventListener("click", function(){ 
    if (partieCommencee == false){
        partieCommencee = true;
        jouer();
    }
}, false); 

var messageOk = "Bravo, le tri, ce n'est pas compliqué !";
const divColMessage = document.getElementById("div-col-message");
function afficherMessage(chaine){
    divColMessage.innerHTML=chaine;
}

const poubelleVerte = document.getElementById("poubelle-verte");
poubelleVerte.addEventListener("click", function(){ 
    if (partieCommencee == true){
        if(this.getAttribute("id") == tabDesInstances[numDechetPresente].idImgPoubelle){
            afficherMessage(messageOk);
            score+=1;
        }
        else afficherMessage(tabDesInstances[numDechetPresente].messageErreur);

        afficherBtContinuer();
    }
}, false);

const poubelleMarron = document.getElementById("poubelle-marron");
poubelleMarron.addEventListener("click", function(){ 
    if (partieCommencee == true){
        if(this.getAttribute("id") == tabDesInstances[numDechetPresente].idImgPoubelle){
            afficherMessage(messageOk);
            score+=1;
        }
        else afficherMessage(tabDesInstances[numDechetPresente].messageErreur);

        afficherBtContinuer();
    }
}, false);

const poubelleJaune = document.getElementById("poubelle-jaune");
poubelleJaune.addEventListener("click", function(){ 
    if (partieCommencee == true){
        if(this.getAttribute("id") == tabDesInstances[numDechetPresente].idImgPoubelle){
            afficherMessage(messageOk);
            score+=1;
        }
        else afficherMessage(tabDesInstances[numDechetPresente].messageErreur);

        afficherBtContinuer();
    }
}, false);

const poubelleBleue = document.getElementById("poubelle-bleue");
poubelleBleue.addEventListener("click", function(){ 
    if (partieCommencee == true){
        if(this.getAttribute("id") == tabDesInstances[numDechetPresente].idImgPoubelle){
            afficherMessage(messageOk);
            score+=1;
        }
        else afficherMessage(tabDesInstances[numDechetPresente].messageErreur);

        afficherBtContinuer();
    }
}, false);


const btContinuer = document.getElementById("bt-continuer");
btContinuer.style.display="none";
function afficherBtContinuer(){
    btContinuer.style.display="block";
}
function effacerBtContinuer(){
    btContinuer.style.display="none";
}
btContinuer.addEventListener("click", function(){ 
    numDechetPresente+=1;
    if(numDechetPresente >= tabDesInstances.length){
        effacerBtContinuer();
        afficherScore();
    }
    else {
        tabDesInstances[numDechetPresente].afficher();
        afficherMessage("");
    }

}, false);

// Fonction démarrage du jeu :

var numDechetPresente = -1;
var score = 0;
function jouer(){
    partieCommencee == true;
    score = 0;
    afficherMessage("");
    //"dejaPresente" : false,
    for(i=0;i<tabDesInstances.length;i++) tabDesInstances[i].dejaPresente = false;
  
    //Afficher le 1er déchet
    numDechetPresente=0;
    tabDesInstances[0].afficher();
}
function afficherScore(){

    divColDechet.innerHTML="";
    afficherMessage("vous avez obtenu la note de "+score+" sur "+(tabDesInstances.length));
    partieCommencee = false;
}

    





function numId(id){
    return parseInt(   id.substring(  (id.indexOf("_")) +1  )   );
}



