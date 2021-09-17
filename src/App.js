import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { buynewlatop, selloldlaptop } from './Redux/ActionCreator';

function App(props) {
  console.log(props.store)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {props.x}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={props.buylaptopforme}>Buy Laptop</button>
        <br />
        <button onClick={props.selllaptopforme}>Sell Laptop</button>
      </header>
    </div>
  );
}

let mapStateToPropa = (state) => {
  return {
    x: state.noOflaptop
  }
}
let mapDispatchToPropa = (dispatch) => {
  return {
    buylaptopforme: () => { dispatch(buynewlatop())},
    selllaptopforme:()=>{dispatch(selloldlaptop())}
  }
}
export default connect(mapStateToPropa, mapDispatchToPropa)(App);
