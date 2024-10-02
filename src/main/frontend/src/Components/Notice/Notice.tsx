import Grid2 from "@mui/material/Unstable_Grid2";
import {Paper, Typography} from "@mui/material";

const notices = [
    { title: "경고", content: "공지 보지 말고 키보드 뭐 살지나 보세요" },
    { title: "테스트 공지 2", content: "테스트 내용 2" },
];
export const Notice : React.FC = () => {
    return(
        <div style={{ backgroundColor: "lightskyblue", padding: "20px" }}>
            <Typography variant="h5" align="center" gutterBottom>
                공지사항
            </Typography>
            <Grid2 container spacing={2} justifyContent="center">
                {notices.map((notice, index) => (
                    <Grid2 key={index} xs={12} sm={8}>
                        <Paper style={{ padding: "20px" }}>
                            <Typography variant="h6">{notice.title}</Typography>
                            <Typography variant="body1">{notice.content}</Typography>
                        </Paper>
                    </Grid2>
                ))}
            </Grid2>
        </div>
    )
}