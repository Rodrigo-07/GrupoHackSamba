// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./Base.sol";

contract InstanceContract is Base {
    Base public baseContract;

    constructor() {
        baseContract = new Base();
    }

    struct Permissons {
        address owner;  
        address assignee;
    }

    function getPermissions() public view returns (Permissons memory) {
        return Permissons({
            owner: owner,
            assignee: assignee
        });
    }
    
}
