var RockData = {
  rocks: 0,
  rockPerClick: 1,
  rockPerClickCost: 50
}

function recollectRock() {
  RockData.rocks += RockData.rockPerClick
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
