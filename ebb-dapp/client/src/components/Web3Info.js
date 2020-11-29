import React from 'react';

export default function Web3Info(props) {
  const { web3Context } = props;
  const { networkId, networkName, providerName } = web3Context;

  return (
    <div>
      <h3> {props.title} </h3>
      <div>Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}</div>
      <div>Provider: {providerName}</div>
    </div>
  );
}
