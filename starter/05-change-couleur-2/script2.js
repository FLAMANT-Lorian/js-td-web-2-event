/*
SOURCE : https://github.com/oc-courses/javascript-web/tree/gh-pages/chapitre_5/js
*/
/*
EXERCICE 5bis : Change couleur (2) - Colorie la page en fonction des touches pressées
- Change la couleur de fond du body lorsque l'utilisateur appuie sur une des touches
    R (rouge), J (jaune), V (vert) ou B (bleu),
    que ce soit en minuscules ou en majuscules
    et affiche le message 'Touche … non gérée' s'il presse une autre touche.
- Méthode : Cette fois, JS ne fait qu'appliquer une classe sur le body, c'est CSS qui se charge de le styler.
- PRESSÉ ? : tu peux repartir du code de la version précédente, il n'y a qu'une modification mineure à opérer.
*/


(function (){
    const letterKbd ={
        init(){
           this.letter();
        },
        letter(){
            document.body.addEventListener('keydown', (evt) => {
                document.body.classList.add();
                switch ((evt.key).toUpperCase()) {
                    case "R":
                        document.body.className = "red";
                        break;
                    case 'J':
                        document.body.className = "yellow";
                        break;
                    case 'V':
                        document.body.className = "green";
                        break;
                    case 'B':
                        document.body.className = "blue";
                        break;
                    default:
                        alert(`La touche ${evt.key} est non gérée`);
                }
            })
        }
    }
    letterKbd.init();
})()