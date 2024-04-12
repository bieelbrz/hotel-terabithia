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
      `Escolha uma opção:\n1. Reservar quarto\n2. Cadastrar Hóspede\n3. Pesquisar Hóspede\n4. Verificar Auditório\n5. Sair`
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
      menuPrincipal();
    case 5:
      menuPrincipal();
    default:
      alert("Opção inválida. Tente novamente.");
      menuPrincipal;
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
    `${nomeHospede}, você confirma a hospedagem para ${nomeHospede} por ${quantidadeDias} dias para o quarto ${numeroQuarto} por R$${valorTotal.toFixed(
      2
    )}? (S/N)`
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
  if (hospedes.lenght >= 15) {
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
  const numeroConvidados = parseInt(prompt("Digite o número de convidados."));
  if (numeroConvidados > 350 || numeroConvidados < 0) {
    alert("Números de convidados inválido");
  } else if (numeroConvidados <= 150) {
    const capacidadeLaranja = 150;
    const cadeirasAdicionais = Math.max(
      0,
      numeroConvidados - capacidadeLaranja
    );
    let escolherDia = prompt("Escolha o dia para reservar o auditório");
    let escolherHora = prompt("Escolha o horário da reserva do auditório");
    verificarDisponibilidade(escolherDia, escolherHora);
    alert(
      `Use o auditório Laranja (inclua mais ${cadeirasAdicionais} cadeiras`
    );
  } else {
    alert("Use o autidório Colorado");
    let escolherDia = prompt("Escolha o dia para reservar o auditório");
    let escolherHora = prompt("Escolha o horário da reserva do auditório");
    verificarDisponibilidade(escolherDia, escolherHora);
  }
}

function verificarDisponibilidade(dia, hora) {
  const diasSemana = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
  ];
  const dayIndex = diasSemana.indexOf(dia.toLowerCase());
  if (
    dayIndex === -1 ||
    hora < 7 ||
    (hora > 23 && dayIndex !== 6) ||
    (hora > 15 && dayIndex === 6)
  ) {
    alert("Auditório Indisponível");
  } else {
    const nomeEmpresa = prompt("Qual o nome da empresa?");
    alert(
      "Auditório reservado para " +
        nomeEmpresa +
        ": " +
        dia +
        " às " +
        hora +
        " hs"
    );
  }
}

function calcularGarcons(numeroHospedes, horarioEvento) {
  const numeroGarcons =
    Math.ceil(numeroHospedes / 12) + Math.ceil(horarioEvento / 2);
  const custo = numeroGarcons * horarioEvento * 10.5;
  alert(
    "Serão necessários " +
      numeroGarcons +
      " garçons. \nCusto: R$" +
      custo.toFixed(2)
  );
}

function calcularComida(numeroGarcons) {
  const cafe = numeroGarcons * 0.2;
  const agua = numeroGarcons * 0.5;
  const salgados = numeroGarcons * 7;
  const custoCafe = cafe * 0.8;
  const custoAgua = agua * 0.4;
  const custoSalgados = (salgados / 100) * 34;
  alert(
    "O evento precisára de " +
      cafe +
      "litros de café, " +
      agua +
      " litros de água e " +
      salgados +
      "salgados.\nCusto do café: R$ " +
      custoCafe.toFixed(2) +
      "\nCusto da àgua: R$ " +
      custoAgua.toFixed(2) +
      "\nCusto dos salgados: R$ " +
      custoSalgados.toFixed(2)
  );
}

function opcao() {
  verificarAuditorio();
}

const btnInicio = document.getElementById("btn-inicio");
btnInicio.addEventListener("click", inicio);
