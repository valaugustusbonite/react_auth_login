import { 
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Button, Divider } from "@chakra-ui/react";
import LoginFormInput from "../components/LoginFormInput";
import '../styles/Form.css';

const Login = () => {
  return (
    <>
      <div className='login-container'>
        <div className='form-container'>
          <div className='label-container'>
            <h1 className='signin-label'>Sign in</h1>
          </div>
          <LoginFormInput id='email' formLabel='Email' type='email' />
          <LoginFormInput id='password' formLabel='Password' type='password' />
          <Button colorScheme='teal' marginTop='10px' width='100%'>Sign In</Button>
          <Divider marginTop='10px' marginBottom='10px'/>
          <Button variant='outline' width='100%'>Sign Up</Button>
        </div>
      </div>
    </>
  );
}

export default Login;