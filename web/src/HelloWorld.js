import React, { Component } from 'react';
import './HelloWorld.css';
import Matic from '@maticnetwork/maticjs'
import Web3 from "web3"; // uses latest 1.x.x version

const HDWalletProvider = require('@truffle/hdwallet-provider')


class HelloWorld extends Component {
    constructor (props) {
        super (props);
     
        
    }
   
 

deployedContract()
{
  const contractAddress = "0x5490d89a1c1dec6128cadcc0e612475c63feec9bf8ca790e7a1ad014c6cc17d3";

// Copied from remix ide
const contractAbi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "streamId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "confirmer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newTokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newStopBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPayment",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newInterval",
        "type": "uint256"
      }
    ],
    "name": "ConfirmUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "streamId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "startBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "stopBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "payment",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "interval",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "deposit",
        "type": "uint256"
      }
    ],
    "name": "CreateStream",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "streamId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "startBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "stopBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "payment",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "interval",
        "type": "uint256"
      }
    ],
    "name": "CreateStream",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "streamId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newTokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newStopBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPayment",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newInterval",
        "type": "uint256"
      }
    ],
    "name": "ExecuteUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "streamId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "senderAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "recipientAmount",
        "type": "uint256"
      }
    ],
    "name": "RedeemStream",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "streamId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "revoker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newTokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newStopBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPayment",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newInterval",
        "type": "uint256"
      }
    ],
    "name": "RevokeUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "streamId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "WithdrawFromStream",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "BeaconContractAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setBeaconContractAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "generateRandomNumber",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_streamId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_streamId",
        "type": "uint256"
      }
    ],
    "name": "getStream",
    "outputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "stopBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "payment",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "interval",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_streamId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "getUpdate",
    "outputs": [
      {
        "internalType": "bool",
        "name": "active",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_startBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_stopBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_payment",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_interval",
        "type": "uint256"
      }
    ],
    "name": "createStream",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_streamId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawFromStream",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_streamId",
        "type": "uint256"
      }
    ],
    "name": "redeemStream",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_streamId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_stopBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_payment",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_interval",
        "type": "uint256"
      }
    ],
    "name": "confirmUpdate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_streamId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_stopBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_payment",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_interval",
        "type": "uint256"
      }
    ],
    "name": "revokeUpdate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
/*
const web3Provider = new Web3.providers.HttpProvider(
  "https://mainnet.infura.io/v3/dc7b8f76612a430db6356b86a49a35f3"
);
*/
const web3 = new Web3.providers.HttpProvider("https://rpc-mainnet.maticvigil.com/");
try {
  const contract = new web3.eth.Contract(contractAbi, contractAddress);
  this.setState({ contract });
} catch (error) {
  console.log("Could not create contract.");
  alert("Contract creation failed.");
}
}

  
    render () {
        return (
            <div className="HelloWorld">
            <br/>
            <button onClick={this.deployedContract}><span role="img" aria-label="Spain">🥘</span> Validate Contract</button>
              </div>
        );
    }
}

/* const HelloWorld = props => {
  return (<div className="HelloWorld">Hello {props.name}!</div>);
}; */

export default HelloWorld;