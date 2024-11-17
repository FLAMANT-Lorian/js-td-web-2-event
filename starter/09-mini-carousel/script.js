/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 9 : 
Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau <strong>gallery</strong>. Fais-en une boucle.
*/
/* 
AIDE : voici les étapes :
1. On initialise un index
2. On recherche l'élément img
3. On associe image aux éléments du tableau (suivant le numéro d'index)
4. On incrémente l'index de 1 pour faire défiler les images
5. En fin de longueur du tableau, on redémarre au début de l'index
*/

(function (){
    const carousel = {
        index: 0,
        imgSources: ['./img/becode-seal.png', './img/bell.svg', './img/clock.svg', './img/compass.svg', './img/kiss.svg', './img/kiss-wink-heart.svg', './img/lemon.svg', './img/map.svg'],
        imageElt: document.querySelector('img'),
        btnElt: document.getElementById('next'),
        init() {
            this.imageElt.src = this.imgSources[this.index];
            this.btnElt.addEventListener('click', ()=>{ // Faut utiliser une arrow function pour éviter le binding
                this.imgChange();
            })
        },
        imgChange() {
            this.index++;
            if (this.index === this.imgSources.length) {
                this.index = 0;
            }
            this.imageElt.src = this.imgSources[this.index];
        }
    }
    carousel.init();
})()