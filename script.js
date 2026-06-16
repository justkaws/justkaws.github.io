const themeToggle =
document.getElementById("themeToggle");

if(localStorage.theme === "light"){

    document.body.classList.add("light");
    themeToggle.innerHTML = "☀️";

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    const isLight =
    document.body.classList.contains("light");

    localStorage.theme =
    isLight ? "light" : "dark";

    themeToggle.innerHTML =
    isLight ? "☀️" : "🌙";

});

const quotes = [

"Somos nada mais do que a soma das nossas experiências.",

"Deixe de querer ser rocha. Aceite ser rio.",

"Sem retorno. Assim como os vikings faziam, eu queimei o barco."

];

let quoteIndex = 0;

setInterval(()=>{

    quoteIndex =
    (quoteIndex + 1) % quotes.length;

    document.getElementById("quote")
    .textContent =
    quotes[quoteIndex];

},4000);

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const target =
    +counter.dataset.target;

    let count = 0;

    const update = ()=>{

        count += target / 100;

        if(count < target){

            counter.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText =
            target >= 1000
            ? "5K+"
            : target + "+";

        }

    };

    update();

});

const canvas =
document.getElementById("matrix");

const ctx =
canvas.getContext("2d");

function resize(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}

resize();

const chars =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオ";

const fontSize = 16;

let columns =
Math.floor(canvas.width/fontSize);

let drops =
Array(columns).fill(1);

function draw(){

    ctx.fillStyle =
    "rgba(5,8,22,.08)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
    "#ff2b2b";

    ctx.font =
    fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text =
        chars[
            Math.floor(
                Math.random()
                * chars.length
            )
        ];

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );

        if(
            drops[i]*fontSize >
            canvas.height &&
            Math.random() > .975
        ){

            drops[i] = 0;

        }

        drops[i]++;

    }

}

setInterval(draw,35);

window.addEventListener(
"resize",
resize
);