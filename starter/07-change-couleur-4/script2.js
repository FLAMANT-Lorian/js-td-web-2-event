/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au  bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/

(function () {
    const colorie = {
        inputRadioElts: document.querySelectorAll('input[type="radio"]'),
        btnElt: document.querySelector('input[type="button"]'),
        init() {
            this.changeColor();
            this.randomColor();
        },
        changeColor() {
            this.inputRadioElts.forEach((inputRadioElt) => {
                inputRadioElt.addEventListener('change', (evt) => {
                    document.body.style.backgroundColor = evt.currentTarget.value;
                    evt.preventDefault();
                })
            })
        },
        randomColor() {
            this.btnElt.addEventListener('click', (evt) => {
                this.r = Math.floor(Math.random() * 255);
                this.g = Math.floor(Math.random() * 255);
                this.b = Math.floor(Math.random() * 255);
                document.body.style.backgroundColor = `rgb(${this.r},${this.g},${this.b})`;
                console.log(`La couleur de fond est : rgb(${this.r},${this.g},${this.b})`)
                evt.preventDefault();
            })
        }
    }
    colorie.init();
})()