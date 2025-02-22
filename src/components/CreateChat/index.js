import React, { useState } from "react";
import { Typography } from "@mui/material";
import {
  StyledFormContainer,
  StyledPhoneNumberInput,
  StyledCreateChatButton,
} from "./styles";

const CreateChat = ({ onCreateChat }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!phoneNumber.match(/^[0-9]{11}$/)) {
      setError("Введите номер в формате: 79991234567");
      return;
    }

    onCreateChat(phoneNumber);
  };

  return (
    <StyledFormContainer>
      <Typography variant="h5">Новый чат</Typography>
      <StyledPhoneNumberInput
        label="Номер телефона (без +)"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        helperText="Введите номер в формате: 79991234567"
        error={!!error}
      />
      <StyledCreateChatButton variant="contained" onClick={handleSubmit}>
        Создать чат
      </StyledCreateChatButton>
    </StyledFormContainer>
  );
};

export default CreateChat;
