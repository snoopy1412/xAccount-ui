'use client';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useChainId } from 'wagmi';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import Account from './account';
import ErrorChain from './error-chain';
interface ConnectButtonProps {
  className?: string;
}
const ConnectButton = ({ className }: ConnectButtonProps) => {
  const { openConnectModal } = useConnectModal();
  const { isConnected, address, chainId } = useAccount();
  const supportChainId = useChainId();

  // console.log('isConnected', isConnected);
  // console.log('address', address);
  // console.log('chainId', chainId);
  // console.log('supportChainId', supportChainId);

  const isSupportedChain = chainId && supportChainId && chainId === supportChainId;

  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-between space-x-[1.25rem] md:w-auto md:justify-center',
        className
      )}
    >
      {!isConnected && openConnectModal ? (
        <Button onClick={openConnectModal}>Connect Wallet</Button>
      ) : null}
      {isConnected && address && isSupportedChain ? <Account localAddress={address} /> : null}
      {isConnected && !isSupportedChain ? <ErrorChain /> : null}
    </div>
  );
};
export default ConnectButton;
