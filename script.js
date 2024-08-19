const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAternativas = document.querySelector('.caixaAlternativas')
const caixaResultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas = [
    {
        enunciado: " 1) Qual é a principal causa do aquecimento global?",
        alternativas: [
            {
            texto: "a) Queima de combustíveis fósseis",
            afirmacao: "1) Correto, a queima de combustível fóssil é extremamente prejudicial ao meio ambiente."
            },
            {
            texto:"b) Uso excessivo de energia solar",
            afirmacao: "1) Errado, ao contrário, o uso de energia solar é uma maneira de cuidarmos do meio ambiente."
            },
            {
            texto:"c) Reciclagem de lixo",
            afirmacao: "1) Errado, a reciclagem diminue consideravelmente o estrago feito pelo ser humano na natureza."
        }
    ]
    },

    {
        enunciado: "2) Quais são alguns dos impactos das inundações?",
        alternativas: [
            {
            texto:"a) Destruição de propriedades",
            afirmacao: "2) Correto, infelizmente diversas propriedades são destruidas por inundações."
            },
            {
            texto: "b) Aumento da biodiversidade",
            afirmacao: "2) Errado, pelo contrário, a biodiversidade pode ser prejudicada por inundações."
            },
            { texto:"c) Diminuição da erosão do solo",
                afirmacao: "2) Errado, as inundações podem causar erosão no solo."
            }
        ]
           
    },
    {
        enunciado: "3) Quais são algumas das consequências do desmatamento?",
        alternativas: [
            {
            texto:"a) Perda de biodiversidade",
            afirmacao: "3) Correto, a biodiversidade é diretamnete atacada pelo desmatamento."
        },
         {   
            texto: "b) Diminuição das emissões de carbono",
            afirmacao: "3) Errado, as emissões de carbono estão ligadas a queimadas, que podem piorar devido ao desmatanto."
         },
         {
          texto: "c) Melhoria na qualidade do solo",
          afirmacao: "3) Errado, o desmatamento pode prejudicar a qualidade do solo."
         }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado;
    caixaAternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas=document.createElement("button");
            botaoAlternativas.textContent=alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
           caixaAternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Seu Resultado :)";
        textoResultado.textContent = historiaFinal;
        caixaAternativas.textContent = "";
    }

    
    mostraPergunta();

    