var RockData = {
  rocks: 0,
  rockPerClick: 1,
  rockPerClickCost: 50,
  rockPerSecond: 0,
  rockPerSecondCost: 100
}

function recollectRock() {
  RockData.rocks += RockData.rockPerClick
   document.getElementById("RocksRecollected").innerHTML = RockData.rocks + " Rocks Recollected"
}

function SecondRock() {
  RockData.rocks += RockData.rockPerSecond
   document.getElementById("RocksRecollected").innerHTML = RockData.rocks + " Rocks Recollected"
}

function buyRockPerClick() {
  if (RockData.rocks >= RockData.rockPerClickCost) {
    RockData.rocks -= RockData.rockPerClickCost
    RockData.rockPerClick += 1
    RockData.rockPerClickCost *= 2
    document.getElementById("RocksRecollected").innerHTML = RockData.rocks + " Rocks Recollected"
    document.getElementById("perClickRockUpgrade").innerHTML = "Send People to Recollect Rocks (" + RockData.rockPerClick + ") (" + RockData.rockPerClickCost + ")"
  }
}

function buyRockPerSecond() {
  if (RockData.rocks >= RockData.rockPerSecondCost) {
    RockData.rocks -= RockData.rockPerSecondCost
    RockData.rockPerSecond += 1
    RockData.rockPerSecondCost *= 2
    document.getElementById("RocksRecollected").innerHTML = RockData.rocks + " Rocks Recollected"
    document.getElementById("perSecondRockUpgrade").innerHTML = "Rock Field (" + RockData.rockPerSecond + ") (" + RockData.rockPerSecondCost + ")"
  }
}

var GameLoop = window.setInterval(function() {
  SecondRock()
}, 1000)
