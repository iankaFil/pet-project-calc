import { Box, Button } from '@chakra-ui/react';

const Numbers = props => {
  const checkedNumber = e => {
    if (props.data !== '0') {
      props.onClick(props.data + e.target.innerHTML);
      console.log(props.data);
    } else {
      props.onClick(e.target.innerHTML);
    }
  };
  const nums = Array.from(Array(10).keys()).map(number => {
    return (
      <Button
        onClick={checkedNumber}
        key={number}
        w="40px"
        h="40px"
        margin="4px"
        bg="gray.100"
        _hover="gray.400"
      >
        {number}
      </Button>
    );
  });

  return (
    <Box display="flex" flexWrap="wrap" w="150px">
      {nums}
    </Box>
  );
};
export default Numbers;
