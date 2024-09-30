import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        yellow: {
            main: '#ffc300',
            light: '#ffd000',
            dark: '#ffb700',
            contrastText: '#242105',
        },
    },
});

export default function CalculatorButtons({ toggleBtn, handleClick }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={3}>
                        <Grid size={3.5}>
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >{toggleBtn ? "ON" : "OFF"}</Button>
                        </Grid>
                        <Grid size={3.1}>
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >C</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >Backspace</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >7</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >8</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >9</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >/</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >4</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >5</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >6</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >x</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >1</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >2</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >3</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >-</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >0</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >.</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >=</Button>
                        </Grid>
                        <Grid >
                            <Button variant="contained" size="large" color="yellow" onClick={handleClick} >+</Button>
                        </Grid>
                    </Grid>
                </Box >
            </ThemeProvider>
        </>
    );
};