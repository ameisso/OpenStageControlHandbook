var clients = []

var backupMachineIP = '127.0.0.1';
var backupMachinePort = '1234';

app.on('open', (data, client) => {
    if (!clients.includes(client.id)) clients.push(client.id)
})

app.on('close', (data, client) => {
    if (clients.includes(client.id)) clients.splice(clients.indexOf(client.id))
})
module.exports = {
    oscInFilter: function (data) {

        var { address, args, host, port } = data

        if (address === '/millumin/board/launchedColumn') {
            console.log(args);
            send(backupMachineIP, backupMachinePort, '/millumin/action/launchColumn', args[0].value);
        }
        return { address, args, host, port }
    },
    oscOutFilter: function (data) {

        var { address, args, host, port, clientId } = data
        return { address, args, host, port }
    }
}