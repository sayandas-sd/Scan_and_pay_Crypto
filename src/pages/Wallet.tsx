import { useEffect, useRef, useState } from "react";
import { Appbar } from "../components/Appbar";
import QRCode from 'qrcode';
import { BrowserMultiFormatReader, Exception, Result } from '@zxing/library';

export const Wallet = () => {
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [scanresult, setScanresult] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [walletQr, setWalletQr] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setName('$ 0.5021 SepoliaETH');
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

    const videoRef = useRef<HTMLVideoElement>(null);


    useEffect(() => {
        const codeReader = new BrowserMultiFormatReader();
        if (videoRef.current) {
            codeReader.decodeFromVideoDevice(null, videoRef.current, (result: Result | null, error: Exception | undefined) => {
                if (result) {
                    setScanresult(result.getText());
                }
                if (error) {
                    console.error(error instanceof Error ? error.message : 'An error occurred');
                }
            });
        }
        return () => codeReader.reset();
    }, []);


    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
        } catch (e) {
            console.error(e);
        }
    };
    

    useEffect(()=>{
      const walletQrCOde = setTimeout(async () => {

              const response = await QRCode.toDataURL('0xA3c5A29ae6c844A4943f2D6c4D49216118E2a1E0');
              setWalletQr(response)
    
      }, 4000);
    })



    return (
        <div>
            <Appbar />
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <div className="h-96 rounded-2xl shadow-md">
                        <div className="text-3xl font-bold flex justify-center mt-5">
                            Balance        
                        </div>
                        <div className="flex justify-center text-2xl font-bold">
                        
                        {name || "Loading..."}
                           
                        </div>
                        <div className="flex justify-center">
                          {walletQr ? (
                                <a href={walletQr} download>
                                    <img src={walletQr} alt="Generated QR" />
                                </a>
                            ): 'loading...'}

                        </div>
                    </div>
                    <div className="shadow-md h-full rounded-2xl flex justify-center items-center flex-col">
                        <div className="mb-3 text-xl font-bold">
                            Scan Your Qr Code
                        </div>
                        <div className="flex justify-center border-4 border-indigo-500/50 ">
                            <video ref={videoRef} style={{ width: '80%' }} />
                        </div>
                    </div>
                    <div className="shadow-md h-96 rounded-3xl">
                        <div className="flex justify-center bg-gray-100 p-5">
                            QR code and wallet address
                            <input 
                                type="text" 
                                onChange={(e) => setText(e.target.value)} 
                            />
                        </div>
                        <div>
                            <Button onClick={generateQrCode} name="Scan and Pay" />
                            
                        </div>
                        <div className="flex justify-center">
                        {imageUrl && (
                                <a href={imageUrl} download>
                                    <img src={imageUrl} alt="Generated QR" />
                                </a>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex justify-center">
                <div className="shadow-md h-40 w-full rounded-2xl mt-5 flex justify-center">
                    <div>
                        <div className="flex justify-center text-xl font-bold">
                            Wallet Address
                        </div>
                                
                        <div className="font-semibold flex justify-center bg-gray-200 p-4 mt-3 rounded-lg">   
                            {scanresult}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ButtonProps {
    onClick: () => void;
    name: string;
}

const Button = ({ onClick, name }: ButtonProps) => {
    return (
        <button onClick={onClick} className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            {name}
        </button>
    );
};


