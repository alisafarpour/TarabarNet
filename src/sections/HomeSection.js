import Grid from "@mui/material/Grid";
import * as React from "react";
import {GamesCard} from "../components/GamesCard";
import {Button, Collapse} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectGamesData, refreshData} from "../../features/gameDataSlice";
import {useCallback, useEffect, useState} from "react";

export const HomeSection = () => {

    const dispatch = useDispatch()
    const [showButton, setShowButton] = useState(false)

    const deletedGames = useSelector(selectGamesData).deletedGames
    const gamesMustShowInHome = useSelector(selectGamesData).gamesDataInHomeScreen

    useEffect(() => {

        if (deletedGames.length !== 0) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, [deletedGames])

    const refreshGamesData = useCallback(() => {
        dispatch(refreshData())
    }, [])

    return (
        <Grid container sx={{height: 'auto', p: 5, minHeight:'100vh'}} justifyContent="center" alignItems="flex-start">
            <Grid container justifyContent="space-around" alignItems="flex-start" columns={12}>

                <Collapse in={showButton} sx={{width: '100%'}}>
                    <Grid item container xs={12} justifyContent="flex-end" alignItems="center" sx={{p: 2}}>
                        <Button variant="main" onClick={refreshGamesData}>اضافه شدن موارد حذف شده</Button>
                    </Grid>
                </Collapse>

                {gamesMustShowInHome.map((item) => {
                    return (
                        <GamesCard key={item.value} {...item} data={item}/>
                    )
                })}

            </Grid>
        </Grid>
    )
}