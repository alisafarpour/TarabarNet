import Grid from "@mui/material/Grid";
import * as React from "react";
import {HeaderButton} from "../components/buttons/HeaderButton";
import {HEADER_DATA} from "../../data/header-data";
import Image from "next/image";
import logo from '../../public/logo48.png';
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../themes/globalTheme";


export const Header = () => {

    const pageMatch = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Grid item container justifyContent={'center'} alignItems={'center'}
              sx={{height: '80px', bgcolor: '#fff', boxShadow:'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;' , width: '100%'}}>
            <Grid item container justifyContent={pageMatch ? 'flex-start' : 'space-between'} alignItems={'center'} direction={'row-reverse'}
                  xs={11.3}>

                <Grid item container xs={'auto'} sx={{mr: 10}}>
                    <Image src={logo} width="48px" height="48px" alt={'logo'}/>
                </Grid>

                <Grid item container xs={'auto'} alignItems={'center'} direction={'row-reverse'}>
                    {
                        HEADER_DATA.map((array) => {

                            return (
                                <HeaderButton key={array.title} title={array.title} link={array.link} />
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}