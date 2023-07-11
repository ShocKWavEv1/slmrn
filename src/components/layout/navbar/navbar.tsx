import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

import circles from "../../../static/logo/double_circle.svg";

const Navbar: React.FC = ({}) => {
  const router = useRouter();
  return (
    <Box w="100%" h="auto" bg="black" p="50px 40px">
      <SimpleGrid columns={[2, 2, 2, 2]} spacing="20px">
        <Box w="100%">
          <Box
            w={["80px", "80px", "80px", "60px"]}
            pointerEvents="all"
            cursor="pointer"
            className="link"
            onClick={() => router.push("/")}
          >
            <Image priority src={circles} alt="Fvtvra Logo" />
          </Box>
        </Box>
        <Box w="100%">
          <Box
            w="100%"
            h="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Stack direction="row" spacing="15px">
              <Text
                variant="XS"
                cursor="pointer"
                className="link"
                zIndex={1}
                onClick={() => router.push("/nosotros")}
              >
                Email
              </Text>
              <Text
                variant="XS"
                cursor="pointer"
                className="link"
                zIndex={1}
                onClick={() => router.push("/servicios")}
              >
                Linkedin
              </Text>
              <Text
                variant="XS"
                cursor="pointer"
                className="link"
                zIndex={1}
                onClick={() => router.push("/")}
              >
                Github
              </Text>
            </Stack>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Navbar;
