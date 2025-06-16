import { Navigate, Route, Routes} from 'react-router-dom'
import { MarvelPage } from '../pages/MarvelPage'
import { DcPage } from '../pages/DcPage'
import { LoginPage } from '../../auth/pages/LoginPage'
import { Navbar } from '../../ui/components/NavBar'


export const AppRouter = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/marvel" element={<MarvelPage/>}></Route>
                <Route path="/dc" element={<DcPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                
                <Route path="/" element={<Navigate to={"/marvel"}/>}></Route>
            </Routes>
        </>
    )
}