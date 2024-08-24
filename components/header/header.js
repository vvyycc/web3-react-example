import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { injected } from "../wallet/connectors";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { active, account, activate, deactivate } = useWeb3React();


  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, [activate]);

  return (
    <header className="bg-flow-gray px-5 py-3 flex justify-between items-center">
      <Image src={logo} alt="FlowFT Logo" width={120} height={60} className="cursor-pointer" />

      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-white hover:text-flow-blue">Home </Link>
        <Link href="/voting" className="text-white hover:text-flow-blue">Voting</Link>
        <Link href="/marketplace" className="text-white hover:text-flow-blue">Marketplace </Link>
        <Link href="/mint" className="text-white hover:text-flow-blue">Mint NFT </Link>
        <Link href="/gallery" className="text-white hover:text-flow-blue">My Gallery </Link>
      </div>

      <div className="flex items-center">
        {active ? (
          <span className="text-white ml-4 mr-4">
            Connected with <b>{account}</b>
          </span>
        ) : null}
        <button
          onClick={active ? disconnect : connect}
          className="py-2 px-4 text-lg font-bold text-white bg-flow-green rounded-lg hover:bg-flow-blue"
        >
          {active ? "Disconnect" : "Connect to MetaMask"}
        </button>
      </div>
        {/* mobile part */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-flow-dark w-full md:w-auto p-5 flex flex-col items-end md:hidden">
          <Link href="/" className="text-white hover:text-flow-blue">Home</Link>
          <Link href="/voting" className="text-white hover:text-flow-blue">Voting</Link>
          <Link href="/marketplace" className="text-white hover:text-flow-blue">Marketplace</Link>
          <Link href="/mint" className="text-white hover:text-flow-blue">Mint NFT</Link>
          <Link href="/gallery" className="text-white hover:text-flow-blue">My Gallery</Link>
        </div>
      )}
    </header>

    // <div className="flex items-center justify-between bg-pink-500 p-4 z-10 opacity-90">
    //   <div className="text-2xl font-bold  opacity-100">Flow NFT </div>
    //   <div className="flex items-center">
    //   {active && (
    //       <span className="ml-4 mr-4 opacity-100">
    //         Connected with <b>{account}</b>
    //       </span>
    //     )}
    //     <button
    //       onClick={active ? disconnect : connect}
    //       className="py-2 px-4 text-lg font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-800 opacity-100"
    //     >
    //       {active ? "Disconnect" : "Connect to MetaMask"}
    //     </button>

    //   </div>
    // </div>
  );
}
