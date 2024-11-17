/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

/*const buttonElts = document.querySelectorAll('button[type="submit"]');
for (const buttonElt of buttonElts) {
    buttonElt.addEventListener('click', (evt)=>{
        document.querySelector(':root').style.setProperty('--main-color', evt.currentTarget.id);
    })
}*/

document.getElementById('red').addEventListener('click', () => {
    document.body.style.backgroundColor = '#B61E08';
})
document.getElementById('green').addEventListener('click', () => {
    document.body.style.backgroundColor = '#009C36';
})
document.getElementById('yellow').addEventListener('click', () => {
    document.body.style.backgroundColor = '#F8FB4A';
})
document.getElementById('blue').addEventListener('click', () => {
    document.body.style.backgroundColor = '#005EC4';
})






