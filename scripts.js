const nomeHotel = "Hotel Terabithia";
const hospedes = [];

function exibirMensagemBoasVindas(nomeUsuario) {
  alert(
    `Bem vindo ao ${nomeHotel}, ${nomeUsuario}. É um imenso prazer ter você por aqui!`
  );
}

function autenticarUsuario() {
  const senhaCorreta = 2678;
  const nomeUsuario = prompt("Digite o seu nome:");
  const senhaDigitada = parseInt(prompt("Digite a senha:"));

  if (senhaDigitada === senhaCorreta) {
    exibirMensagemBoasVindas(nomeUsuario);
    menuPrincipal();
  } else {
    alert("Senha incorreta. Tente novamente.");
    autenticarUsuario();
  }
}

function menuPrincipal() {
  const opcao = parseInt(
    prompt(
      `Escolha uma opção:\n1. Reservar quarto\n2. Cadastrar Hóspede\n3. Pesquisar Hóspede\n4. Verificar Auditório\n5. Comparar preços do combustível\n6. Manutenção de Ar\n7. Sair`
    )
  );

  switch (opcao) {
    case 1:
      reservarQuarto();
      menuPrincipal();
      break;
    case 2:
      cadastrarHospedes();
      menuPrincipal();
      break;
    case 3:
      pesquisarHospede();
      menuPrincipal();
      break;
    case 4:
      verificarAuditorio();
      verificarDisponibilidade();
      calcularGarçons();
      calcularBuffet();
      menuPrincipal();
      break;
    case 5:
      compararPreçosCombustivel();
      menuPrincipal();
      break;
    case 6:
      calcularValorServico();
      menuPrincipal();
    case 7:
      despedida();
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menuPrincipal();
      break;
  }
}

function inicio() {
  autenticarUsuario();
}

const numeroQuartos = 20;
const valorDiariaMinimo = 0;
const valorDiariaMaximo = 1000;
const maxDiasHospedagem = 30;

function validarValorDiaria(valor) {
  return valor >= valorDiariaMinimo && valor <= valorDiariaMaximo;
}

function validarQuantidadeDias(dias) {
  return dias > 0 && dias <= maxDiasHospedagem;
}

function reservarQuarto() {
  const valorDiaria = parseFloat(prompt("Qual o valor padrão da diária?"));

  if (!validarValorDiaria(valorDiaria)) {
    alert("Valor inválido. Insira um valor positivo para a diária.");
    reservarQuarto();
    return;
  }

  const quantidadeDias = parseInt(prompt("Quantas diárias serão necessárias?"));

  if (!validarQuantidadeDias(quantidadeDias)) {
    alert(
      `Quantidade de dias inválida. Insira um valor entre 1 e ${maxDiasHospedagem}.`
    );
    reservarQuarto();
    return;
  }

  const nomeHospede = prompt("Qual o nome do Hóspede ?");
  const numeroQuarto = parseInt(
    prompt("Qual o quarto para a reserva? (1 - 20)?")
  );

  if (numeroQuarto < 1 || numeroQuarto > numeroQuartos) {
    alert("Número de quarto inválido. Insira um número entre 1 e 20.");
    reservarQuarto();
    return;
  }

  const quartoLivre = true;

  if (!quartoLivre) {
    alert("Quarto já está ocupado. Escolha outro quarto.");
    reservarQuarto();
    return;
  }

  const valorTotal = valorDiaria * quantidadeDias;
  const confirmacao = prompt(
    `${nomeHospede}, você confirma a hospedagem para ${nomeHospede} por ${quantidadeDias} dias para o quarto
     ${numeroQuarto} por R$${valorTotal.toFixed(2)}? (S/N)`
  );

  if (confirmacao.toUpperCase() === "S") {
    alert(`${nomeHospede}, reserva efetuada para ${nomeHospede}.`);
  } else {
    alert("Reserva cancelada. Volte ao menu inicial.");
  }
}

function opcao() {
  reservarQuarto();
}

function validarValorDiaria(valor) {
  return valor >= valorDiariaMinimo && valor <= valorDiariaMaximo;
}

function calcularValorDiaria(idade) {
  const valorDiariaPadrao = parseFloat(
    prompt("Qual o valor padrão da diária?")
  );

  if (!validarValorDiaria(valorDiariaPadrao)) {
    alert("Valor inválido. Insira um valor positivo para a diária.");
    return calcularValorDiaria(idade);
  }

  if (idade < 6) {
    alert("Gratuidade concedida para hóspedes com menos de 6 anos.");
    return 0;
  } else if (idade >= 60) {
    alert("Hóspedes com mais de 60 anos pagam meia diária.");
    return valorDiariaPadrao / 2;
  } else {
    return valorDiariaPadrao;
  }
}

