import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    FormControl,
    IconButton, InputAdornment, InputLabel, OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import React, { useState } from "react";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import { LoginAxios } from "../../Axios/Axios";

interface LoginProps {
    StartLogin: boolean;
    CloseLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ StartLogin, CloseLogin }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const LoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const LoginDatas = { id, password };
            const data = await LoginAxios(LoginDatas);
            console.log("data: ", data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Dialog open={StartLogin} onClose={CloseLogin}>
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                    Login
                </Typography>
                <IconButton sx={{ color: "black" }} onClick={CloseLogin}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <form onSubmit={LoginSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField
                        sx={{ m: 1, width: '25ch' }}
                        id="filled-basic"
                        label="ID"
                        variant="outlined"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button type="submit">OK</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};
