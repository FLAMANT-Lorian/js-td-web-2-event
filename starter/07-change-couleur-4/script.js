/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/

(function () {
    const colorie = {
        inputRadioElts: document.querySelectorAll('input[type="radio"]'),
        init() {
            this.changeColor();
        },
        changeColor() {
            this.inputRadioElts.forEach((inputRadioElt)=>{
                inputRadioElt.addEventListener('change', (evt) => {
                    document.body.style.backgroundColor = evt.currentTarget.value;
                })
            })
        }
    }
    colorie.init();
})()

/*const radioButtons = document.querySelectorAll('input[type="radio"]');
for (const radioButton of radioButtons) {
    radioButton.addEventListener('change',  (evt) => {
        document.querySelector(':root').style.setProperty('--main-color', evt.currentTarget.value);
    });
}*/
/*
const radioInputs= document.querySelectorAll('input[type="radio"]');

for (const radioInput of radioInputs) {
    if (radioInput.checked){
        document.querySelector(':root').style.setProperty('--main-color', radioInput.value);
    }
}*/

// document.querySelector(':root').style.setProperty('--main-color', document.querySelector('input[checked]').value);
/*
document.getElementById('formCouleur').addEventListener('submit', function (evt) { // On ecoute le click sur le formulaire et pas sur le bouton de soumission !!!
    evt.preventDefault(); // permet que la page ne se raffraichisse pas quand on soumet le formulaire !
    console.log('Bonjour');
})
*/