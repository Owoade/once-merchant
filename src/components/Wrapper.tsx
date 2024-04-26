import { Box } from '@chakra-ui/react';

const Wrapper = ({ children } : IWrapper) => {
  return(
    <Box width={{lg:"95%", base: "92%"}}  margin="0 auto">
        {children}
    </Box>
  ) ;
};

export default Wrapper;

interface IWrapper {
  children: React.ReactNode
}