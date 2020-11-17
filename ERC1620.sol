pragma solidity >=0.4.22 <0.7.0;

/**
* eip: 1620
* title: ERC-1620 Money Streaming
* author: Paul Razvan Berg (@PaulRBerg) <paul@sablier.finance>
* discussions-to: https://github.com/ethereum/EIPs/issues/1620
 */
 
 import "github.com/starkware-libs/veedo/blob/master/contracts/BeaconContract.sol";

contract Beacon{
    function getLatestRandomness()external view returns(uint256,bytes32){}
    
}
 
contract ERC1620 {

    address public BeaconContractAddress=0x79474439753C7c70011C3b00e06e559378bAD040;

    struct Stream {
    address sender;
    address recipient;
    address tokenAddress;
    uint256 balance;
    Timeframe timeframe;
    Rate rate;
  }
  
  struct Timeframe {
    uint256 start;
    uint256 stop;
 }
 
 struct Rate {
  uint256 payment;
  uint256 interval;
}

    /**
     * @dev Returns available funds for the given stream id and address.
     * 
     */
     
    function balanceOf(uint256 _streamId, address _addr);

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function getStream(uint256 _streamId) 
      returns (address sender, 
        address recipient, 
        address tokenAddress, 
        uint256 balance, 
        uint256 startBlock, 
        uint256 stopBlock, 
        uint256 payment, 
        uint256 interval);
        
     function create(address _recipient, 
        address _tokenAddress, 
        uint256 _startBlock, 
        uint256 _stopBlock, 
        uint256 _payment, 
        uint256 _interval);
        
     function withdraw(uint256 _streamId, uint256 _funds);
}
