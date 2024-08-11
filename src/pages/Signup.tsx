import { DesignArt } from "../components/DesignArt"
import { Login } from "../components/Login"

export const Signup = ()=>{
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Login type="signup"/>
            </div>
            <div className="hidden lg:block">
                <DesignArt type="signup"/>
            </div>
        </div>
    </div>
}