const form = document.querySelector('#form-habits') /*Variável form recebendo o conteúdo do #form-habits*/
const nlwSetup = new NLWSetup(form) /*Criando um novo objeto NLWSetup e atribuindo a variável nlwSetup*/

const data = { /*Colocando dados dentro da variavel data*/
  /*Array é uma estrutura de dados que faz uso de colchetes*/
  run: ["01-01", "01-02", "01-06"],
  water: ["01-04", "01-05"],
  food: ["01-01", "01-03"],
}

nlwSetup.setData(data)/*Puxando as informações de dentro de data com setData e atribundo ao objeto nlwSetup*/
nlwSetup.load() /*Ele carregará os dados internos e renderizará o layout*/