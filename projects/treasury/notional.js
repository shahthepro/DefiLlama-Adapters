const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0x086b4ecd75c494dd36641195e89c25373e06d7cb";
const treasury2 = "0x22341fb5d92d3d801144aa5a925f401a91418a05"
const note = "0xCFEAead4947f0705A14ec42aC3D44129E1Ef3eD5"

module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',//USDC
     ],
    owners: [treasury],
    ownTokens: [note],
  },
})