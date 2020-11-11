# Title
Decentralised Dynamic Stream of Money Minted over Matic Network

# Introduction
- Money streaming represents the idea of continuous payments over a finite period of time. 
- Block Numbers are used as a proxy of time to continuously update balances.
- Block Numbers are indexed by On-chain randomness produced by verified delay functions

# Workflow

- A provider sets up a money streaming contract.
- A prospective payer can interact with the contract and start the stream right away by depositing the funds required for the chosen period.
- The payee is able to withdraw money from the contract based on its ongoing solvency
- payment rate * verified delay function (current block height - starting block height)
- The stream terms (payment rate, length, metadata) can be updated at any time if both parties pledge their signatures.
- The stream can be stopped at any point in time by any party without on-chain consensus.
- If the stream period ended and it was not previously stopped by any party, the payee is entitled to withdraw all the deposited funds.

file:///Users/gokulalex/Desktop/Screen%20Shot%202020-11-11%20at%2012.37.35%20PM.png

# Motivation

This standardised interface aims to change the way we think about long-term financial commitments. Thanks to blockchains, payments need not be sent in chunks (e.g. monthly salaries), as there is much less overhead in paying-as-you-go. Money as a function of time would better align incentives in a host of scenarios.

# Applications

- Salaries
- Subscriptions
- Consultancies
- CDPs
- Rent
- Parking
- Pensions
- Micropayments
- Subscriptions

# Challenges

Block times are a reasonable, trustless proxy for time on the blockchain. Between 2016 and 2018, the Ethereum block time average value hovered around 14 seconds, excluding the last two quarters of 2017. Mathematically speaking, it would be ideal to have a standard deviation as close to 0 as possible, but that is not how things work in the real world.

# Optimisations
