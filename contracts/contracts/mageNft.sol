pragma solidity ^0.8.4;

import  "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Mage  is ERC1155 {
    constructor() ERC1155("https://storageapi.fleek.co/lucasespinosa28-team-bucket/mageNft/metadata/{id}.json") {
   }
    
    function mintRandomMage(uint256 id) public {
       require(id < 100,"choose number between 0 or 99");
       _mint(msg.sender,id,1,"0x000");
    }
}