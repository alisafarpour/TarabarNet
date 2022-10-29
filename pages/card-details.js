import {useSelector} from "react-redux";
import {selectGamesData} from "../features/gameDataSlice";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import * as React from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../themes/globalTheme";


const cardDetails = () => {

    const selectGameData = useSelector(selectGamesData).selectGameData
    const pageMatch = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Grid container justifyContent={'center'} alignItems={'flex-start'} sx={{minHeight: '80vh', mt: 10}}>
            <Grid item container justifyContent={pageMatch ? 'space-between' : 'center'} alignItems={'center'}
                  sx={{bgcolor: '#fff', p: 4, maxWidth: pageMatch ? 1100 : 'auto', borderRadius: 4, m: 2}}>
                <Grid container justifyContent={'center'} alignItems={'center'}
                      sx={{borderRadius: 2, overflow: 'hidden', maxWidth: 460, cursor: 'pointer'}}
                >
                    <Image src={selectGameData.img} style={{objectFit: 'cover'}} width="460px" height="215px"
                           alt={'logo'}/>
                </Grid>

                <Grid item xs={'auto'} container direction={'column'} justifyContent={'center'} alignItems={'flex-end'}>
                    <Grid container item xs={'auto'} justifyContent={'space-between'} alignItems={'center'}
                          sx={{mt: 1.5}}>
                        <Typography>
                            {selectGameData.name}
                        </Typography>
                        <Typography sx={{mr: 3}}>
                            : اسم
                        </Typography>
                    </Grid>
                    <Grid container item xs={'auto'} justifyContent={'space-between'} alignItems={'center'}
                          sx={{mt: 1.5}}>
                        <Typography>
                            {selectGameData.all_reviews}
                        </Typography>
                        <Typography sx={{mr: 3}}>
                            : امتیاز
                        </Typography>
                    </Grid>
                    <Grid container item xs={'auto'} justifyContent={'space-between'} alignItems={'center'}
                          sx={{mt: 1.5}}>
                        <Typography>
                            {selectGameData.release_date}
                        </Typography>
                        <Typography sx={{mr: 3}}>
                            : تاریخ عرضه
                        </Typography>
                    </Grid>
                    <Grid container item xs={'auto'} justifyContent={'space-between'} alignItems={'center'}
                          sx={{mt: 1.5}}>
                        <Typography>
                            {selectGameData.developer}
                        </Typography>
                        <Typography sx={{mr: 3}}>
                            : شرکت توسعه دهنده
                        </Typography>
                    </Grid>
                    <Grid container item xs={'auto'} justifyContent={'space-between'} alignItems={'center'}
                          sx={{mt: 1.5}}>
                        <Typography variant={'caption'}>
                            <Grid container direction={'row'}>
                                {selectGameData.tags.map((item) => {
                                    return (
                                        <Grid key={item} item container xs={'auto'} justifyContent={'center'} sx={{
                                            mx: 0.5,
                                            borderRadius: 2,
                                            p: 1,
                                            bgcolor: '#C7E3E1',
                                            color: '#414141'
                                        }}>
                                            {item}
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Typography>
                        <Typography sx={{mr: 3}}>
                            : سبک بازی
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default cardDetails