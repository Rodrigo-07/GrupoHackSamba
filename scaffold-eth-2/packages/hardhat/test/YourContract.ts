import { expect } from "chai";
import { ethers } from "hardhat";
import { YourContract } from "../typechain-types";

describe("YourContract", function () {
  let yourContract: YourContract;
  let owner: any; // Declare owner variable

  before(async () => {
    [owner] = await ethers.getSigners();
    const yourContractFactory = await ethers.getContractFactory("YourContract");
    yourContract = (await yourContractFactory.deploy()) as YourContract;
    await yourContract.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should add a new contract", async function () {
      const name = "Test Contract";
      const description = "This is a test contract";
      const assignees = [ethers.Wallet.createRandom().address];

      await yourContract.addContract(owner.address, name, description, assignees);
      const contract = await yourContract.contracts(1);

      expect(contract.name).to.equal(name);
      expect(contract.description).to.equal(description);
      expect(contract.assignee[0]).to.equal(assignees[0]);
    });

    it("Should get contracts for an assignee", async function () {
      const assignee = ethers.Wallet.createRandom().address;
      const contracts = await yourContract.getContracts(assignee);

      expect(contracts.length).to.equal(0);
    });

    // Add more tests for other functions in your contract
  });
});
