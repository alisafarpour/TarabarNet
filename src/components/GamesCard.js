import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import * as React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useCallback} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {selectGamesData} from "../../features/gameDataSlice";
import {deleteGames, setDeletedGames, setSelectedCardData} from "../../features/gameDataSlice"

export const GamesCard = (props) => {

    const dispatch = useDispatch()

    const gamesMustShowInHome = useSelector(selectGamesData).gamesDataInHomeScreen

    const wrapperDeleteFunction = useCallback((value, data) => {

        dispatch(deleteGames(gamesMustShowInHome.filter(item => item !== data)))
        dispatch(setDeletedGames(data))

    }, [gamesMustShowInHome])

    const saveSelectedCardData = () => {
        dispatch(setSelectedCardData(props.data))
    }

    return (

        <Grid item container justifyContent={'center'} alignItems={'center'} sx={{
            bgcolor: '#fff', p: 2, borderRadius: 2,
            maxWidth: '500px',
            overflow:'hidden',
            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                color: 'white',
                bgcolor: '#0a447e'
            },
            mt: 4,
        }}

        >
            <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{mb: 1, maxWidth: 460}}>

                <Grid container justifyContent={'center'} alignItems={'center'} cy={props.value}
                      sx={{
                          color: 'alert', border: '1px solid #c3c3c3', height: 32, width: 32, borderRadius: 2,
                          transition: 'all 0.2s ease-in-out',
                          bgcolor: 'white',
                          cursor: 'pointer',
                          '&:hover': {
                              color: 'white',
                              bgcolor: 'alert'
                          }
                      }}
                      onClick={() => wrapperDeleteFunction(props.value, props.data)}
                >
                    <HighlightOffIcon/>
                </Grid>

                <Grid item xs={'auto'}>
                    <Typography sx={{fontWeight: 'bold'}}>{props.name}</Typography>
                </Grid>


            </Grid>
            <Link href={'/card-details'} style={{textDecoration: 'none', color: 'black'}}>
                <Grid container justifyContent={'center'}
                      sx={{borderRadius: 2, overflow: 'hidden', maxWidth: 460, cursor: 'pointer',}}
                      onClick={saveSelectedCardData}
                >
                    <Image src={props.img} style={{objectFit: 'cover'}} width="460px" height="215px" alt={`${props.value}`}/>
                </Grid>
            </Link>
        </Grid>

    )
}