import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Countriesstats from './component/Countriesstats';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Countriesstats /> 
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
