import { useNavigate } from "react-router-dom";
import image1 from '../assets/scanner.png'

export const LandingPage = () => {
    const navigate = useNavigate();

   const handleCick = ()=>{
    navigate("/wallet");
   }
    return (
      <div className="container mx-auto mt-10">
            <div className="font-bold text-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='font-black text-4xl font-mono tracking-wide font-oswald'>
                        <div className="flex justify-start ml-7 mt-24">
                            SCAN TO PAY <br />
                            WITH WALLET <br />
                            QR CODE
                        </div>
                        <div className="mt-14 ml-7 font-normal font-extrabold text-slate-600 text-lg">
                            connect user wallet and then user <br />
                            <span className="bg-blue-200">wallet address</span> will generate <span className="bg-blue-200">QR code</span><br />
                             and then <span>scan</span> this QR Code,and <span className="bg-blue-200">Pay</span><br />
                            through your wallet.
                            <div className="mt-2">
                                    you can see wallet balance in Dashboard<br /> and <span className="bg-blue-200">SCAN QR CODE</span> and <span className="bg-blue-200">Pay</span>.you can<br />
                                    see all transaction in <span>Transaction </span> page.
                            </div>
                        </div>
                        <div className="font-normal text-base mt-14 ml-7 ">
                            <button onClick={handleCick}
                            className="bg-gray-800 hover:bg-gray-600 text-white rounded-2xl p-3">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="bg-red-100 flex justify-center items-center mt-2 flex-col" >
                        <img src={image1} alt="scanner" className="w-full h-full"/>
                    </div>
                    
            </div>    
      </div>
    );
  };
  