import logo from "./logo.svg";
import "./App.css";
import Html5QrcodePlugin from './Html5QrcodePlugin'


function App() {
  const onNewScanResult = (decodedText, decodedResult) => {
    alert(decodedText);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <span>Import image from camera</span>
        <input type="file" accept="image/*" capture="environment" />
        <div>
          <h1>Html5Qrcode React example!</h1>
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
