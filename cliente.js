const dgram = require('dgram');
const readline = require('readline');

const client = dgram.createSocket('udp4');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout   

});

rl.question('Digite a mensagem a ser enviada: ', (message) => {
    client.send(Buffer.from(message), 41234, 'localhost', (err) => {
        if (err) {
            console.error('Erro ao enviar mensagem:', err);
        } else {
            console.log('Mensagem enviada com sucesso!');
            client.on('message', (msg, rinfo) => {
                console.log(`Servidor respondeu: ${msg}`);
                client.close();
            });
        }
        rl.close();
    });
});