import { ScrollProvider } from "@/hooks/useLenis";
import { Box } from "@chakra-ui/react";
import { LayoutProps } from "./model";
import Navbar from "./navbar/navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ScrollProvider>
      <Box w="100%" h="auto">
        <Navbar />
        <Box w="100%">{children}</Box>
      </Box>
    </ScrollProvider>
  );
};

export default Layout;
