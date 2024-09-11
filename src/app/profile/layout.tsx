import { ProfilePage } from "@/fsd/pages/profile-page";
import { ReactNode } from "react";

export default function PageProfile({ children }: { children: ReactNode }) {
  return <ProfilePage>{children}</ProfilePage>;
}
