"use client";

import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { MINT_SIZE, TOKEN_PROGRAM_ID, createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint } from "@solana/spl-token"

export default function TokenLaunchpad() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function createToken() {
        console.log('Creating token...');
    }

    return <div className="h-96 w-80 max-sm:w-[22rem] bg-white text-black shadow-2xl rounded-xl relative flex flex-col items-center">
        <h1 className="py-2 font-bold text-xl font-mono bg-purple-700 w-full text-center rounded-t-xl text-white">Solana Token Launchpad</h1>

        <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
            <input className='p-2 border border-slate-500 rounded-lg' type='text' placeholder='Name'></input>
            <input className='p-2 border border-slate-500 rounded-lg' type='text' placeholder='Symbol'></input>
            <input className='p-2 border border-slate-500 rounded-lg' type='text' placeholder='Image URL'></input>
            <input className='p-2 border border-slate-500 rounded-lg' type='text' placeholder='Initial Supply'></input>
            <button onClick={createToken} className="bg-purple-700 text-white p-2 rounded-br-md rounded-sm rounded-tl-md text-sm shadow-md font-semibold tracking-wide w-48">Create a token</button>
        </div>


        <TokenizerBadge />
    </div>
}

export const TokenizerBadge = () => {
    return (
        <div className="absolute max-sm:-bottom-7 text-center text-white max-sm:rounded-b-sm tracking-wide uppercase font-mono p-1 bg-amber-500 text-sm max-sm:left-5 sm:bottom-20 sm:rotate-90 sm:rounded-t-sm sm:-right-14">
            Tokenizer
        </div>
    );
};