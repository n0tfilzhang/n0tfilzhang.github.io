const menuPrincipale = document.querySelector('.menuprincipale');
const chiudiMenu = document.querySelector('.chiudimenu');
const apriMenu = document.querySelector('.aprimenu');
const voceMenu = document.getElementById('cs');
const voceMenu2 = document.getElementById('tm');
const voceMenu3 = document.getElementById('prdt');
const voceMenu4 = document.getElementById('prz');
const voceMenu5 = document.getElementById('cnt');

apriMenu.addEventListener('click',apri);
chiudiMenu.addEventListener('click',chiudi);
voceMenu.addEventListener('click',chiudi);
voceMenu2.addEventListener('click',chiudi);
voceMenu3.addEventListener('click',chiudi);
voceMenu4.addEventListener('click',chiudi);
voceMenu5.addEventListener('click',chiudi);

function apri()
{
    menuPrincipale.style.display = 'flex';
    menuPrincipale.style.top = '0';
}

function chiudi()
{
    menuPrincipale.style.top = '-100%';
}