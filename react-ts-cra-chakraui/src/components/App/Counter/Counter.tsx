import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

import TransparentButton from "#root/components/shared/TransparentButton";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Flex flexFlow="row nowrap" fontSize="8rem" justifyContent="center">
      <TransparentButton onClick={() => setCount(count - 1)}>–</TransparentButton>
      <Text as="strong" color="white">
        {count}
      </Text>
      <TransparentButton onClick={() => setCount(count + 1)}>+</TransparentButton>
    </Flex>
  );
};

export default Counter;
