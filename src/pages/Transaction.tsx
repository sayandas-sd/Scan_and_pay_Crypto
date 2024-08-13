import { formatEther } from "ethers";
import { useState } from "react"


export const TransactionWallet: React.FC = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [accountBalance, setAccountBalance] = useState<string | null>(null);
    const [connectButton, setConnectButton] = useState<string>("Connect");

    const connectWallet = async (): Promise<void> => {
        if (window.ethereum) {
            try {
                const result: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' });
                accountChangedHandler(result[0]);
                setConnectButton("Connected");
            } catch (error) {
                console.error("Error connecting to wallet:", error);
                alert("Failed to connect to the wallet");
            }
        } else {
            alert("Please install MetaMask!");
        }
    };


    const accountChangedHandler = (newAccount: string): void =>{
        setAccount(newAccount);
        getUserBalance(newAccount.toString());
    }

    
    const getUserBalance = (address: string): void =>{
        window.ethereum!.request
        ({method: 'eth_getBalance',  params: [address, 'latest']})
        .then((balance:string) => {
            setAccountBalance(formatEther(balance));
        })
    }


    //this 
    const chainChangedHandler = ()=>{
        window.location.reload();
    }

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', accountChangedHandler);
        window.ethereum.on('chainChanged', chainChangedHandler);
    }
    

    return <div>
        <div>
            Address: {account}
        </div>
        <div>
            Balance: {accountBalance}
        </div>
        <button onClick={connectWallet} 
        className="bg-blue-100 h-10 w-10">
            {connectButton}
        </button>
    </div>
}

