import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('wss://your-websocket-url.com');

client.onopen = () => {
  console.log('WebSocket Client Connected');
};

client.onmessage = (message) => {
  console.log('Received:', message.data);
};

// Экспортируем клиент для использования в других частях приложения
export default client;