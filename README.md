Pokédex com a PokéAPI
Projeto para fins acadêmicos 
Parte Teórica - Web Development Front-End

1. O que é uma API e como funciona o consumo de dados em
tempo real
API é uma forma de um programa pedir informações para outro programa. No meu
projeto, o site pede os dados dos Pokémon para a API, e a API devolve as
informações para o site mostrar na tela. Essas informações chegam em um
formato chamado JSON, que é parecido com uma lista de nomes e valores (por
exemplo, nome: pikachu).
Quando falamos em tempo real, quer dizer que o site busca os dados na hora que
a página abre ou quando clicamos em um botão. Por isso eu não preciso escrever
cada Pokémon no HTML, o site busca tudo sozinho.


2. DOM e criação de elementos dinâmicos
O DOM é a página HTML vista pelo JavaScript, como se fossem vários blocos
(elementos) que o JavaScript consegue encontrar e mudar. Manipular o DOM é
criar, mudar ou apagar esses elementos pelo JavaScript, sem precisar atualizar a
página.
No meu projeto, o HTML tem só uma div vazia. O JavaScript cria os cards (nome,
imagem e informações de cada Pokémon) e coloca dentro dessa div. Por isso os
cards são dinâmicos, porque não estão escritos no HTML.


4. Funções básicas utilizadas
• fetch(): faz o pedido para a API. Ele devolve uma Promise, que é uma resposta
que ainda vai chegar.
• .then(): roda quando a resposta chega. Usei resposta.json() para transformar a
resposta em dados que o JavaScript entende.
• Promise.all(): espera todos os fetch terminarem. Usei porque cada fetch traz só
um Pokémon, então faço 20 por página.
• .catch(): mostra uma mensagem se der erro, por exemplo se estiver sem
internet.
• document.getElementById(): pega um elemento que já existe no HTML.
• document.createElement(): cria um elemento novo, como div, img, h3 ou p.
• appendChild(): coloca um elemento dentro de outro, para ele aparecer na
página.
• textContent e src: colocam o texto e a imagem nos elementos que criei.
• addEventListener(): faz algo acontecer quando clicamos, como nos botões de
página e no coração.


5. Motivo da escolha da API
Escolhi a PokéAPI principalmente porque eu gosto bastante de Pokémon, então
ficou mais legal de fazer o projeto. Além disso, ela é gratuita, não precisa de
cadastro nem de token e tem uma documentação fácil de entender. Pokémon
também começou em 1996 e fez muito sucesso nos anos 90 e 2000, que é o tema
do trabalho. Os dados dela são bons para fazer os cards, porque tem nome,
imagem, tipo, altura e peso. No site eu mostrei os 151 Pokémon da primeira
geração.


6. Regras de acesso e documentação da API
• Documentação: https://pokeapi.co/docs/v2
• Token: não precisa. A API é aberta e não exige login nem chave.
• Método: só dá para consultar dados (método GET).
• Limite de requisições: hoje não tem limite oficial, mas a API pede para não
fazer pedidos demais e guardar os dados quando possível (cache).
• Endereço que usei: https://pokeapi.co/api/v2/pokemon/{id}. O {id} é o número
do Pokémon, por exemplo 25 é o Pikachu.
• Estrutura da resposta: vem um JSON com campos como id, name, height,
weight, types (os tipos) e sprites (as imagens). A imagem que usei está em
sprites.other['official-artwork']
