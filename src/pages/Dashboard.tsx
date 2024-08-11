import { Appbar } from "../components/Appbar"
import { LandingPage } from "../components/LandingPage"


export const Dashboard = ()=> {
    return (
    <div>
        <Appbar />
        <div className="mt-4">
            <LandingPage />
        </div>
    </div>
    );
};