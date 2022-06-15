import {
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";

import { FiUser, FiLock, FiMail, FiEye, FiEyeOff } from "react-icons/fi";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { UseFormRegister } from "react-hook-form";

interface BarberInputProps extends InputProps {
  isPassword?: boolean;
  id: string;
  iconType: "user" | "email" | "lock";
  errors?: {
    [x: string]: any;
  };
  register: UseFormRegister<any>;
  eyerIconColor?: boolean;
}

const iconsOptions = {
  user: FiUser,
  email: FiMail,
  lock: FiLock,
};

export function BarberInput({
  isPassword,
  iconType,
  id,
  type,
  errors,
  register,
  ...props
}: BarberInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isOpenMessageError, setIsOpenMessageError] = useState(false);

  useEffect(() => {
    setIsOpenMessageError(true);
    setTimeout(() => {
      setIsOpenMessageError(false);
    }, 5000);
  }, [errors?.[id]]);

  return (
    <FormControl isInvalid={errors?.[id]}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          height="100%"
          children={
            <Icon
              as={iconsOptions[iconType]}
              color={isFocused ? "orange" : "gray.hard"}
            />
          }
        />
        <Input
          id={id}
          {...props}
          {...register(id)}
          type={isPassword ? (isVisiblePassword ? "text" : "password") : type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          w="340px"
        />

        {isPassword && !errors?.[id] && (
          <InputRightElement
            height="100%"
            children={
              <Icon
                onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                as={isVisiblePassword ? FiEyeOff : FiEye}
                color="gray.hard"
              />
            }
          />
        )}
        {errors?.[id] && (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {isOpenMessageError ? (
              <Tooltip
                label={errors[id].message}
                bg="orange"
                color="black.background"
                hasArrow
                placement="top"
                isOpen
              >
                <InputRightElement
                  h="100%"
                  fontSize={20}
                  children={
                    <Icon color="orange" as={AiOutlineExclamationCircle} />
                  }
                />
              </Tooltip>
            ) : (
              <Tooltip
                label={errors[id].message}
                bg="orange"
                color="black.background"
                hasArrow
                placement="top"
              >
                <InputRightElement
                  h="100%"
                  fontSize={20}
                  children={
                    <Icon color="orange" as={AiOutlineExclamationCircle} />
                  }
                />
              </Tooltip>
            )}
          </>
        )}
      </InputGroup>
    </FormControl>
  );
}
