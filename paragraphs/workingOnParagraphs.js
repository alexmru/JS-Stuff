let paras = document.querySelectorAll('p');
paras.forEach( para => {
    para.style.fontSize = "60px";
    para.style.color = "red";
    para.style.marginLeft = "400px";
})

console.log(paras[0]);

paras[0].classList.add("brd");
paras[0].addEventListener('click', () => console.log("You clicked the first paragraph"))
paras[1].addEventListener('click', () => console.log("You clicked the second paragraph"))