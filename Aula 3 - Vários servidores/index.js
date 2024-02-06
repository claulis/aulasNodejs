const http = require('http');
const fs = require('fs');

// Array de portas para os servidores
const ports = [3000, 3001, 3002];

// Função para criar um servidor em uma porta específica
function createServer(port) {
    const server = http.createServer((req, res) => {
        // Lendo o arquivo HTML correspondente à porta
        const htmlFile = `pagina_${port}.html`;
        
        fs.readFile(htmlFile, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(`Erro ao ler arquivo HTML ${htmlFile}`);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    });

    server.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}/`);
    });
}

// Criar servidores para cada porta na lista
ports.forEach(port => {
    createServer(port);
});
