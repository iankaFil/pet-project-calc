import { Box, Text, Button } from '@chakra-ui/react';
import Numbers from './Numbers/Numbers';
import CountButton from './CountButton/CountButton';
import { useState } from 'react';

export const App = () => {
  const [counts, setCounts] = useState('0');
  const [result, setResult] = useState('');

  function applyExpressions(countedNumber) {
    setCounts(countedNumber);
    setResult(eval(counts));
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
          <Box display="flex" flexDirection="column">
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
          <Button
            bg="orange"
            m="4px"
            onClick={() => {
              setResult(eval(counts));
            }}
          >
            =
          </Button>
        </Box>
      </Box>
    </div>
  );
};
