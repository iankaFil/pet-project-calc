import { Box, Text, Button } from '@chakra-ui/react';
import Numbers from './Numbers/Numbers';
import CountButton from './CountButton/CountButton';
import { useState } from 'react';
// import { create, all } from 'mathjs';

export const App = () => {
  const [counts, setCounts] = useState('0');
  const [result, setResult] = useState('');

  const math = require('mathjs');
  function applyExpressions(countedNumber) {
    setCounts(countedNumber);
    setResult(math.eval(counts));
  }
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
          display="inline-block"
          gap="5px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="50vh"
          bg="#272727"
          borderRadius="8px"
        >
          <Box display="flex" w="100%" justifyContent="between">
            <Text
              display="flex"
              justifyContent="center"
              marginLeft="auto"
              marginRight="auto"
              alignItems="center"
              bg="#272727"
              color="#e9e9e9"
              w="50vh"
              h="38px"
              px="4px"
              borderRadius="8px"
            >
              {counts}
            </Text>
            <Text
              display="flex"
              w="70px"
              h="38px"
              textColor="orange"
              bg="#575757"
              justifyContent="start"
              alignItems="center"
              // marginRight="10px"
            >
              {result}
            </Text>
          </Box>
          <Box display="flex" bg="gray.200">
            <Numbers data={counts} onClick={setCounts} />
            <Box display="flex" flexDirection="column" m="5px" gap="8px">
              <CountButton
                data={counts}
                expression={'+'}
                onClick={applyExpressions}
              />
              <CountButton
                data={counts}
                expression={'-'}
                onClick={applyExpressions}
              />{' '}
              <CountButton
                data={counts}
                expression={'*'}
                onClick={applyExpressions}
              />{' '}
              <CountButton
                data={counts}
                expression={'/'}
                onClick={applyExpressions}
              />
            </Box>
          </Box>
          <Button
            bg="orange"
            m="4px"
            onClick={() => {
              setResult(math.eval(counts));
            }}
          >
            =
          </Button>
        </Box>
      </Box>
    </div>
  );
};
