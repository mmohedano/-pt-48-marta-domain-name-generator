/* eslint-disable */

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const end = [".com", ".net"];

document.generateDomainName = () => {
  const newState = process();
  render(newState);
};
function process() {
  let state = [];
  pronoun.forEach(i => {
    adj.forEach(j => {
      noun.forEach(k => {
        end.forEach(l => {
          state = [...state, `${i}${j}${k}${l}`];
        });
      });
    });
  });
  return state;
}
function render(stat) {
  const list = stat.map(name => `<li>${name}</li>`).join("");
  const unorderedList = document.querySelector(".listDomains");
  unorderedList.innerHTML = list;
}
