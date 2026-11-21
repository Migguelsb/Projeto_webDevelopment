const urlBase = "https://pokeapi.co/api/v2/pokemon/";


const porPagina = 20;
const totalPokemon = 151;
const totalPaginas = Math.ceil(totalPokemon / porPagina);
let paginaAtual = 1;


const listaCards = document.getElementById("lista-cards");
const btnAnterior = document.getElementById("btn-anterior");
const btnProxima = document.getElementById("btn-proxima");
const textoPagina = document.getElementById("pagina");


function buscarPokemons() {
  
  const primeiro = (paginaAtual - 1) * porPagina + 1;
  let ultimo = primeiro + porPagina - 1;
  if (ultimo > totalPokemon) {
    ultimo = totalPokemon;
  }

  
  const pedidos = []; //----------------------------------------------------------------------------------------------------
  for (let id = primeiro; id <= ultimo; id++) {
    const pedido = fetch(urlBase + id).then(function (resposta) {
      return resposta.json();
    });
    pedidos.push(pedido);
  }

  
  Promise.all(pedidos) //-------------------------------------------------------------------------------------------------------------------
    .then(function (pokemons) {
      console.log(pokemons); 
      mostrarCards(pokemons);
      textoPagina.textContent = "Página " + paginaAtual + " de " + totalPaginas;
      btnAnterior.disabled = paginaAtual === 1;
      btnProxima.disabled = paginaAtual === totalPaginas;
    })
    .catch(function (erro) {
      listaCards.textContent = "Erro ao carregar os Pokémon.";
      console.log("Erro:", erro);
    });
}


function mostrarCards(pokemons) {
  listaCards.innerHTML = ""; 

  for (let i = 0; i < pokemons.length; i++) {
    const p = pokemons[i];

    
    const card = document.createElement("div"); //---------------------------------------------------------------------------------------------
    card.className = "card";

    
    const coracao = document.createElement("span");
    coracao.className = "coracao";
    coracao.textContent = "♡";
    coracao.addEventListener("click", function () {
      if (coracao.textContent === "♡") {
        coracao.textContent = "♥";
      } else {
        coracao.textContent = "♡";
      }
    });

    const imagem = document.createElement("img");
    imagem.src = p.sprites.other["official-artwork"].front_default || p.sprites.front_default;
    imagem.alt = p.name;

    const nome = document.createElement("h3");
    nome.textContent = "#" + p.id + " " + deixarMaiuscula(p.name);

    const tipos = document.createElement("p");
    tipos.textContent = "Tipo: " + pegarTipos(p.types);

    const altura = document.createElement("p");
    altura.textContent = "Altura: " + p.height / 10 + " m";

    const peso = document.createElement("p");
    peso.textContent = "Peso: " + p.weight / 10 + " kg";

   
    card.appendChild(coracao); //--------------------------------------------------------------------------
    card.appendChild(nome);
    card.appendChild(imagem);
    card.appendChild(tipos);
    card.appendChild(altura);
    card.appendChild(peso);

    
    listaCards.appendChild(card);
  }
}


function pegarTipos(tipos) {
  let texto = "";
  for (let i = 0; i < tipos.length; i++) {
    if (i > 0) {
      texto = texto + ", ";
    }
    texto = texto + traduzirTipo(tipos[i].type.name);
  }
  return texto;
}


function traduzirTipo(tipo) {
  const traducao = {
    normal: "Normal", fire: "Fogo", water: "Água", electric: "Elétrico",
    grass: "Planta", ice: "Gelo", fighting: "Lutador", poison: "Veneno",
    ground: "Terra", flying: "Voador", psychic: "Psíquico", bug: "Inseto",
    rock: "Pedra", ghost: "Fantasma", dragon: "Dragão", dark: "Sombrio",
    steel: "Aço", fairy: "Fada"
  };
  return traducao[tipo] || tipo;
}


function deixarMaiuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}


btnProxima.addEventListener("click", function () {
  paginaAtual = paginaAtual + 1;
  buscarPokemons();
});

btnAnterior.addEventListener("click", function () {
  paginaAtual = paginaAtual - 1;
  buscarPokemons();
});


buscarPokemons();