function cadastrarHospedes() {
  let totalGratuidades = 0;
  let totalMeiasHospedagens = 0;
  let valorTotal = 0;
  const valorDiariaPadrao = 0;

  while (true) {
    const nomeHospede = prompt(
      "Digite o nome do hóspede (ou digite 'PARE' para encerrar):"
    );

    if (nomeHospede.toUpperCase() === "PARE") {
      break;
    }
    hospedes.push(nomeHospede);

    const idadeHospede = parseInt(prompt(`Digite a idade de ${nomeHospede}:`));
    const valorDiariaHospede = calcularValorDiaria(idadeHospede);

    if (valorDiariaHospede === 0) {
      totalGratuidades++;
    } else if (valorDiariaHospede < valorDiariaPadrao) {
      totalMeiasHospedagens++;
    }

    valorTotal += valorDiariaHospede;
  }

  alert(`Quantidade de gratuidades: ${totalGratuidades}`);
  alert(`Quantidade de meias hospedagens: ${totalMeiasHospedagens}`);
  alert(`Valor Total: R$${valorTotal.toFixed(2)}`);
}

function opcao() {
  cadastrarHospedes();
}

const hospede = [];

function procurarHospede(nome) {
  if (hospedes.length >= 15) {
    alert("Máximo de cadastros atingido.");
  } else {
    hospedes.push(nome);
    alert(`Hóspede ${nome} cadastrado com sucesso.`);
  }
}

function pesquisarHospede(nome) {
  const pesquisar = prompt("Qual o hóspede você deseja pesquisar?");
  const encontrado = hospedes.includes(pesquisar);
  console.log(encontrado);
  if (encontrado) {
    alert(`Hóspede ${pesquisar} foi encontrado.`);
  } else {
    alert("Hóspede não encontrado.");
  }
}

function listarHospedes() {
  if (hospedes.lenght === 0) {
    alert("Nenhum hóspede cadastrado.");
  } else {
    let lista = "Lista de hóspedes:\n";
    hospedes.array.forEach((nome, index) => {
      lista += `${index + 1}. ${nome}\n`;
    });
    alert(lista);
  }
}

function opcao() {
  procurarHospede();
}

function verificarAuditorio() {
  const numConvidados = parseInt(
    prompt("Qual o número de convidados para o seu evento?")
  );

  if (numConvidados > 350 || numConvidados < 0) {
    alert("Número de convidados inválido");
  } else if (numConvidados <= 150) {
    alert("Use o auditório Laranja");
    alert("Agora vamos ver a agenda do evento.");
  } else {
    const numeroCadeirasAdicionais = Math.min(70, numConvidados - 150);
    alert(
      `Use o auditório Laranja (inclua mais ${numeroCadeirasAdicionais} cadeiras)`
    );
    alert("Agora vamos ver a agenda do evento.");
  }
}

function verificarDisponibilidade() {
  const diaSemana = prompt("Qual o dia do seu evento?").toLowerCase();
  const hora = parseInt(prompt("Qual a hora do seu evento?"));

  const diasDisponiveis = ["segunda", "terca", "quarta", "quinta", "sexta"];
  if (diasDisponiveis.includes(diaSemana)) {
    if (hora >= 7 && hora <= 23) {
      alert("Auditório disponível");
      const nomeEmpresa = prompt("Qual o nome da empresa?");
      alert(
        `Auditório reservado para ${nomeEmpresa}: ${diaSemana} às ${hora}hs`
      );
    } else {
      alert("Auditório indisponível");
    }
  } else if (diaSemana === "sabado" || diaSemana === "domingo") {
    if (hora >= 7 && hora <= 15) {
      alert("Auditório disponível");
      const nomeEmpresa = prompt("Qual o nome da empresa?");
      alert(
        `Auditório reservado para ${nomeEmpresa}: ${diaSemana} às ${hora}hs`
      );
    } else {
      alert("Auditório indisponível");
    }
  } else {
    alert("Dia da semana inválido");
  }
}

function calcularGarçons() {
  const duracaoEvento = parseInt(prompt("Qual a duração do evento em horas?"));

  const numConvidados = parseInt(
    prompt("Qual o número de convidados para o seu evento?")
  );
  const numGarçons =
    Math.ceil(numConvidados / 12) + Math.ceil(duracaoEvento / 2);
  const custoTotal = numGarçons * 10.5 * duracaoEvento;

  alert(`São necessários ${numGarçons} garçons.`);
  alert(`Custo: R$ ${custoTotal.toFixed(2)}`);
  alert("Agora vamos calcular o custo do buffet do hotel para o evento.");
}

function calcularBuffet() {
  const numConvidados = parseInt(
    prompt("Qual o número de convidados para o seu evento?")
  );

  const litrosCafe = numConvidados * 0.2;
  const litrosAgua = numConvidados * 0.5;
  const numSalgados = numConvidados * 7;

  const custoCafe = litrosCafe * 0.8;
  const custoAgua = litrosAgua * 0.4;
  const custoSalgados = (numSalgados / 100) * 34;
  const custoTotal = custoCafe + custoAgua + custoSalgados;

  alert(`O evento precisará de ${litrosCafe} litros de café,
   ${litrosAgua} litros de água, ${numSalgados} salgados.`);
  alert(`Custo do garçons: R$ ${custoTotal.toFixed(2)}`);
}

