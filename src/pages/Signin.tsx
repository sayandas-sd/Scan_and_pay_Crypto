import { DesignArt } from "../components/DesignArt"
import { Login } from "../components/Login"

export const Signin = ()=>{
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Login type="signin"/>
            </div>
            <div className="hidden lg:block">
                <DesignArt type="signin"/>
            </div>
        </div>
    </div>
}