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
          w="50vh"
          bg="gray.100"
          borderRadius="8px"
        >
          <Box display="flex" w="100%" justifyContent="between">
            <Text
              display="flex"
              justifyContent="center"
              marginLeft="auto"
              marginRight="auto"
              alignItems="center"
              bg="gray.100"
              w="50vh"
              h="38px"
              px="4px"
              borderRadius="8px"
            >
              {counts}
            </Text>
            <Text
              display="flex"
              w="fit-content"
              h="38px"
              textColor="orange"
              justifyContent="start"
              alignItems="center"
              marginRight="10px"
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
      </Box>
    </div>
  );
};
