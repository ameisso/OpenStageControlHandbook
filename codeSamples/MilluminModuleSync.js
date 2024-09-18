module.exports = {


  oscInFilter: function (data) {
    ///////////////////////////////////////////
    // CHANGE THE FOLLOWING 
    ///////////////////////////////////////////
    var targetBackupMachineIP = "192.168.2.117"
    var targetBackupMachinePort = 5000
    ///////////////////////////////////////////
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
