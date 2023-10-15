/* eslint-disable */

button.onclick = () => {
  document.getElementById("#domainName").innerHTML = generateDomainName();
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const generateDomainName = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < adj.length; k++)
        console.log(pronoun[i], adj[j], noun[k] + ".com");
    }
  }
};
//console.log(generateDomainName());
