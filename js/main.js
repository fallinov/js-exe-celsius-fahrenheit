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
const spanFahrenheit = document.getElementById('fahrenheit');

/**
 * Ecoute l'événement submit du formulaire
 *  - Récupère la valeur saisie par l'utilisateur
 *  - Convertit la valeur en nombre flottant
 *  - Teste si la valeur est un nombre valide
 *    - Si pas valide
 *      - Affiche un message d'erreur à l'utilisateur
 *      - Affiche 🙈 dans le <span> de résultat
 *    - Si valide
 *      - Calcule la température en °F
 *      - Affiche la température en °F dans le <span> de résultat
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
    spanFahrenheit.innerText =  '🙈';
  } else {
    // Calcule la température en farenheit
    tempFahrenheit = tempCelcius * 9 / 5 + 32;
    // Affiche le résultat
    spanFahrenheit.innerText =  `${tempFahrenheit} °F`;
  }
});

