module.exports = {


  oscInFilter: function (data) {
    var oscSettings = settings.read('send').toString()
    var targetBackupMachineIP = oscSettings.split(':')[0]
    var targetBackupMachinePort = oscSettings.split(':')[1]
    var { address, args, host, port } = data

    if (address === '/millumin/board/launchedColumn') {
      send(targetBackupMachineIP, targetBackupMachinePort, '/millumin/action/launchColumn', args[0])
      console.log("launched column: " + JSON.stringify(args[0]));
    }
    for (var i = 0; i < 10; i++) {
      var inputAddress = '/millumin/index:' + i + '/media/time'
      var outputAddress = '/millumin/index:' + i + '/media/time'
      if (address === inputAddress) {
        send(targetBackupMachineIP, targetBackupMachinePort, outputAddress, args[0].value)
      }
    }
    return { address, args, host, port }
  },

  oscOutFilter: function (data) {
    return { address, args, host, port }
  }
}
