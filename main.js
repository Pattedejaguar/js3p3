// on selectionne les balises div
color=document.getElementsByTagName('div')
// 2 3 4 correspond à la 2ème,3ème,4ème balise div
color[2].addEventListener('click',green);
color[3].addEventListener('click',red);
color[4].addEventListener('click',blue);

// une fonction pour chaque couleur en ciblant l'élément 'text':
function green(){
document.getElementById('text').style.color='green';
}
function red(){
document.getElementById('text').style.color='red';
}
function blue(){
document.getElementById('text').style.color='blue';
}
