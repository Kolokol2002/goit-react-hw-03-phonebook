import styled from 'styled-components';
import { Form, Field } from 'formik';

const FormPhone = styled(Form)`
  padding: 30px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 10px;
`;

const FieldPhone = styled(Field)`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
`;

const ButtonPhone = styled.button`
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;

  :hover,
  :active,
  :focus {
    background: #43a047;
  }
`;
const NameInput = styled.span`
  padding-top: 10px;
`;
const ErrorValidate = styled.p`
  color: red;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 14px;
`;

export { FormPhone, FieldPhone, ButtonPhone, NameInput, ErrorValidate };
