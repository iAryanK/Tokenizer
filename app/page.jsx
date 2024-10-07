"use client";

// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import TokenLaunchpad from '../components/TokenLaunchpad';
import Link from 'next/link';

export default function Home() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="z-10 flex items-center justify-center min-h-screen flex-col gap-2">
            <div className='flex gap-2'>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>

            <TokenLaunchpad />

            <p className='text-white text-xs pt-10 sm:pt-2 tracking-wide font-mono'>Airdrop yourself free solana on <Link href="https://lamportal.vercel.app" className='text-white bg-green-950 p-[2px] rounded-[4px] border border-zinc-500 hover:bg-green-900'>Lamportal</Link></p>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
