import {Dialog, Grid} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Login} from "../Login/Login";

export const Header = () => {
    const navigate = useNavigate();

    const ReturnHome = () => {
        navigate("/");
    }
    const [OpenLoginDialog, SetOpenLoginDialog] = useState(false);
    const HandleOpenLoginDialog = () => {
        SetOpenLoginDialog(true);
    }
    const HandleCloseLoginDialog = () => {
        SetOpenLoginDialog(false);
    }
    return(
        <header style={{backgroundColor:"#00FFE0", padding:"20px", display: "flex", justifyContent: "space-between"}}>
            <div style={{fontWeight:"bold", alignContent:"center"}}>
                Help
            </div>
            <div style={{fontWeight:"bold", fontSize:"50px"}} onClick={ReturnHome}>
                Logo
            </div>
            <div style={{ fontWeight: "bold", alignSelf: "center", cursor: "pointer" }} onClick={HandleOpenLoginDialog}>
                Login
            </div>
            <Login StartLogin={OpenLoginDialog} CloseLogin={HandleCloseLoginDialog}/>
        </header>
    )
}