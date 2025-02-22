import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f0f2f5;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledPhoneNumberInput = styled(TextField)`
  width: 100%;
`;

export const StyledCreateChatButton = styled(Button)`
  width: 100%;
  background-color: #1ebe57;
  color: white;
  &:hover {
    background-color: #1ebe57;
  }
`;