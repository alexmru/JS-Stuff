const now = new Date();
const clock = document.querySelector('h1');


setInterval (() => {
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    clock.innerHTML = `<span>${h}</span> : <span>${m}</span> : <span>${s}</span>`;
    
} , 1000);