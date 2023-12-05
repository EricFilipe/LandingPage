import React from 'react'
import { Container, Form, FormButton, FormConmtent, FormH1, FormInput, FormLable, FormWrap, Icon, Text } from './SigninElements';

const Signin = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>Logo</Icon>
                <FormConmtent>
                    <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLable htmlFor='for'>Email</FormLable>
                        <FormInput type='email' required/>
                        <FormLable htmlFor='for'>Password</FormLable>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormConmtent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Signin;