---
title: EOS virtual machine design
tags:
- 区块链
- 教程
categories:
- 区块链五分钟
date: 2018-09-03
lang: en
translateDate: 9/30/2023
---

## Today's case

> EOS said it has launched the WASM interpreter to explain the execution of WebAssembly smart contracts, which has passed all tests and is connected to the mainnet and testnet.
> 
> EOS was originally compiled and executed, that is, directly compiled the code into executable binary machine code. The current interpretation execution means that the user gets the original code, and the interpreter will execute the code line by line like a translator.
> 
> The former has the advantage of fast execution, but the disadvantage is that every time the smart contract is updated, the witness's server has to recompile and generate binary machine code. For smart contracts that do not execute much, it is not cost-effective. Explain that execution is the opposite, does not require early compilation, but executes much slower than compilation execution. In addition, Bitcoin and Ethereum use interpretive languages.
> 
> EOS's smart contract language, Web Assembly (wasm), supports both execution methods. Because WebAssembly is similar to java, it generates an intermediate language: bytecode, which can be compiled into machine code and executed, or directly executed using an interpreter. Intermediate languages give WebAssembly flexibility in how it executes.
> 
> EOS also said it introduced WebAssembly
> The interpreter provides an authoritative reference for the results of the smart contract, and when the compilation and execution results of each witness are inconsistent, the interpreter can be used to obtain the reference results. And the interpreter will also backfill the compilation execution, just in case
> Maintain system stability when there is a problem with the WASM compiler.

After reading this article, I have a question. In this article, seeing EOS execute by compiling code into executable binary machine code made me wonder: how can it prevent, first, the execution of malicious code, and second, prevent the malicious appropriation of computing resources.

## EOS Virtual Machine Design 

We know that in order for blockchain to strike a balance in terms of security and flexibility, the design of smart contracts is critical. In Bitcoin, for security considerations, Bitcoin is designed to only execute specified limited instructions, and cannot perform circular operations, Turing incomplete virtual machine, which makes Bitcoin lack flexibility, and Ethereum in order to solve this flexibility problem, designed a fuel currency, will calculate fuel according to the number of executed statements, of course, when the fuel runs out of execution will end.

EOS is still a very trendy blockchain, and obviously there is no readily available material to directly solve my doubts. Therefore, I consulted the source code of EOS and came to the following conclusion: since EOS compiles intermediate code into binary machine code for execution, it cannot directly control the code flow, he uses a more crude scheme, simply put, according to the weight allocation of CPU, pinch seconds, to the end, which also explains why the compilation results mentioned later may be inconsistent. Because first, your machine is different, the final compiled binary code may be different, which is likely to lead to inconsistent execution results, and second, the CPU execution is allocated according to the weight, which will affect the output results of individual transactions due to the different transaction content in the same block, but this scheme does gain efficiency.

Looking at EOS so far, it supports both execution methods, and it is very likely that it will eventually shift to the path of interpretation execution. In addition, although the way of compiling into binary machine code, the execution speed has been greatly improved, but because after compiling into binary code, it is not executed in a virtual machine, it is difficult for the host program to control its process, EOS's practice is to inject a lot of code that checks the time before converting to binary machine code, and the timeout will throw an exception and end, so this will also become an important reason for the decline in machine code speed, and whether the final speed can be faster than the optimized interpretation execution, It's still hard to say.

