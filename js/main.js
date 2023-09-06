/**
* Conversion de degrés Celsius en Farenheit
* @author  Steve Fallet
* @version 0.1
* @since   2019-08-19
*/
'use strict';

// Récupération des éléments HTML à manipuler
const txtCelcius = document.getElementById('celsius');
const btConvertir = document.getElementById('convertir');
const strongFahrenheit = document.getElementById('fahrenheit');

/**
 * Ecoute l'événement submit du formulaire
 *  - Récupère la valeur saisie par l'utilisateur
 *
 *  - Test si la valeur est un nombre valide
 *    - Si pas valide
 *      - Affiche un message d'erreur dans une alerte
 *      - Vide la zone de résultat
 *    - Si valide
 *      - Calcule la températeur en Farenheit
 *      - Affiche le résultat
 *
 *  - Vide le champ de texte celsius
 *  - Mets le focus au champ texte celsius
 *
 */
btConvertir.addEventListener('click',  () => {
  // Récupère la valeur saisie par l'utilisateur
  let tempCelcius = parseFloat(txtCelcius.value);
  let tempFahrenheit = '';

  // Test si la valeur est un nombre valide
  if(txtCelcius.value.length < 1 || isNaN(txtCelcius.value)) {
    // Affiche un message d'erreur à l'utilisateur
    alert('Entrer un température valide !');
    // Vide la zone de résultat
    strongFahrenheit.innerText =  '>_<';
  } else {
    // Calcule la température en Farenheit
    tempFahrenheit = tempCelcius * 9 / 5 + 32;
    // Affiche le résultat
    strongFahrenheit.innerText =  tempFahrenheit + '°F';
  }

  // Vide le champ de texte celsius
  txtCelcius.value = '';
  // Mets le focus au champ texte celsius
  txtCelcius.focus();
});

