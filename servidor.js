const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => {
    const address = server.address();
    console.log(`Servidor   
 UDP ouvindo em ${address.address}:${address.port}`);
});

server.on('message', (msg, rinfo) => {
    console.log(`Mensagem recebida de ${rinfo.address}:${rinfo.port}: ${msg}`);
    server.send('Mensagem recebida!', rinfo.port, rinfo.address);
});

server.bind(41234); // Escolha uma porta