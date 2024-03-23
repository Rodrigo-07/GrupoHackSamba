// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Contract {
    mapping(address => bool) public users;

    address public owner;
    address public assignee;

    constructor() {
        owner = msg.sender;
    }

    function assignTask(address _assignee) public {
        require(msg.sender == owner, "Only owner can assign task");
        assignee = _assignee;
    }

    function addNewUser(address _user) public {
        require(msg.sender == owner, "Only owner can add new user");
        users[_user] = true;
    }

    function getUser(address _user) public view returns (bool) {
        return users[_user];
    }

    function removeUser(address _user) public {
        require(msg.sender == owner, "Only owner can remove user");
        users[_user] = false;
    }
}
