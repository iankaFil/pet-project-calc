import { Box, Text } from '@chakra-ui/react';
import Numbers from './Numbers/Numbers';
import { useState } from 'react';

export const App = () => {
  const [counts, setCounts] = useState('0');
  const [result, setResult] = useState('');
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Box
          display="flex"
          gap="5px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="200vh"
        >
          <Box display="flex" w="100%" justifyContent="between">
            <Text
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="gray.50"
              w="100%"
              h="38px"
              px="4px"
              borderRadius="8px"
            >
              {counts}
            </Text>
            <Text w="fit-content" h="38px" textColor="orange">
              {result}
            </Text>
          </Box>
          <Numbers data={counts} onClick={setCounts}></Numbers>
        </Box>
      </Box>
    </div>
  );
};
