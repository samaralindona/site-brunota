const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAternativas = document.querySelector('.caixaAlternativas')
const caixaResultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas = [
    {
        enunciado: " 1) Qual é um impacto comum da poluição do ar?",
        alternativas: [
            {
            texto: "a) Problemas respiratóros",
            afirmacao: "1) Correto! A poluição do ar pode causar problemas respiratórios como asma e bronquite."
            },
            {
            texto:"b)  Diminuição da fertilidade do solo ",
            afirmacao: "1) Errado. A poluição do ar não afeta diretamente a fertilidade do solo."
            },
            {
            texto:"c)  Aumento da biodiversidade",
            afirmacao: "1) Errado. A poluição do ar geralmente reduz a biodiversidade, não a aumenta."
        }
    ]
    },

    {
        enunciado: "2) O que pode resultar do desmatamento?",
        alternativas: [
            {
            texto:"a) Recuperação rápida de solos ",
            afirmacao: "2) Errado. O desmatamento frequentemente leva à degradação do solo, não à sua recuperação."
            },
            {
            texto: "b) Redução da biodiversidade",
            afirmacao: "2) Correto! O desmatamento destrói habitats e reduz a diversidade de espécies."
            },
            { texto:"c) Aumento dos níveis de água doce ",
                afirmacao: "2) Errado. O desmatamento pode reduzir a capacidade de retenção de água e levar à diminuição dos níveis de água doce."
            }
        ]
           
    },
    {
        enunciado: "3) Qual é um impacto das mudanças climáticas?",
        alternativas: [
            {
            texto:"a) Diminuição dos eventos climáticos extremos ",
            afirmacao: "3) Errado. As mudanças climáticas tendem a aumentar a frequência e intensidade de eventos climáticos extremos."
        },
         {   
            texto: "b)  Alterações nos padrões de precipitação",
            afirmacao: "3) Correto! Mudanças climáticas afetam padrões de precipitação, causando secas ou enchentes."
         },
         {
          texto: "c) Estabilização das temperaturas globais",
          afirmacao: "3) Errado. As mudanças climáticas estão causando um aumento nas temperaturas globais, não uma estabilização."
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
        caixaPerguntas.textContent = "Seu Resultado <3";
        textoResultado.textContent = historiaFinal;
        caixaAternativas.textContent = "";
    }

    
    mostraPergunta();

    