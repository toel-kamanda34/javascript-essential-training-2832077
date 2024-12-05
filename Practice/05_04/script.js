/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
console.log(document.querySelector("header"));
console.log(document.querySelector(".siteheader"));
console.log(document.querySelector(".maincontent"));
console.log(document.querySelector("article.backpack"));
console.log(document.querySelector("#pack02"));
console.log(document.querySelector(".page-header__heading"));
const heading = document.querySelector(".page-header__heading");
heading.innerHTML = "A pack";
heading.style.backgroundColor = "red";

console.log(document.querySelectorAll(".backpack__features li"));
