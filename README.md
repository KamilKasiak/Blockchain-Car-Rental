# Car Chain

> Blockchain web application based on smart contracts in solidity.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

- Use power of smart contracts to create decentralized car rental company. You can to rent a car after depositing small amount of eth on contract address. After pick up a car timer will count how long you use care before drop off. You can't rent another car before you drop off this one. You can't withdraw money before you drop off car. After drop off application will calculate due. From now you can pay it whenever you want but before it you can't withdraw rest of your funds or even pick up another car.

## Technologies Used

- Solidity: 0.8.17
- Hardhat: 2.11.2
- Mocha: 10.0.0,
- JavaScript
- Etherscan: 3.1.0
- Solidity-coverage: 0.8.2

## Features

<!-- List the ready features here: -->

- create a contract and assign an immutable owner
- create struct with user data and asign it to erc-20 address
- deposit eth on contract if user is in Renters array
- pick up a car only if deposit is > 0 and user don't have active due or active car rented
- assign picked up car to user
- start count time from block acceptation until drop off a car. Then calcualte a due to pay for rental time
- withdraw is possible only when user have no due or active car rented
- payment to contract for due from deposited amount - not directly from wallet
- geting user infermations with view functions (out of charge)

## Screenshots

![Example screenshot](./img/carPickUp.jpg)
![Example screenshot](./img/carDropOff.jpg)
![Example screenshot](./img/carAfterWithdraw.jpg)

## Setup

npm init
npm inastall
npx hardhat run scripts/deploy.js --network goerli

Make sure to prepare your own .env file based on .env.example.

## Project Status

Project is: _in progress_

<!-- / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why. -->

## Room for Improvement

<!-- Include areas you believe need improvement / could be improved. Also add TODOs for future development. -->

Room for improvement:

- write more tests for contract

To do:

- Implement frontend application based on React and ethersjs

## Contact

Created by [@kamilkasiak] - www.kasiakkamil.com - feel free to contact me!