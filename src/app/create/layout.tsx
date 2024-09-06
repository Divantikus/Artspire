import { ReactNode } from "react";

export default function layoutCreate({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <section>{children}</section>;
}
