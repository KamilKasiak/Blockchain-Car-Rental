const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("CarChain", function () {
  let carChainFactory;
  let carChain;

  beforeEach(async function () {
    carChainFactory = await ethers.getContractFactory("CarChain");
    carChain = await carChainFactory.deploy();
  });

  it("Contract should start with deposit balance of 0", async function () {
    const currentValue = await carChain.getBalance();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });
});
