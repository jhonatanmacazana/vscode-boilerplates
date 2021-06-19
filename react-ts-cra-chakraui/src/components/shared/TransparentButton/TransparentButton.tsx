import { Button, ButtonProps } from "@chakra-ui/react";

interface TransparentButtonProps extends ButtonProps {}

const TransparentButton = ({ children, ...buttonProps }: TransparentButtonProps) => {
  return (
    <Button
      backgroundColor="transparent"
      border={0}
      color="white"
      fontFamily="inherit"
      fontSize="inherit"
      margin="0 2rem"
      userSelect="none"
      _hover={{ cursor: "pointer" }}
      _focusWithin={{
        outline: "none",
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default TransparentButton;
