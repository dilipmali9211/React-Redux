
//Reducer

const { BUY_LAPTOP, SELL_LAPTOP } = require("./Constants");

let initalstate = {
    noOflaptop: 10
}

const rootreducer = (state = initalstate, action) => {
    switch (action.type) {
        case BUY_LAPTOP:
            return {
                ...state,
                noOflaptop: state.noOflaptop + 1
            }
            break;
        case SELL_LAPTOP:
            return {
                ...state,
                noOflaptop:( state.noOflaptop <1)?  state.noOflaptop: state.noOflaptop - 1
            }
    }
}

module.exports = {rootreducer}