import { memo } from "react";

import { Input, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset, setCount, initialValue } =
    useCounter(1);

  const handleChange = ({ target: { value } }) => {
    if (value < initialValue) {
      reset();
    } else {
      setCount(value);
    }
  };

  return (
    <div>
      <IconButton
        colorScheme="blue"
        onClick={increment}
        margin="10px"
        size="lg"
        icon={<AddIcon />}
      />
      <Input
        htmlSize={4}
        width="auto"
        value={count}
        onChange={handleChange}
        padding="0"
        textAlign="center"
      />
      <IconButton
        colorScheme="blue"
        margin="10px"
        onClick={decrement}
        size="lg"
        disabled={count === 1}
        icon={<MinusIcon />}
      />
    </div>
  );
};

export default memo(Counter);
