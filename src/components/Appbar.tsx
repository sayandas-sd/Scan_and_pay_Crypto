import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { Transaction } from "../pages/Transaction";
import { CryptoConnect } from "../pages/CryptoConnect";

export const Appbar = () => {
    const navigate = useNavigate();

    const homeClick = () => {
        navigate("/dashboard");
    }

    const walletClick = ()=>{
        navigate("/wallet");
    }

    
    return (
        <div className="border-b flex justify-evenly items-center md:justify-around p-4 cursor-pointer">
            <div className="flex justify-center flex-col">
                <Logo/>
            </div>
            <div className="flex justify-center flex-col hidden lg:block">
                <Home onClick={homeClick} name="Home" />
            </div>
            <div className="flex justify-center relative flex-col">
                <WalletIcon onClick={walletClick} name="Wallet"/>
            </div>
            <div className="flex justify-center flex-col">
                <Transaction />
            </div>
            <div className="flex justify-center flex-col">
                <CryptoConnect />
            </div>
        </div>
    );
};

interface Type {
    onClick: ()=>void;
    name: string;
}

const Logo = memo(() => {
    return (
        <div>
            logo
        </div>
    );
});


const Home = ({onClick, name}: Type) => {
    console.log("home render");
    return <div>
        <div className="flex justify-center" onClick={onClick}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

            <div className="px-2 flex justify-center flex-col">
                {name}
            </div>
        </div>
    </div>
};



const WalletIcon = ({onClick, name}: Type) => {
    console.log("wallet render");
    return <div>
       <div className="flex justify-center" onClick={onClick}>
        
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
       </svg>
    
            <div className="px-2 flex justify-center flex-col">
                {name}
            </div>
        </div>
    </div>
};
