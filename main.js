var GameData = {
  rocks: 0,
  rockPerClick: 1,
  rockPerClickCost: 50,
  rockPerSecond: 0,
  rockPerSecondCost: 100,
  humans: 1,
  humansBusy: 0,
  humansFree: 0,
}

function recollectRock() {
  GameData.rocks += GameData.rockPerClick
   document.getElementById("RocksRecollected").innerHTML = GameData.rocks + " Rocks Recollected"
}

function SecondRock() {
  GameData.rocks += GameData.rockPerSecond
   document.getElementById("RocksRecollected").innerHTML = GameData.rocks + " Rocks Recollected"
}

function buyRockPerClick() {
  if (GameData.rocks >= GameData.rockPerClickCost) {
    GameData.rocks -= GameData.rockPerClickCost
    GameData.rockPerClick += 1
    GameData.rockPerClickCost *= 2
    document.getElementById("RocksRecollected").innerHTML = GameData.rocks + " Rocks Recollected"
    document.getElementById("perClickRockUpgrade").innerHTML = "Send People to Recollect Rocks (" + GameData.rockPerClick + ") (" + GameData.rockPerClickCost + ")"
  }
}

function buyRockPerSecond() {
  if (GameData.rocks >= GameData.rockPerSecondCost) {
    GameData.rocks -= GameData.rockPerSecondCost
    GameData.rockPerSecond += 1
    GameData.rockPerSecondCost *= 2
    document.getElementById("RocksRecollected").innerHTML = GameData.rocks + " Rocks Recollected"
    document.getElementById("perSecondRockUpgrade").innerHTML = "Rock Field (" + GameData.rockPerSecond + ") (" + GameData.rockPerSecondCost + ")"
  }
}

function tab(tab) {
  document.getElementById("RockMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById("others").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
tab("RockMenu")

function Refresh() {
  document.getElementById("RocksRecollected").innerHTML = GameData.rocks + " Rocks Recollected"
  document.getElementById("perSecondRockUpgrade").innerHTML = "Rock Field (" + GameData.rockPerSecond + ") (" + GameData.rockPerSecondCost + ")"
  document.getElementById("perClickRockUpgrade").innerHTML = "Send People to Recollect Rocks (" + GameData.rockPerClick + ") (" + GameData.rockPerClickCost + ")"
}

var GameLoop = window.setInterval(function() {
  SecondRock()
  Refresh()
}, 1000)

var SaveGame = window.setInterval(function() {
  localStorage.setItem("GlobalSave", JSON.stringify(GameData))
}, 15000)

var SaveGame = JSON.parse(localStorage.getItem("GlobalSave"))
if (SaveGame !== null) {
  GameData = SaveGame
}

function reset() {
  localStorage.removeItem("GlobalSave")
  GameData.rocks = 0
  GameData.rockPerClick = 1
  GameData.rockPerClickCost= 50
  GameData.rockPerSecond = 0
  GameData.rockPerSecondCost = 100
}
