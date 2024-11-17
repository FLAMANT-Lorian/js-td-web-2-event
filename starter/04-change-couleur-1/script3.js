/*
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Ta mission est toujours la même : au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
    - Mais cette fois, encore mieux (c'est la meilleure pratique), tu vas appliquer le style avec CSS, JavaScript va se contenter d'ajouter au clic, une classe sur le body qui indiquera à CSS dans quelle couleur il doit être stylé…
    PRESSÉ ? : copie-colle le code de l'exercice précédent et repars de là, il n'y a qu'à l'adapter un petit peu.
*/

(function (){
    const colorie = {
        btnElmts: document.querySelectorAll('button[type="button"]'),
        init(){
            this.colorChange();
        },
        colorChange(){
            for (const btnElmt of this.btnElmts) {
                btnElmt.addEventListener('click', (evt) => {
                    btnElmt.classList.add(btnElmt.id);
                    document.body.style.backgroundColor = evt.currentTarget.className;
                })
            }
        }
    }
    colorie.init();
})()