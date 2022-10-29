import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const AboutUs = () => {
    return (
        <Grid container justifyContent={'center'} alignItems={'center'} sx={{height: '90vh'}}>
            <Grid item container justifyContent={'center'} alignItems={'center'}
                  sx={{p: 5, border: '1px solid black', borderRadius: 2, bgcolor: '#fff'}} xs={8}>
                <Typography variant={'h3'} sx={{mb:4}}>درباره ما</Typography>
                <Typography sx={{textAlign: 'justify', textDecoration: ''}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                    magna aliqua. Proin fermentum leo vel orci porta. Neque viverra justo nec ultrices dui sapien.
                    Malesuada proin
                    libero nunc consequat interdum. Nisi est sit amet facilisis magna etiam tempor orci. Nec sagittis
                    aliquam malesuada
                    bibendum arcu vitae elementum curabitur vitae. Nunc faucibus a pellentesque sit amet porttitor eget
                    dolor. Iaculis
                    at erat pellentesque adipiscing. Sed arcu non odio euismod lacinia at quis risus sed. Mauris rhoncus
                    aenean vel elit
                    scelerisque mauris.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AboutUs;