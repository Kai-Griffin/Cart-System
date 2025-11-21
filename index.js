// select all products
// log all products


const main = document.querySelector('#main');
console.log(main);

const  section = main.firstElementChild;
console.log(section);

const  h2 = section.firstElementChild;
console.log(h2);

const  div = section.nextElementSibling;
console.log(div);





const article1 = div.firstElementChild;
console.log(article1);

const h3art1 = article1.firstElementChild;
console.log(h3art1); 

const p_art1 = article1.nextElementSibling;
console.log(p_art1); 

const button = article1.lastElementSibling;
console.log(button); 



const article2 = div.nextElementSibling;
console.log(article2) ;

const h3 = article2.firstElementChild;
console.log(h3);


const p = article2.nextElementSibling;
console.log(p);

const btn2 = article2.lastElementChild;
console.log(btn2);


