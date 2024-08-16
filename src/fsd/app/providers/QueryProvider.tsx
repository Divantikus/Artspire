'use client'
import {QueryClient, QueryClientProvider} from "react-query";
import {FC, ReactNode, useState} from "react";
import {ReactQueryDevtools} from "react-query/devtools";

interface QueryProviderProps {
    children: ReactNode
}

export const QueryProvider: FC<QueryProviderProps> = ({children}) => {
    const [queryClient] = useState(new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={true}/>
        </QueryClientProvider>
    )
}