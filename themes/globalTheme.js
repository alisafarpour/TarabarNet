import {createTheme} from '@mui/material/styles';
// import YekanBakhFaEnMedium from "../public/fonts/yekan-bakh/Yekan-Bakh-Fa-En-Medium.woff";
// import YekanBakhFaEnBold from "../public/fonts/yekan-bakh/Yekan-Bakh-Fa-En-Bold.woff";
// import YekanBakhFaEnRegular from "../public/fonts/yekan-bakh/Yekan-Bakh-Fa-En-Regular.woff";
import YekanBakhFaNumBold from "../public/fonts/test/YekanBakhFaNum-Bold.woff";
import YekanBakhFaNumRegular from "../public/fonts/test/YekanBakhFaNum-Regular.woff";


// Create a theme instance.
const theme = createTheme({
    direction: 'rtl',
    components: {
        MuiCssBaseline: {
            styleOverrides:
                {
                    html: {
                        scrollBehavior: 'smooth',
                    },
                    '*': {
                        scrollMarginTop: 20
                    },
                    body: {
                        overflowX: "hidden",
                        backgroundColor: "#f9f9f9",
                        "& a": {
                            textDecoration: "none",
                            color: "inherit",
                        },
                        '& .max-width-1136': {
                            maxWidth: '1136px !important'
                        },
                        '& .max-width-1312': {
                            maxWidth: '1312px !important'
                        },
                        '& .section-margin-bottom': {
                            marginBottom: '144px !important',
                            '@media (max-width:900px)': {
                                marginBottom: '104px !important',
                            }
                        },
                        minHeight: "100vh",
                        margin: 0,
                    },
                    "@font-face": {
                        fontFamily: "YekanBakh",
                        fontStyle: "normal",
                        fontWeight: 500,
                        src: `url(${YekanBakhFaNumRegular}) format('woff')`,
                        fontDisplay: 'swap'
                    },
                    fallbacks: [
                        {
                            fontFamily: "YekanBakh",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            src: `url(${YekanBakhFaNumBold}) format('woff')`,
                            fontDisplay: 'swap'
                        },
                        {
                            fontFamily: "YekanBakh",
                            fontStyle: "normal",
                            fontWeight: 300,
                            src: `url(${YekanBakhFaNumRegular}) format('woff')`,
                            fontDisplay: 'swap'
                        },
                    ],


                }
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'main'},
                    style: {
                        backgroundColor: "#0c549a",
                        borderRadius: 8,
                        height: 40,
                        boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 16px 24px 0 rgba(0, 0, 0, 0.06)",
                        padding: "8px 40px",
                        fontSize: "1.250rem",
                        fontWeight: "bold",
                        letterSpacing: "normal",
                        lineHeight: 1.6,
                        color: "#fff",
                        "&:hover": {
                            backgroundColor: "#08335e",
                            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.04), 0 4px 8px 0 rgba(0, 0, 0, 0.04), 0 16px 24px 0 rgba(0, 0, 0, 0.04), 0 24px 32px 0 rgba(0, 0, 0, 0.04)",
                        },
                        "&:active": {
                            backgroundColor: "#1d518a",
                        },
                        '@media (max-width:900px)': {
                            fontSize: "1.000rem",
                            padding: "5px 25px",
                        },
                    },
                },

            ],
        },
        MuiTextField: {
            variants: [
                {
                    props: {type: 'number', disableArrows: true},
                    style: {
                        //for disable arrows
                        '& input::-webkit-outer-spin-button': {
                            '-webkit-appearance': 'none',
                            m: 0
                        },
                        '& input::-webkit-inner-spin-button': {
                            '-webkit-appearance': 'none',
                            m: 0
                        },
                        '& input[type=number]': {
                            '-moz-appearance': 'textfield',
                        },
                    },
                }
            ]
        }
    },
    palette: {
        black: {
            "0": "#000000",
            "1": "#333333",
            "2": "#666666",
            "3": "#999999",
            "4": "#c4c4c4",
            "5": "#f5f5f5",
        },
        alert: '#e22c1f',

    },
    typography: {
        fontFamily: 'YekanBakh',
        h1: {
            fontSize: "2.438rem",
            fontWeight: 900,
            letterSpacing: "normal",
            lineHeight: 1.2,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "1.875rem",
            },
        },
        h2: {
            fontSize: "1.938rem",
            fontWeight: 900,
            letterSpacing: "normal",
            lineHeight: 1.2,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "1.5625rem",
            },
        },
        h3: {
            fontSize: "1.562rem",
            fontWeight: "bold",
            letterSpacing: "normal",
            lineHeight: 1.2,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "1.125rem",
                fontWeight: 900,
                lineHeight: 2,
            },
        },
        subtitle: {
            fontSize: "1.125rem",
            fontWeight: "bold",
            letterSpacing: "normal",
            lineHeight: 1.6,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "0.875rem",
            },
        },
        body: {
            fontSize: "1.000rem",
            fontWeight: 500,
            letterSpacing: "normal",
            lineHeight: 1.8,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "0.750rem",
                lineHeight: 2,
            },
        },
        caption: {
            fontSize: "0.875rem",
            fontWeight: "normal",
            letterSpacing: "normal",
            lineHeight: 1.6,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "0.625rem",
                lineHeight: 1.5,
            },
        },
        primaryButton: {
            fontSize: "1.125rem",
            fontWeight: "bold",
            letterSpacing: "normal",
            lineHeight: 1.6,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "0.875rem",
                lineHeight: 1.2,
            },
        },
        secondaryButton: {
            fontSize: "1.000rem",
            fontWeight: "bold",
            letterSpacing: "normal",
            lineHeight: 1.6,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "0.875rem",
                lineHeight: 1.2,
            },
        },
        input: {
            fontSize: "0.750rem",
            fontWeight: "normal",
            letterSpacing: "normal",
            lineHeight: 1.6,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "0.625rem",
                lineHeight: 1.2,
            },
        },
    },
    shadows: Array(25).fill('none')
});

// override custom shadows and fill other shadows with none to not warn
theme.shadows[0] = '0 4px 4px 0 rgba(0, 0, 0, 0.1)'
theme.shadows[1] = '0 6px 12px 0 rgba(0, 0, 0, 0.25)'

export default theme;
