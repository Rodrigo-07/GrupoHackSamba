// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./RealContract.sol";
import "./InstanceContract"

contract AssiginedContract is RealContract {
    RealContract public realContract;

    Permissons public permissons;

    constructor() {
        realContract = new RealContract();
    }
    error AssigneeNotFound();

    function createRelationships(address _owner,address[] memory _assignees,bool _all) public {
        if(_assignees.lenght==0){
            revert AssigneeNotFound();
        } else {
            if(_all){

            } else {

            }
        }
        realContract = RealContract(_contract);
    }

    funtion createRelationships(address _owner, address memory _assigned) public {
        _owner = realContract.owner();

    }

    function getContract() public view returns (RealContract) {
        return realContract;
    }  
}