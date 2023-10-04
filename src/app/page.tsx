'use client'
import React from 'react'
import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import {  Transaction, } from '@solana/web3.js';
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from '@solana/web3.js';
import SolanaWalletApp from './components/solwalletapp';

const page = () => {

  const { publicKey, sendTransaction , signTransaction } = useWallet();

  console.log("key =>? ?" , publicKey?.toBase58() , );
  return (
    <div>
      Hello1!!
      <WalletMultiButton>

      </WalletMultiButton>
     < SolanaWalletApp ></SolanaWalletApp>

    </div>
  )
}

export default page
