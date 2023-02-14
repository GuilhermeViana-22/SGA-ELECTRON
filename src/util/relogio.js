
  function atualizarRelogio() {
    var agora = new Date(); // Cria um objeto Date com a data e hora atuais
    var hora = agora.getHours(); // Obtém a hora atual (0-23)
    var minuto = agora.getMinutes(); // Obtém o minuto atual (0-59)
    hora = hora < 10 ? "0" + hora : hora; // Adiciona um zero à esquerda se a hora for menor que 10
    minuto = minuto < 10 ? "0" + minuto : minuto; // Adiciona um zero à esquerda se o minuto for menor que 10
    var horaElemento = document.getElementById("hora"); // Seleciona o elemento HTML onde a hora será exibida
    horaElemento.innerHTML = hora + ":" + minuto; // Define o conteúdo do elemento com a hora e minuto formatados
  }
  // Atualiza o relógio a cada minuto
  setInterval(atualizarRelogio, 1000);
