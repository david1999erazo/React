import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/NavBar"
import { MarvelPage } from "../pages/MarvelPage"
import { DcPage } from "../pages/DcPage"
import { SearchPage } from "../pages/SearchPage"
import { HeroPage } from "../pages/HeroPage"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar></Navbar>
        <div className="container">
            <Routes>
                <Route path="/marvel" element={<MarvelPage />}></Route>
                <Route path="/dc" element={<DcPage />}></Route>
                <Route path="/search" element={<SearchPage />}></Route>
                <Route path="/hero" element={<HeroPage />}></Route>
                

                <Route path="/" element={<Navigate to={"/marvel"} />}></Route>
            </Routes>
        </div>
        </>
    )

}