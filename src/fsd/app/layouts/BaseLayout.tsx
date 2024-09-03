import { ModalWindowContext } from "../providers/ModalWindowContext";
import { QueryProvider } from "@/fsd/app/providers/QueryProvider";
import { ReactNode } from "react";
import { ReduxProvider } from "../providers/ReduxProvider";

export function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <ModalWindowContext>{children}</ModalWindowContext>
      </QueryProvider>
    </ReduxProvider>
  );
}
