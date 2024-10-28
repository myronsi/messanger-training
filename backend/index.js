const express = require('express');
const app = express();
const PORT = 3000;

// Middleware для работы с JSON
app.use(express.json());

// Базовый маршрут
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});