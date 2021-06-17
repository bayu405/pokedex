
const cons = document.querySelector('.content');
const cons1 = document.querySelector('.content1');
const cons2 = document.querySelector('.content2');
const cons3 = document.querySelector('.content3');
const output = document.querySelector('.output');
const johtor = document.querySelector('.johto');
const sinoh = document.querySelector('.sinnoh');
const hoens = document.querySelector('.hoenn');
let regi = document.querySelector('.region');


function kanto(){
    // fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")

let loading = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
const johtor = document.querySelector('.output');
johtor.innerHTML = loading;
    fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then(pokemon1 => pokemon1.json())
    .then(pokemon1 => {
        const pokem = pokemon1.pokemon_entries;
   
setTimeout(() => {
    const load = document.querySelector('.lds-spinner');
    load.style.display = 'none';
    setTimeout(() => {
        card(pokem)
      }, 250);
}, 1200);


    })
}


function johto(){
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    let loading = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
    const johtor = document.querySelector('.johto');
    johtor.innerHTML = loading;
    fetch("https://pokeapi.co/api/v2/pokemon?limit=251")
    // fetch("https://pokeapi.co/api/v2/pokemon?offset=151&limit=251")
    .then(pokemon1 => pokemon1.json())
    .then(pokemon1 => {
const pokem = pokemon1.results;
console.log(pokemon1);
setTimeout(() => {
    const load = document.querySelector('.lds-spinner');
    load.style.display = 'none';
    setTimeout(() => {
        card1(pokem)
      }, 250);
}, 1200);

    })
}


function hoenn(){
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    let loading = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

    hoens.innerHTML = loading;
    fetch("https://pokeapi.co/api/v2/pokemon?limit=381")
    // fetch("https://pokeapi.co/api/v2/pokemon?offset=151&limit=251")
    .then(pokemon1 => pokemon1.json())
    .then(pokemon1 => {
const pokem = pokemon1.results;
console.log(pokemon1);
setTimeout(() => {
    const load = document.querySelector('.lds-spinner');
    load.style.display = 'none';
    setTimeout(() => {
        card2(pokem)
      }, 250);
}, 1200);

    })
}


function sinnoh(){
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    let loading = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

   sinoh.innerHTML = loading;
    fetch("https://pokeapi.co/api/v2/pokemon?limit=491")
    // fetch("https://pokeapi.co/api/v2/pokemon?offset=151&limit=251")
    .then(pokemon1 => pokemon1.json())
    .then(pokemon1 => {
const pokem = pokemon1.results;
console.log(pokemon1);
setTimeout(() => {
    const load = document.querySelector('.lds-spinner');
    load.style.display = 'none';
    setTimeout(() => {
        card3(pokem)
      }, 250);
}, 1200);

    })
}



function blank(){
    output.innerHTML = " ";
    johtor.innerHTML = " ";
    hoens.innerHTML = " ";
    sinoh.innerHTML = " ";
}

regi.addEventListener('change',function(){
    if(regi.selectedIndex == 0) {
console.log("halo");
blank()
   }
    if(regi.selectedIndex == 1) {
        kanto()
        cons1.style.display = 'none'
        cons2.style.display = 'none'
        cons3.style.display = 'none'
cons.style.display = 'block'
   }
   if(regi.selectedIndex == 2) {
johto()
cons.style.display = 'none'
cons2.style.display = 'none'
cons3.style.display = 'none'
cons1.style.display = 'block'
}
if(regi.selectedIndex == 3) {
    hoenn()
    cons.style.display = 'none'
    cons1.style.display = 'none'
    cons3.style.display = 'none'
    cons2.style.display = 'block'
}
if(regi.selectedIndex == 4) {
    sinnoh()
    cons.style.display = 'none'
    cons1.style.display = 'none'
    cons2.style.display = 'none'
    cons3.style.display = 'block'
    console.log("Yes");
}
})

function card(pokem){

    let div = "";
    for (let i = 0; i < pokem.length; i++) {
        let x = pokem[i];
        div += konten(x);  
    }
 
output.innerHTML += div;

}

function card1(pokem){

    let div = "";
    let id = 151;
 
    for (let i = 151; i < pokem.length; i++) {
id++
        let x = pokem[i];
        div += konten1(x,id);  
    }

johtor.innerHTML += div;

}

