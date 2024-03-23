// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./InstanceContract.sol";

contract RealContract is InstanceContract{
   InstanceContract public instanceC;
    uint indexContract = 0;

    constructor() {
        instance = new instanceC();
    }

    struct contractR{
        uint index;
        bool status;
        string name;
        string description;
        bool[] assigns;
        address owner;
        address[] assignee;
    }

    mapping(address => contractR) public contracts;
    mapping(address => uint[]) public ownersContractList;
    mapping(address => uint[]) public assigneesContractList;
    function addContract(address _owner,address _assignee,string memory _name, string memory _description,address _owner,address[] memory _assignees) public {
        uint _index = indexContract++;
        ownersContractList[_owner].push(_index);
        for (uint i = 0; i < _assignees.length; i++) {
            assigneesContractList[_assignees[i]].push(_index);
        }
        contracts[_index] = contractR(_index, true, _name, _description,new bool[](2),_owner,_assignees);
    }
    function getContracts(address _assignee) public view returns (contractR[] memory) {
        uint[] memory _contracts = assigneesContractList[_assignee];
       contractR[] memory _contractR = new contractR[](_contracts.length);
        for (uint i = 0; i < _contracts.length; i++) {
            _contractR[i] = contracts[_contracts[i]];
        }
        return _contractR; 
    }
    function assignContract(address _assignee,address _owner ) public {
        uint[] memory _contracts = assigneesContractList[_assignee];
        if (_assignee == _owner) {
            for (uint i = 0; i < _contracts.length; i++) {
                if(contracts[_contracts[i]].owner == _assignee){
                    contracts[_contracts[i]].assigns[0] = true;
                    if(contracts[_contracts[i]].assigns[1]){
                        contracts[_contracts[i]].status= false;
                    }
                    
                }
        }
        }else{
            for (uint i = 0; i < _contracts.length; i++) {
                if(contracts[_contracts[i]].owner == _owner){
                    contracts[_contracts[i]].assigns[1] = true;
                    if(contracts[_contracts[i]].assigns[0]){
                        contracts[_contracts[i]].status= false;
                    }
                }
            }
        
        }
}
    function verifyStatus(address _assignee,address _owner) public view returns (bool) {
        uint[] memory _contracts = assigneesContractList[_assignee];
        for (uint i = 0; i < _contracts.length; i++) {
            if(contracts[_contracts[i]].owner == _owner){
                    contracts[_contracts[i]].assigns[1] = true;
                    if(contracts[_contracts[i]].owner == _owner){
                        return contracts[_contracts[i]].status;
                    }
        }
    }
}
}
