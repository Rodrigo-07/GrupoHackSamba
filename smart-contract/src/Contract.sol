// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Contract {
    mapping(address => bool) public users;

    address public owner;

    constructor() {
        owner = msg.sender;
    }
}
