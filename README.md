# firstBlockChainApp
###### Live Demo Here https://test-9f0fc.firebaseapp.com

## Requirements
1. Node v6+
2. Truffle
3. npm
4. Metamask
5. firebase cli

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

## Deployment and Hosting
0. npm install -g firebase-tools
1. run ```firebase login```
2. ```firebase list```
3. ```firebase init``` 
4. ```firebase deploy```
5. ```firebase use --add```
6. ```firebase deploy```

#### Link -> https://test-9f0fc.firebaseapp.com
#### Console -> https://console.firebase.google.com/project/test-9f0fc/overview




