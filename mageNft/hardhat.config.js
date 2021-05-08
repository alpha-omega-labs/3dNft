require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "rinkeby",
    networks: {
        hardhat: {
        },
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/97c8a7fd43b149d9a7b31ffd4894dfd9",
            accounts: ["d25b6f3446b1cc06848e1680856e48fb71198c8e5c720ead58a9857b1e647572"]
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.7.3"
            },
            {
                version: "0.8.0",
            }
        ]
    }
}
