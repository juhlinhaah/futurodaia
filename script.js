const caixaPrincipal = document.querySelector(".caixa-principal);
  const caixaPerguntas = document.querySelector(".caixa-perguntas);
const caixaAlternativas = document.querySelector(".caixa-alternativa);
const caixaResultado = document.querySelector(".caixa-resultado);
const caixaResultado = document.querySelector(".caixa-resultado);

  const perguntas = [
  {
    enunciado:
    "A IA será capaz de criar soluções inovadoras para problemas
 ambientais complexos?"
      caixaAlternativas: {

    "verdadeiro",
    "falso",
  ]

  },

  {
    enunciado: "A IA substituirá os humanos em tarefas criativas, como escrever 
livros ou compor música"?
    caixaAlternativas: [   
      "Verdadeiro",
      "Falso",
]
  },
  {
    enunciado: "A IA substituirá os humanos em tarefas criativas, como escrever 
livros ou compor música"?
    caixaAlternativas: [
      "Verdadeiro",
      "Falso",

  ]
  },
{
  enunciado: "As maquinas com IA terão a capacidade de tomar decisões éticas completas"?
    caixaAlternativas: [
      "Verdadeiro",
      "Falso",
]
  },
  {
    let atual = 0;
    let perguntaAtual;

    function mostraPergunta() {
      perguntaAtual = perguntas{atual};
      caixaPergunta.textContent = perguntaAtual.enunciado;
      mostraAlternativas ();
    }

    function mostraAlternativas() {
      for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas;
        caixaAlternativas.appendChild(botaoAlternativas);
      }
    }

    mostra perguntas();









        
    
    
      










      
    




