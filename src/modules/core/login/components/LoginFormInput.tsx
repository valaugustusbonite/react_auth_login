import { 
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

interface LoginFormInputProps {
  id: string,
  formLabel: string,
  type: string,
}

const LoginFormInput = (props: LoginFormInputProps) => {
  let { id, formLabel, type } = props;

  return (
    <FormControl id={id}>
      <FormLabel>{formLabel}</FormLabel>
      <Input type={type} />
    </FormControl>
  );
}

export default LoginFormInput;