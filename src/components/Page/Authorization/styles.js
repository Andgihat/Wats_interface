import styled from "styled-components";
import { Form } from "formik";
import { Box, TextField, Typography, Button } from "@mui/material";

const StyledWrapperBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 550px;
  background-color: #f0f2f5;
  border-radius: 15px;
`;

const StyledMainFrame = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 520px;
  height: 520px;
  background-color: #ffffff;
`;

const StyledFormField = styled(TextField)`
  margin: 5px 0px 0px 0px;
`;

const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  top: 100px;
  width: 350px;
  flex-direction: column;
`;

const StyledHeader = styled(Typography)`
  position: relative;
  Font-weight: 700;
  top: 55px;
`;

const StyledLabel = styled(Typography)`
  Font-weight: 700;
`;

const StyledSubmitButton = styled(Button)`
  margin: 20px 0;
  border-color: #1c1e21;
  position: relative;
  overflow: hidden;
  color: #1c1e21;
  transition: color 1s cubic-bezier(.66, .00, .34, 1.00);

  &:after {
    background-color: #1c1e21;
    border-radius: 50%;
    content: '';
    height: 167px;
    min-width: 167px;
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    z-index: 0;
    transform: translateY(70px);
    transition: transform 1s cubic-bezier(.66, .00, .34, 1.00);
  }

  &:hover {
    color: white;

    &:after {
      transform: scale(1.5) translateY(-30px);
    }
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

export {
  StyledMainFrame,
  StyledFormField,
  StyledWrapperBox,
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledSubmitButton,
};
