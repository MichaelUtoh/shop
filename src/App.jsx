import { Routes, Route, Link } from "react-router-dom"

import Account from './pages/account'
import Home from './pages'
import Auth from "./components/login";


export function App() {

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            {/* <NavBar /> */}

            <div className="main">
                <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/account" element={<Account />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                </Routes>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default App;