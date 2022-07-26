import { Route, Routes } from "react-router-dom";

import { Navbar } from "../components/ui/NavBar"
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from "../components/hero/HeroScreen";


// El DashboardRoutes nos sirve para consifurar las rutas que estan en nuestra Navbar de manera separada
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<MarvelScreen />} />
                
                <Route path="marvel" element={<MarvelScreen />} />
                
                <Route path="dc" element={<DcScreen />} />

                <Route path="hero/:heroId" element={<HeroScreen />} />

                
                <Route path="search" element={<SearchScreen />} />


            </Routes>


        </>
    )
}
