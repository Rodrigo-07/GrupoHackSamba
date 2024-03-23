// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Contract} from "../src/Contract.sol";

contract CounterTest is Test {
    Contract myContract;

    function setup() public {
        myContract = new Contract();
    }

    function testAssignTask() public {
        contract.assignTask(address(this));
        assertEq(contract.assignee(), address(this));
    }

    function testAddNewUser() public {
        contract.addNewUser(address(this));
        assert(contract.users(address(this)));
    }

    function testRemoveUser() public {
        contract.addNewUser(address(this));
        contract.removeUser(address(this));
        assert(!contract.users(address(this)));
    }
}
