import styled from "styled-components";
import ChatBackgroundImg from "../../assets/img/Chat_Background.png"
import { TextField, Button, Paper, Box } from "@mui/material";

export const StyledChatContainer = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
  min-height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledMessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: #efeae2;
  background-image: url(${ChatBackgroundImg});
  background-position: center;
  background-attachment: fixed;
`;

export const StyledMessageItem = styled.div`
  align-self: ${({ isOwn }) => (isOwn ? "flex-end" : "flex-start")};
  background-color: ${({ isOwn }) => (isOwn ? "#d9fdd3" : "#FFF")};
  color: #333;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 70%;
`;

export const StyledFormBox = styled(Box)`
  display: flex;
`;

export const StyledMessageInput = styled(TextField)`
  flex: 1;
  background-color:#ffffff;
`;

export const StyledSendButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  margin: 0px 0px 0px 10px;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  color: #64737c;
  transition: color 1s cubic-bezier(0.66, 0, 0.34, 1);

  &:after {
    background-color: #1ebe57;
    border-radius: 50%;
    content: "";
    height: 167px;
    min-width: 167px;
    position: absolute;
    top: -20%;
    left: -80%;
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
