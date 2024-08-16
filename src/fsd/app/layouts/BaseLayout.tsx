import { QueryProvider } from "@/fsd/app/providers/QueryProvider";
import { ReactNode } from "react";


export function BaseLayout ({children} : {children: ReactNode}){
    return <QueryProvider>
        {children}
    </QueryProvider>
}