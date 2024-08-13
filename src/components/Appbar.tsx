import { Link, useNavigate } from "react-router-dom";
import { CryptoConnect } from "../pages/Cryptoconnect";
import image from '../assets/shield.png'



export const Appbar = () => {
    const navigate = useNavigate();

    const homeClick = () => {
        navigate("/dashboard");
    }

    const walletClick = ()=>{
        navigate("/wallet");
    }

    const transactionClick = ()=>{
        navigate("/transaction");
    }


    return (
        <nav className="bg-white border-b cursor-pointer">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <Link to="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={image} className="h-12" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold ">caniFi</span>
            </Link>
    
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                    <li>
                        <div className="flex justify-center flex-col hidden lg:block">
                                <Home onClick={homeClick} name="Home" />
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center relative flex-col">
                                <WalletIcon onClick={walletClick} name="Wallet"/>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center flex-col">
                                <TransactIcon onClick={transactionClick} name="Transaction" />
                        </div>
                    </li>   
                    <li>
                        <div className="flex justify-center flex-col">
                            <CryptoConnect />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};





interface Type {
    onClick: ()=>void;
    name: string;
}


const Home = ({onClick, name}: Type) => {
    
    return <div>
        <div className="flex justify-center" onClick={onClick}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mb-1">
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

const TransactIcon = ({onClick, name}: Type) => {
    console.log("wallet render");
    return <div>
       <div className="flex justify-center" onClick={onClick}>
        
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
       </svg>

            <div className="px-2 flex justify-center flex-col">
                {name}
            </div>
        </div>
    </div>
};


