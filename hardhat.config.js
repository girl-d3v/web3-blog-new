require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
     mumbai: {
       url: "https://rpc-mumbai.matic.today",
       accounts: ["8409e0d6ca72d9c8afc1d8c8c41fbda8cdb75f9470099d1d985ac3fe49c3c414"]
     }, 
     polygon: { 
       url: "https://polygon-mainnet.infura.io/v3/f3bddea3f673492e94fa78d014347398",
       accounts: ["8409e0d6ca72d9c8afc1d8c8c41fbda8cdb75f9470099d1d985ac3fe49c3c414"]
     }
  }
};