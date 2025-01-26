const frases = [
  "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A jornada de mil milhas começa com um único passo.",
  "Acredite que você pode e você está no meio do caminho.",
  "A persistência é o caminho do êxito.",
  "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
  "Você é o seu único limite.",
  "O segredo para seguir em frente é começar.",
  "A criatividade é a inteligência se divertindo.",
  "Não espere por oportunidades, crie você mesmo as suas."
];

function gerarFrase() {
  const fraseElement = document.getElementById('frase');
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  fraseElement.textContent = frases[indiceAleatorio];
}

document.getElementById('btn').addEventListener('click', gerarFrase);