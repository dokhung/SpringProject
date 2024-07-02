import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import {Body} from "../Body/Body";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Menus} from "../Menus/Menus";

export const MainLayout = () => {
    return(
        <Grid2>
            <Header/>
            <Menus/>
            <Body/>
            <Footer/>
        </Grid2>
    )
}