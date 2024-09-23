async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy SafeMath Library
    // const SafeMath = await ethers.getContractFactory("SafeMath");
    // const safeMath = await SafeMath.deploy();
    // console.log("Deploying SafeMath...");
    // await safeMath.deployTransaction.wait(); // Wait for the transaction to be mined
    // console.log("SafeMath deployed to:", safeMath);

    // // Deploy ShunaInuLibrary
    // const ShunaInuLibrary = await ethers.getContractFactory("ShunaInuLibrary");
    // const shunaInuLibrary = await ShunaInuLibrary.deploy();
    // console.log("Deploying ShunaInuLibrary...");
    // // await shunaInuLibrary.deployTransaction.wait(); // Wait for the transaction to be mined
    // console.log("ShunaInuLibrary deployed to:", shunaInuLibrary);

    // // Deploy TransferHelper
    // const IShunaInuFactory = await ethers.getContractFactory("ShunaInuFactory");
    // const IShunaInuFactoryss = await IShunaInuFactory.deploy("0xffD1c64087eb629D13abB48B7fc246a91D70164e","0xffD1c64087eb629D13abB48B7fc246a91D70164e");
    // console.log("Deploying ShunaInuFactory...");
    // // await IShunaInuFactory.deployTransaction.wait(); // Wait for the transaction to be mined
    // console.log("ShunaInuFactory deployed to:", IShunaInuFactoryss);

    // Deploy ShunaRouter contract (the main contract) with linked libraries
    const ShunaRouter = await ethers.getContractFactory("ShunaRouter");
    const shunaRouter = await ShunaRouter.deploy("0xAC5d073b81b0526A965634F0690c85829D316d86","0x4200000000000000000000000000000000000006");
    console.log("Deploying ShunaRouter...");
    // await shunaRouter.deployTransaction.wait(); // Wait for the transaction to be mined
    console.log("ShunaRouter deployed to:", shunaRouter);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
