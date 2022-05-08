//La fonction makeArray contruit un tableau selon les propriétés entrées en paramètres )

const univers = {
    arraySorted : false,

    monTableau : [],

    tempo1 : "",
    tempo2 : "",
    
    monTableauIndexNumber : 50,
    monTableauMin : 0,
    monTableauMax : 200,
    monTableauCurrentIndex : 0,

    init : function() {
        univers.makeArray();
        univers.afficheMonTableau(document.querySelector(".unsortedTable-p"));
        univers.sortArrayOnce();
        //document.querySelector('button').addEventListener('click', function (){clearInterval(univers.tempo)}),
        //univers.afficheMonTableau(document.querySelector(".sortedTable-p"));
    },

    afficheMonTableau : function(place) {
        let stringMyTable = "";

        for (value of univers.monTableau) {
            stringMyTable = stringMyTable + " "+ value;
        }
        place.innerHTML = (stringMyTable);
        //console.log(stringMyTable);
    },

    makeArray : function() {
        for (let index = 0 ; index < univers.monTableauIndexNumber ; index++) {
            univers.monTableau[index] = Math.floor(Math.random() * (univers.monTableauMax - univers.monTableauMin) + univers.monTableauMin);
        }
        //console.log(univers.monTableau)
    },

    sortArrayOnce : function() {
        // La variable tableauTrié est initalisée à false
                //Tant que la variable tableauTrié est fausse
        if (univers.arraySorted == false) {
            // on l'initialise à vrai en début de boucle
            univers.arraySorted = true;
            //on parcours le tableau avec un foreach
                    //clearInterval(univers.tempo1);
                    univers.tempo2 = setInterval(univers.mooveNumbersOnce, 100);
                
        //Et on recommence la boucle. Si, arrivé ici arraySorted n'a pas changé de valeur, c'est que le tableau est trié : on pourra sortit de la boucle.
        }
        else {
            arraySorted = false;
            //clearInterval(univers.tempo1);
            univers.afficheMonTableau(document.querySelector(".sortedTable-p"));
        }
    },
    mooveNumbersOnce : function() {
        univers.monTableauCurrentIndex++
            console.log('MooveNumberOnce');
        if (univers.monTableauCurrentIndex < univers.monTableauIndexNumber){
                            //Si la valeur de l'index est plus petite que celle du précédent
            if (univers.monTableau[univers.monTableauCurrentIndex] < univers.monTableau[univers.monTableauCurrentIndex - 1]){
                console.log('Condition if de MooveNumberOnce');
                // On intervertis les valeurs
                const tampon = univers.monTableau[univers.monTableauCurrentIndex];
                univers.monTableau[univers.monTableauCurrentIndex] = univers.monTableau[univers.monTableauCurrentIndex - 1];
                univers.monTableau[univers.monTableauCurrentIndex-1] = '<span>' + tampon + '</span>';
                // Et le tableau n'est pas trié
                univers.arraySorted = false;
                univers.afficheMonTableau(document.querySelector(".sortedTable-p"));
                univers.monTableau[univers.monTableauCurrentIndex-1] = tampon;
            
            }
        }
        else{
            console.log('Condition else de MooveNumberOnce');
            univers.monTableauCurrentIndex = 0;
            clearInterval(univers.tempo2);
            univers.sortArrayOnce();

            //univers.tempo1 = setInterval(univers.sortArrayOnce, 300);
            return ('0');
        }      
    },
}

document.querySelector('button').addEventListener('click', univers.init);