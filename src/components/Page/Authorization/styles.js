import styled from "styled-components";
import { Form } from "formik";
import { Box, TextField, Typography, Button, Link } from "@mui/material";

export const StyledWrapperBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 550px;
  background-color: #f0f2f5;
  border-radius: 15px;
`;

export const StyledMainFrame = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 520px;
  height: 520px;
  background-color: #ffffff;
`;

export const StyledFormField = styled(TextField)`
  margin: 5px 0px 0px 0px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  top: 100px;
  width: 350px;
  flex-direction: column;
`;

export const StyledHeader = styled(Typography)`
  position: relative;
  font-weight: 700;
  top: 55px;
`;

export const StyledLabel = styled(Typography)`
  font-weight: 700;
`;

export const StyledSubmitButton = styled(Button)`
  margin: 20px 0;
  border-color: #1c1e21;
  position: relative;
  overflow: hidden;
  color: #1c1e21;
  transition: color 1s cubic-bezier(0.66, 0, 0.34, 1);

  &:after {
    background-color: #1ebe57;
    border-radius: 50%;
    content: "";
    height: 167px;
    min-width: 167px;
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    z-index: 0;
    transform: translateY(70px);
    transition: transform 1s cubic-bezier(0.66, 0, 0.34, 1);
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

export const StyledLink= styled(Link)`
  position: relative;
  color: #1c1e21;
  font-weight: 700;
  left: 20%; 
  transition: color 0.3s cubic-bezier(0.66, 0, 0.34, 1);

  &:hover {
    color: #3b9702;
  }
`;
