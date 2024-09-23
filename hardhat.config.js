require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    soneium: {
      url: "https://rpc.minato.soneium.org/",
      accounts: ["046e8fe15d757d93324847c76ae151daf3124ab32ace48a4d6c950521c265cd4"],
      chainId:1946
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
