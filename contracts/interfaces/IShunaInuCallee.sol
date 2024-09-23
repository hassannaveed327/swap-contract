pragma solidity ^0.8.27;
// SPDX-License-Identifier: MIT

interface IShunaInuCallee {
    function ShunaInuCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}