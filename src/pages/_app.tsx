import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

export default function
App({ Component, pageProps }: AppProps) {
    const [RQClient] = React.useState(() => new QueryClient());

    return (
        <React.StrictMode>
            <QueryClientProvider client={RQClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false} />
                </Hydrate>
            </QueryClientProvider>
        </React.StrictMode>
    );
};





