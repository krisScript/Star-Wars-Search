"use strict";
import "./style/index.scss";
import getData from "./app/getData/getData";
import { processObject } from "./app/utilities/utilities";
import createCard from "./app/createCard/createCard";
import displayError from "./app/displayError/displayError";
import switchSides from "./app/switchSides/switchSides";
switchSides();
const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", async e => {
  e.preventDefault();
  const { name, option } = e.target.elements;
  const url = `https://swapi.co/api/${option.value}/?search=${name.value}`;
  const cardSection = document.querySelector(".card-section");
  try {
    const { results } = await getData(url);
    const card = createCard(processObject(results[0]));
    if (cardSection.firstChild) {
      cardSection.firstChild.remove();
    }
    cardSection.appendChild(card);
  } catch (err) {
    displayError("Error there was!How embarrassing how embarrassing!");
  }
});
