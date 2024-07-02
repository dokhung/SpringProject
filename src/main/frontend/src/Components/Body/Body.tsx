import Grid2 from "@mui/material/Unstable_Grid2";
import {Input, InputBase} from "@mui/material";

export const Body = () => {
    return (
        <Grid2
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#00FFA3", height: "100vh" }}
        >
            <Grid2 style={{ fontSize: "150px", fontWeight: "bold" }}>
                Logo
            </Grid2>
            <Grid2 style={{ color: "white", fontWeight: "bold", fontSize: "30px",margin:"30px" }}>
                찾는 키보드가 있으세요?
            </Grid2>
            <Grid2 style={{ marginTop: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
                <InputBase
                    placeholder={"키워드를 입력해주세요"}
                    style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #000000",
                        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                        borderRadius: "90px",
                        width: "300px",
                        padding: "10px",
                    }}
                    inputProps={{ style: { textAlign: 'center' } }} // 추가: 텍스트 가운데 정렬
                />
            </Grid2>
            <Grid2 style={{ marginTop: "30px" }}>
                찾기
            </Grid2>
        </Grid2>
    );
};
