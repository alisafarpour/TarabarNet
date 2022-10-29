import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Link from 'next/link'


export const HeaderButton = (props) => {
    return (
        <Link href={props.link}  style={{ textDecoration: 'none' , color:'black'}}>
            <Grid sx={{
                borderRadius: 2,
                cursor: 'pointer',
                p: 1,
                ml: 2,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    background: "#eeeeee",
                },
            }}
            >
                <Typography variant={'caption'} sx={{fontWeight: 'bold'}}>
                    {props.title}
                </Typography>
            </Grid>
        </Link>
    )
}