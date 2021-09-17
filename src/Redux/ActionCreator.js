//Action Creator

const { SELL_LAPTOP, BUY_LAPTOP } = require("./Constants")

function buynewlatop() {
    return {
        type: BUY_LAPTOP
    }
}
function selloldlaptop() {
    return {
        type: SELL_LAPTOP
    }
}

module.exports = {selloldlaptop,buynewlatop}