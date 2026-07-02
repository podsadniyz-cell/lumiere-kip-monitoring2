const http = require('http');

const server = http.createServer((req, res) => {
    // Устанавливаем заголовки для работы с сайтом
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/api/sensors') {
        const sensors = [
            { id: 1, name: 'Термодатчик', value: 75.2 },
            { id: 2, name: 'Манометр', value: 2.1 }
        ];
        res.end(JSON.stringify(sensors));
    } else {
        res.end(JSON.stringify({ message: "Сервер работает!" }));
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});