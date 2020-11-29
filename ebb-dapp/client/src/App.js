import React from 'react';
import './App.css';
import Web3Info from './components/Web3Info.js';

import { useWeb3 } from '@openzeppelin/network/react';

const infuraProjectId = '95202223388e49f48b423ea50a70e336';

function App() {

const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);

  return (
    <div className="App">
      <div>
        <h1>OpenZeppelin Network.js</h1>
        <Web3Info title="Web3 Info" web3Context={web3Context} />
      </div>
    </div>
  );

}

export default App;
