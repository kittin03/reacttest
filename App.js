import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render() {
    let txt = this.props.txt
    return <h1>{txt}</h1>

      // jsEx
    //return React.createElement('h1', null, 'Hello world 2');
  }
}

// const App = () => <h1>Hello world 3</h1> // stateless function won't have state

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default text"
}

ReactDOM.render(<App cat={5} />,
  document.getElementById('app')
);

//export default App;
