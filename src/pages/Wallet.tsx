import { useEffect, useRef, useState } from "react";
import { Appbar } from "../components/Appbar";
import QRCode from "qrcode";
import { ethers } from "ethers";
import { BrowserMultiFormatReader, Exception, Result } from "@zxing/library";

export const Wallet = () => {
    const [text, setText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [scanresult, setScanresult] = useState<string | null>(null);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [ethBalance, setEthBalance] = useState<string | null>(null);

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const codeReader = new BrowserMultiFormatReader();
        if (videoRef.current) {
            codeReader.decodeFromVideoDevice(
                null,
                videoRef.current,
                (result: Result | null, error: Exception | undefined) => {
                    if (result) {
                        setScanresult(result.getText());
                    }
                    if (error) {
                        console.error(
                            error instanceof Error
                                ? error.message
                                : "An error occurred"
                        );
                    }
                }
            );
        }
        return () => codeReader.reset();
    }, []);

    const connectWallet = async () => {
        try {
            // Request wallet connection
            if (!window.ethereum) throw new Error("No Ethereum wallet found!");
            const provider = new ethers.BrowserProvider(window.ethereum);
    
            // Request account access
            const accounts = await provider.send("eth_requestAccounts", []);
            const address = accounts[0];
            setWalletAddress(address);
    
            // Fetch ETH balance
            const balance = await provider.getBalance(address);
            const balanceInEth = ethers.formatEther(balance);
            setEthBalance(balanceInEth);
        } catch (e) {
            console.error(e);
        }
    };
    
    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <Appbar />
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {/* Balance Component */}
                    <div className="h-96 rounded-2xl shadow-md">
                        <div className="text-3xl font-bold flex justify-center mt-5">
                            Balance
                        </div>
                        <div className="flex justify-center text-2xl font-bold mt-4">
                            {ethBalance ? `${ethBalance} ETH` : "Not Connected"}
                        </div>
                        <div className="flex justify-center mt-3">
                            <Button onClick={connectWallet} name="Connect Wallet" />
                        </div>
                    </div>

                    {/* QR Code Scanner */}
                    <div className="shadow-md h-full rounded-2xl flex justify-center items-center flex-col">
                        <div className="mb-3 text-xl font-bold">Scan Your QR Code</div>
                        <div className="flex justify-center border-4 border-indigo-500/50">
                            <video ref={videoRef} style={{ width: "80%" }} />
                        </div>
                    </div>

                    {/* QR Code Generator */}
                    <div className="shadow-md h-96 rounded-3xl">
                        <div className="flex justify-center bg-gray-100 p-5">
                            <input
                                type="text"
                                onChange={(e) => setText(e.target.value)}
                                className="p-2 border rounded"
                                placeholder="Enter text for QR Code"
                            />
                        </div>
                        <div>
                            <Button onClick={generateQrCode} name="Generate QR Code" />
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

            {/* Wallet Address Display */}
            <div className="container mx-auto flex justify-center">
                <div className="shadow-md h-40 w-full rounded-2xl mt-5 flex justify-center">
                    <div>
                        <div className="flex justify-center text-xl font-bold">
                            Wallet Address
                        </div>
                        <div className="font-semibold flex justify-center bg-gray-200 p-4 mt-3 rounded-lg">
                            {walletAddress || "Not Connected"}
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
        <button
            onClick={onClick}
            className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
            {name}
        </button>
    );
};
