const form =
  document.querySelector(
    "#form-habits"
  ) /*Variável form recebendo o conteúdo do #form-habits*/
const nlwSetup = new NLWSetup(
  form
) /*Criando um novo objeto NLWSetup e atribuindo a variável nlwSetup*/
const button = document.querySelector("header button") // Selecionando a tag header e depois button

button.addEventListener("click", add) //addEventListener() é um métódo/evento que adiciona algo que vai ouvir no evento. Neste caso, sempre que clicar no botão ele vai ouvir o evento de 'click' e realizar uma ação, que no caso, é adicionar na função add().
form.addEventListener("change", save)
//Neste caso, sempre que selecionar no formulário ele vai ouvir o evento de 'change' e realizar uma ação, que no caso, é salvar os dados na função save().
function add() {
  //Ao clicar no botão, a função será executada
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // new Date() vai criar uma nova data.
  //toLocaleDateString() é uma função para trocar a linguagem da data, no caso inserido como parâmetro "pt-br".
  //slice() Utilizado somente em objetos do tipo string. Slice significa recorte/fatiar. Nesse caso, o primeiro argumento, 0, não vai recortar nada do início da string. Enquanto o segundo argumento, 5, recorta do final da string.
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso 🔴")
    return //return para o programa. Não vai para a próxima linha
  }
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  //localStorage é um objeto que guarda na memória informações/dados para poder ser utilizado depois
  // Para guardar a infomação é preciso usar um método chamado setItem(). Uso de 2 parâmetros.
  // O 1º para colocar uma chave. No caso, NLWSetup@habits é a chave criada para pegar os dados depois. Poderia ser qualquer nome.
  // O 2º para inserir uma string. Uso do JSON.stringify para tranformá-lo em string.
}
// const data = {
//   /*Colocando dados dentro da variavel data*/
//   /*Array é uma estrutura de dados que faz uso de colchetes*/
// Aqui estava selecionando manualmente, mas deverá ser por meio de função
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
//Pegou do localStorage as informações que estavam em texto
// transformou a string em objeto com JSON através do método parse().
// getItem é um método para pegar as informações que está guardada em algum lugar
// Atribuiu a variavel data.
// Uso do || {} para não dá erro informando que está vazio.
// Então está informando que irá pegar um novo dado ou estará vazio

nlwSetup.setData(
  data
) /*Extrai as informações de dentro de data com setData e atribundo ao objeto nlwSetup*/
nlwSetup.load() /*Ele carregará os dados internos e renderizará o layout*/
