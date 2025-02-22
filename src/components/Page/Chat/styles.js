import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from "@mui/material";

export const StyledChatContainer = styled(motion.div)`
  width: 400px;
  min-height: 300px;
  max-height: 800px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledChatHeader = styled.h2`
  text-align: center;
  color: #25d366;
`;

export const StyledExitButton = styled(Button)`
  position: absolute;
  color: #64737c;
  background-color: transparent;
  height: 45px;
  margin: 14px;
  overflow: hidden;

  transition: color 1s cubic-bezier(0.66, 0, 0.34, 1);

  &:after {
    background-color:rgba(202, 22, 22, 0.93);
    border-radius: 50%;
    content: "";
    height: 167px;
    min-width: 167px;
    position: absolute;
    top: -20%;
    left: -50%;
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

export const StyledMotionWrapper = styled(motion.div)`
  width: 100%;
  flex-grow: 1;
`;