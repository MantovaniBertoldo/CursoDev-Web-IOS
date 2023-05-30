// Método getElementById
let titulo = document.getElementById("titulo");

// Alterando o conteúdo do elemento
titulo.innerHTML = "Olá meus caros alunos!";

// Configurando o estilo CSS do elemento
titulo.style.textAlign = "center";
titulo.style.backgroundColor = "#CCCCC9";
titulo.style.borderBottom = "solid 3px #000";
titulo.style.margin = "20px";

// Método getElementsByClassName
let items = document.getElementsByClassName("item");
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}

// Método getElementsByTagName
let li = document.getElementsByTagName('li');
console.log(li);
for (let i = 0; i < li.length; i++) {
if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
else li[i].style.backgroundColor = '#fff';
}
