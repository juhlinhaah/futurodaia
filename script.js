const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".caixa-resultado");

  const perguntas = [
  {
    enunciado:
    "A IA será capaz de criar soluções inovadoras para questões
 ambientais complexas?",
      caixaAlternativas: [
    "verdadeiro",
    "falso"
  ]
 } 
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
if (atual >= perguntas.length) {
  mostraResultado();
  return;
}
      perguntaAtual = perguntas[atual];
      caixaPergunta.textContent = perguntaAtual.enunciado;
      caixaAlternativas.textContent = "";
      mostraAlternativas ();
    }
    function mostraAlternativas() {
      for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", () =>  resposta);
        caixaAlternativas.appendChild(botaoAlternativas);
      }
    }

    fuction respostaSelecionada(opcaoSelecionada) {
      const afirmacoes = opcaoSelecionada.afirmacao;
    historiafinal += afirmacoes + " ";
atual++;
    mostraPerguntas():
  }
    function mostraResultado() {
      caixaAlternativas.textContent = "Em 2049...";
      textoResultado.textContent = historiaFinal;
      caixaAlternativa.textContent = " ";
    }
    mostraPergunta();




    










        
    
    
      










      
    








