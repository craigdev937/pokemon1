import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const RQClient = new QueryClient();

export default function
App({ Component, pageProps }: AppProps) {
    return (
        <React.StrictMode>
            <QueryClientProvider client={RQClient}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </React.StrictMode>
    );
};





