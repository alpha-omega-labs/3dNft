pragma solidity ^0.8.4;

import  "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Mushroom  is ERC1155 {
    constructor() ERC1155("https://storageapi.fleek.co/lucasespinosa28-team-bucket/mushroomNft/metadata/{id}.json") {
   }
    
    function mintRandomMage(uint256 id) public {
       require(id < 256,"choose number between 0 or 255");
       _mint(msg.sender,id,1,"0x000");
    }
}