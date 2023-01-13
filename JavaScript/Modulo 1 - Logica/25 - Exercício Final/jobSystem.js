const vagas = [];
function listarVagas() {
  const vagasString = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal;
  }, "");

  alert(vagasString);
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga: ");
  const descricao = prompt("Informe a descrição para a vaga: ");
  const dataLimite = prompt("Informe uma data limite (dd/mm/AAAA): ");

  const confirmacao = confirm(
    "Você confirma a criação da vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso!");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir: ");
  
  if(indice >= vagas.length || indice < 0){
    alert("Índice inválido!!!");
    return; // Se cair no bloco do IF, ele vai parar no return, como um BREAK, se ele passar vai continuar normalmente.
  }

  const vaga = vagas[indice];

  const candidatosString = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de Candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosString
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato(a): ");
  const indice = prompt("Informe o índice da vaga para se inscrever: ");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada com sucesso!");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir: ");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída com sucesso!");
  }
}

function menuOpcoes() {
  return prompt(
    "Sistema de Cadastro de Vagas! \n\n" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar um nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um candidato em uma vaga" +
      "\n5. Excluir uma vaga" +
      "\n0. Sair"
  );
}

function executar() {
  let opt = "";

  do {
    opt = menuOpcoes();
    switch (opt) {
      case "1":
        listarVagas();
        break;

      case "2":
        novaVaga();
        break;

      case "3":
        exibirVaga();
        break;

      case "4":
        inscreverCandidato();
        break;

      case "5":
        excluirVaga();
        break;

      case "0":
        alert("Finalizando o sistema...");
        break;

      default:
        alert("Opção errada!");
        break;
    }
  } while (opt !== "0");
}

executar();