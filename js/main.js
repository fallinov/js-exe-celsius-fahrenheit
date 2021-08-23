/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict';

  // Récupération des éléments HTML à manipuler
  const formulaire = document.querySelector('form');
  const txtCelcius = document.getElementById('celsius');
  const strongFahrenheit = document.getElementById('fahrenheit');

  // Lors de l'envoi du formulaire
  formulaire.addEventListener('submit', function (event) {
    event.preventDefault();

    let tempCelcius = parseFloat(txtCelcius.value);
    let tempFahrenheit = "";

    // Test la valeur saisie par l'utilisateur
    if(isNaN(txtCelcius.value)) {
      alert("Entrer un température valide !");
      txtCelcius.value = "";
    } else {
      tempFahrenheit = tempCelcius * 9 / 5 + 32;
    }

    strongFahrenheit.innerHTML =  tempFahrenheit + "°F";

    txtCelcius.focus();
  });
}()); // Main IIFE

