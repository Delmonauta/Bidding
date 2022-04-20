let yourBid = 85000
let highestBid = 82500


if (yourBid > highestBid && (yourBid/1000) % 1 === 0  || yourBid === 1000 ){
    console.log (`Your bid of ${yourBid} has been accepted`)
    highestBid = yourBid
}
else {
    console.log (' Invalid bid')
}
