import { Routes, Route, Link } from "react-router-dom"

import Account from './pages/account'
import Footer from "./components/footer";
import Home from './pages'
import NavBar from './components/header';


export function App() {

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <NavBar />

            <div className="main">
            {/* Define all the routes */}
                <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/account" element={<Account />}></Route>
                </Routes>
            </div>

            <Footer />
        </div>
    )
}

export default App;