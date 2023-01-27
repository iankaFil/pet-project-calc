import { Button } from '@chakra-ui/react';

const CountButton = props => {
  const expressions = /[+\-*/^%()]/;
  const lastNumber = props.data[props.data.length - 1];
  const checkExpressionType = () => {
    if (expressions.test(lastNumber)) {
      return props.onClick(props.data + props.expression);
    }
  };
  return (
    <Button
      onClick={() => {
        checkExpressionType();
      }}
    >
      {props.expression}
    </Button>
  );
};
export default CountButton;
