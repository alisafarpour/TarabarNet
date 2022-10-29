import store, {persistor} from '../app/store'
import {Provider} from 'react-redux'
import {ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from '@emotion/react';
import globalTheme from '../themes/globalTheme';
import createEmotionCache, {cacheRtl} from '../css/createEmotionCache';
import {Layout} from "../src/sections/Layout";
import {PersistGate} from "redux-persist/integration/react";
import Head from "next/head";


const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (

        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <CacheProvider value={emotionCache}>
                    <CacheProvider value={cacheRtl}>
                        <Head>
                            <meta charset="utf-8"/>
                            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                            <meta name="viewport"
                                  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
                            <meta name="Games Card" content="interview project"/>
                            <meta name="theme-color" content="#0a447e"/>
                            <title>Title of the project</title>
                            <link rel="manifest" href="/manifest.json"/>
                            <link rel="shortcut icon" href="/favicon.ico"/>
                            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                        </Head>
                        <ThemeProvider theme={globalTheme}>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </ThemeProvider>
                    </CacheProvider>
                </CacheProvider>
            </PersistGate>
        </Provider>

    )
}

export default MyApp
