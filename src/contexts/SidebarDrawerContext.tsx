import { Sidebar } from "@/components/Sidebar";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: React.ReactNode;
}

type SidebarDrawerContextType = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextType);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const { asPath } = useRouter();

  useEffect(() => disclosure.onClose(), [asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      <Sidebar />
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
