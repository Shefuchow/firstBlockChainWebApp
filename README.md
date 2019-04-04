# firstBlockChainApp

## Requirements
1. Node v6+
2. Truffle
3. npm

## Set Up 
1. run ```truffle unbox pet-shop```
	- contracts/: Contains the Solidity source files for our smart contracts. There is an important contract in here called Migrations.sol, which we'll talk about later.
	- migrations/: Truffle uses a migration system to handle smart contract deployments. A migration is an additional special smart contract that keeps track of changes.
	- test/: Contains both JavaScript and Solidity tests for our smart contracts
	- truffle.js: Truffle configuration file
2. Write Smart Contract
3. run ```truffle compile```
4. You've successfully compiled the contracts, now migrate them to blockchain
5. Make a deploy_contracts.js file
6. Before migrating to the Blockchain, we need a blockchain lol, If you haven't already, download Ganache and double click the icon to launch the application. This will generate a blockchain running locally on port 7545.
7. After ganache launch, press quickstart, and run ```truffle migrate```
8. Create a new file called "Testcontract.sol" in /test
9. run ```truffle test``` to test
10. once tests pass, move on to front end work

## UI for Dapp
1. Connect web3.js with built in frontend in app.js file
2. download metamask extension in chrome browser
3. import your accounts from ganache
4. run ```npm run dev```
5. you can see how metamask reacts to when we want to adopt animals, and how that effect our accounts, and writes logs onto our blockchain on ganache