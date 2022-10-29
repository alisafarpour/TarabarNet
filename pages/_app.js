import store, {persistor} from '../app/store'
import {Provider} from 'react-redux'
import {ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from '@emotion/react';
import globalTheme from '../themes/globalTheme';
import createEmotionCache, {cacheRtl} from '../css/createEmotionCache';
import {Layout} from "../src/sections/Layout";
import {PersistGate} from "redux-persist/integration/react";


const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (

        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <CacheProvider value={emotionCache}>
                    <CacheProvider value={cacheRtl}>
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
