/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

(function () {
    const app = {
        inputElts: document.querySelectorAll('input[type="text"]'),
        formElt: document.querySelector('form'),
        sectionElt: document.querySelector('.material'),
        init() {
            this.inputTypeTextBackgroundColorValue = getComputedStyle(document.querySelector('input[type="text"]')).backgroundColor;
            this.addEventListeners();
        },
        addEventListeners() {
            this.inputElts.forEach((inputElt) => { // This fait référence à l'objet courant
                inputElt.addEventListener('focus', (evt) => {
                    this.focus(evt);
                })
                inputElt.addEventListener('blur', (evt) => {
                    this.blur(evt);
                })
            });
            this.formElt.addEventListener('submit', (evt) => {
                this.submit(evt);
            })
        },
        focus(evt) {
            evt.currentTarget.value = "";
            evt.currentTarget.style.backgroundColor = evt.currentTarget.dataset.backgroundColor;
        },
        blur(evt) {
            evt.currentTarget.style.backgroundColor = this.inputTypeTextBackgroundColorValue;
        },
        submit(evt) {
            evt.preventDefault();
            let textContent = `Bonjour `;
            this.inputElts.forEach(inputElt => {
                textContent += inputElt.value + ' ';
            })
            this.sectionElt.insertAdjacentHTML('beforeend', `<p>${textContent}</p>`);
        }
    }
    app.init();
})()

//méthode du bind est utile pour gagner des lignes au lieu d'utiliser des arrows functions