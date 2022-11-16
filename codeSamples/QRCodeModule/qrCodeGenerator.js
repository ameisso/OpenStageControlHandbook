var QRCode = nativeRequire("qrcode-svg");
var ip = nativeRequire("ip");
app.on('open', (data, client) => {

    setTimeout(showSVG, 500)
})

app.on('close', (data, client) => {

})

function showSVG() {
    var serverIP = 'http://'+ ip.address()+':8080'//warning should get port from current configuration
    var QRSize = 256
    var qrcode = new QRCode({
        content: serverIP,
        width: QRSize,
        height: QRSize,
        color: "#000000",
        background: "#ffffff",
        ecl: "M",
        join: true,
        container: "svg-viewBox"
    });
    
    let interfaceWidgets = []
    let svgCode = qrcode.svg()
    let widget = {
        type: 'svg',
        colorWidget: 'none',
        width: QRSize,
        height: QRSize,
        id: 'ServerQRCode',
        svg: svgCode,
    }
    interfaceWidgets[0] = widget;
    receive('/EDIT', 'root', { widgets: interfaceWidgets })
}
module.exports = {
    oscInFilter: function (data) {
        var { address, args, host, port } = data
        return { address, args, host, port }
    },
    oscOutFilter: function (data) {

        var { address, args, host, port, clientId } = data
        return { address, args, host, port }
    }
}