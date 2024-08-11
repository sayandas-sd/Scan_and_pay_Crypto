import { Appbar } from "../components/Appbar"

export const Wallet = () => {

    return ( 
        <div>
            <Appbar />
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mt-4 ">
                    <div className="h-96 rounded-3xl shadow-md">
                            <div className="text-3xl font-bold flex justify-center mt-5">
                                Balance
                            </div>
                            <div className="flex justify-center">
                                wallet balance
                            </div>
                    </div>
                    <div className="shadow- h-full rounded-2xl flex justify-center items-center flex-col">
                        <div className="flex justify-center rounded-2xl bg-blue-800 hover:bg-blue-700 text-white font-medium p-3 mt-64">
                            <Button />
                        </div>
                    </div>
                    <div className="shadow-md h-96 rounded-3xl">
                        <div className="flex justify-center bg-gray-100 p-5">
                            Qr code and wallet address
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


const Button = ()=>{
    return <div>
        <button>
            Scan and Pay
        </button>
    </div>
}