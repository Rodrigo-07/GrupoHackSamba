// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Base {
    mapping(address => bool) public users;

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function addNewUser(address _user) public {
        require(msg.sender == owner, "Only owner can add new user");
        users[_assignee] = true;
    }

    function getUser(address _user) public view returns (bool) {
        return users[_user];
    }

    function removeUser(address _user) public {
        require(msg.sender == owner, "Only owner can remove user");
        users[_user] = false;
    }
}