function card2(pokem){

    let div = "";
    let id = 251;
 
    for (let i = 251; i < pokem.length; i++) {
id++
        let x = pokem[i];
        div += konten1(x,id);  
    }

hoens.innerHTML += div;

}

function card3(pokem){

    let div = "";
    let id = 386;
 
    for (let i = 386; i < pokem.length; i++) {
id++
        let x = pokem[i];
        div += konten1(x,id);  
    }

sinoh.innerHTML += div;

}
document.addEventListener('click',function(e){
    if  (e.target.classList.contains('box')) {
        let tes = e.target.firstChild.nextElementSibling.textContent;
        let ids= parseInt(tes)
        //         let m = pokem[i];
                // selectPokemon1(ids) 
                selectPokemon(ids) 
        console.log(tes);
            }
})

function konten(x){

 return `<div class="box">
    <span class="name">${x.entry_number}</span>
      <div class="image">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x.entry_number}.png"  alt="">
      </div>
      <div class="info">
      <span class="name">${x.pokemon_species.name}</span>
      </div>
      </div>`;   
 
}

function konten1(x,id){

    return `<div class="box"  data-pokeid="${id}">

       <span class="name">${id}</span>
         <div class="image">
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"  alt="">
         </div>
         <div class="info">
         <span class="name">${x.name}</span>
         </div>
         </div>`;   
    
   }


function detailPokemon(pokemon,image,colors){
    const out = document.querySelector('.modal');

    const type = pokemon.types.map((type) => type.type.name).join(', ');
    const height = pokemon.height;
    const skill = pokemon.abilities.map((paw) => paw.ability.name).join(', ');
    const stat = pokemon.stats.map((statz) => statz.base_stat);
    const statName = pokemon.stats.map((statz) => statz.stat.name);
console.log(skill);
let divs = `    <div class="kotak">
<div class="headers">${pokemon.name}</div>  
<div class="kotak-mid">
<div class="l-side">
<img src="${image}"  alt="">
</div>
<div class="r-side">
<div class="tipe">
    <span class="tip">Type:<span class="tipex">${type}</span></span>
</div>
<div class="base-stat">
    <h3 class="base-head">Base Stat</h3>
    <span class="height">Height: ${height}</span>
    <span class="height">${statName[0]}: ${stat[0]}</span>
    <span class="height">${statName[1]}: ${stat[1]}</span>
    <span class="height">${statName[2]}: ${stat[2]}</span>
    <span class="height">${statName[3]}: ${stat[3]}</span>
    <span class="height">${statName[4]}: ${stat[4]}</span>
    <span class="height">${statName[5]}: ${stat[5]}</span>
</div>

</div>
</div>
<div class="total-container">
    <div class="total">
        <div class="total-item">
        <span class="skill">Ability: ${skill}</span>
        </div>
    </div>
    <button class="close">X</button>
</div>
</div>`;

const box = document.querySelector('.kotak');
out.innerHTML = divs;

out.classList.add('modalz')
const tipex = document.querySelector('.tipex');
tipex.style.backgroundColor = `${colors}`
tipex[1].style.backgroundColor = `${colors}`

box.classList.remove('remove')
}



// DETAIL POKEMON JOHTO 
function selectPokemon(ids){
    fetch(`https://pokeapi.co/api/v2/pokemon/${ids}`)
    .then(pokemon => pokemon.json())
    .then(pokemon => {
   
        fetch(pokemon.species.url)
    .then(color => color.json())
    .then(color => {
        const colors = color.color.name;

        detailPokemon(pokemon,image,colors)

        fetch("https://pokeapi.co/api/v2/evolution-chain/79/")
        .then(evo => evo.json())
        .then(evo => {
    
        })
    })
    //   const image =` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids}.png`
      const image = `https://pokeres.bastionbot.org/images/pokemon/${ids}.png`





    })
};





// KLIK DETAIL
document.addEventListener('click',function(e){
    const out = document.querySelector('.modal');
const box = document.querySelector('.kotak');
    if (e.target.classList.contains('close')) {
    box.classList.add('remove')
    out.classList.remove('modalz')
    }
})


























//    <img src="https://pokeres.bastionbot.org/images/pokemon/${x.entry_number}.png"  alt="">

