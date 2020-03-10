const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let winner = record.find( function(s) { 
    return s.result === "W" 
  })
  return winner.year
  
}