function opcao() {
  verificarAuditorio();
}

function compararPreçosCombustivel() {
  const precoAlcoolWayneOil = parseFloat(
    prompt("Qual o valor do álccol no posto Wayne Oil?")
  );
  const precoGasolinaWayneOil = parseFloat(
    prompt("Qual o valor da gasolina no posto Wayne Oil?")
  );
  const precoAlcoolStarkPetrol = parseFloat(
    prompt("Qual o valot do álcool no posto Stark Petrol?")
  );
  const precoGasolinaStarkPetrol = parseFloat(
    prompt("Qual o preço da gasolina no posto StarkPetrol?")
  );

  const tanqueCarro = 42;

  const custoAlcoolWayneOil = tanqueCarro * precoAlcoolWayneOil;
  const custoGasolinaWayneOil = tanqueCarro * precoGasolinaWayneOil;
  const custoAlcoolStarkPetrol = tanqueCarro * precoAlcoolStarkPetrol;
  const custoGasolinaStarkPetrol = tanqueCarro * precoGasolinaStarkPetrol;

  const maisBaratoWayneOil =
    custoAlcoolWayneOil < custoGasolinaWayneOil ? "álcool" : "gasolina";
  const maisBaratoStarkPetrol =
    custoAlcoolStarkPetrol < custoGasolinaStarkPetrol ? "álcool" : "gasolina";

  alert(
    "Custos:\n" +
      "Wayne Oil Álcool: " +
      custoAlcoolWayneOil +
      "\n" +
      "Wayne Oil - Gasolina: " +
      custoGasolinaWayneOil +
      "\n" +
      "Stark Petrol - Álcool: " +
      custoAlcoolStarkPetrol +
      "\n" +
      "StarkPetrol - Gsolina: " +
      custoGasolinaStarkPetrol +
      "\n" +
      "\n" +
      "Mais barato em Wayne Oil: " +
      maisBaratoWayneOil +
      "\n" +
      "Mais barato em Stark Petrol: " +
      maisBaratoStarkPetrol
  );

  let postoMaisBarato;
  if (
    custoAlcoolWayneOil < custoAlcoolStarkPetrol &&
    custoGasolinaWayneOil < custoGasolinaStarkPetrol
  ) {
    postoMaisBarato = "Wayne Oil";
  } else if (
    custoAlcoolStarkPetrol < custoAlcoolWayneOil &&
    custoGasolinaStarkPetrol < custoGasolinaWayneOil
  ) {
    postoMaisBarato = "Stark Petrol";
  } else {
    postoMaisBarato = "ambos têm preços iguais";
  }

  let opcaoMaisBarata;
  if (precoAlcoolWayneOil <= 0.7 * precoGasolinaWayneOil) {
    opcaoMaisBarata = "álcool";
  } else {
    opcaoMaisBarata = "gasolina";
  }

  alert(
    `É mais barato abastecer com ${opcaoMaisBarata} no posto ${postoMaisBarato}.`
  );
}

function opcao() {
  compararPreçosCombustivel();
}

function calcularValorServico() {
  const nomeEmpresa = prompt("Qual o nome da empresa?");
  const ValorPorAparelho = parseFloat(prompt("Qual o valor do aparelho?"));
  const quantidadeAparelhos = parseInt(
    prompt("Qual a quantidade de aparelhos?")
  );
  const percentualDesconto = parseFloat(
    prompt("Qual a porcentagem de desconto?")
  );
  const quantidadeMinimaDesconto = parseInt(
    prompt("Qual o número mínimo de aparelho?")
  );

  let valorTotal = ValorPorAparelho * quantidadeAparelhos;
  let valorDesconto = 0;

  if (quantidadeAparelhos >= quantidadeMinimaDesconto) {
    valorDesconto = (valorTotal * percentualDesconto) / 100;
  }

  valorTotal -= valorDesconto;

  alert(`O serviço de ${nomeEmpresa} custára R$ ${valorTotal.toFixed(2)}`);
  return valorTotal;
}

function main() {
  let menorValor = Infinity;
  let empresaMenorValor = "";

  do {
    const valorServico = calcularValorServico();
    if (valorServico < menorValor) {
      menorValor = valorServico;
      empresaMenorValor = prompt("Qual o nome da empresa?");
    }

    var continuar = prompt("Deseja informar novos dados? (S/n)").toUpperCase();
  } while (continuar === "S");

  alert(
    `O orçamento de menor valor é o de ${empresaMenorValor} por R$ ${menorValor.toFixed(
      2
    )}`
  );
}

function despedida() {
  alert("Muito obrigado e até logo");
}

const btnInicio = document.getElementById("btn-inicio");
btnInicio.addEventListener("click", inicio);
