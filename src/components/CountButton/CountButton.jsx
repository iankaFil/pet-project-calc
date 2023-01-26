import { Button } from '@chakra-ui/react';

const CountButton = props => {
  return (
    <Button
      onClick={() => {
        props.onClick(props.data + props.expression);
      }}
    >
      {props.expression}
    </Button>
  );
};
export default CountButton;
