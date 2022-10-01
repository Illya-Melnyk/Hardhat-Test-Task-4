const { ethers } = require("hardhat")
const { expect } = require("chai")
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("ERC20 Basic", function() {

        async function deployContract() {

            const [deployer] = await ethers.getSigners()
    
            const ERC20 = await ethers.getContractFactory("ERC20Basic", deployer)
    
            let erc20 = await ERC20.deploy("2022", "0x1d3D54C93358e08A597AE706edD6Ac74d1eF9950")
    
            await erc20.deployed()
    
            return {ERC20, erc20, deployer}
        }

    describe("Passing arguments into constructor while deploying", function(){
        it("Should return timestamp '2022'", async function() {
            const { erc20 } = await loadFixture(deployContract)
    
            expect(await erc20.getTimestamp()).to.be.equal("2022")
        })

        it("Should return personal address '0x1d3D54C93358e08A597AE706edD6Ac74d1eF9950'", async function() {
            const { erc20 } = await loadFixture(deployContract)

            expect(await erc20.getPersonalAddress()).to.be.equal("0x1d3D54C93358e08A597AE706edD6Ac74d1eF9950")
        })

    })
})