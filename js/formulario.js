const formulario = document.querySelector('form');

function formularioEnviado(resposta) {
  if(resposta.ok) {
    formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada!</span> Entraremos em contato em até 24h!</p>"
  }else {
    formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio!</span> Você pode enviar diretamente para o nosso email em: contato@afetoempontos.com</p>"
  }
  "gabriel"
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disable = true;
  botao.innerText = 'Enviando...';

  const data = new FormData(formulario);

  fetch('./enviar.php', {
    method: 'POST',
    body: data
  }).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario);