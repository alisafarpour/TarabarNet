import Grid from "@mui/material/Grid";
import {Header} from "./Header";

export const Layout = (props) => {
    return (
        <Grid item container sx={{bgcolor:'#F6F6F6'}}>
            <Header/>
            {props.children}
        </Grid>
    )
}