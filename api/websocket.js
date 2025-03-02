const socket = new WebSocket('wss://SEU-APP-VERCEL.vercel.app/api/websocket');

socket.onopen = () => {
  console.log('Conexão WebSocket estabelecida!');
};

socket.onmessage = (event) => {
  console.log('Mensagem recebida:', event.data);
  // Aqui você vai atualizar o quadro branco com a nova mensagem
};

socket.onclose = () => {
  console.log('Conexão WebSocket fechada');
};

// Enviar uma mensagem para o servidor WebSocket
socket.send('Mensagem de teste');
