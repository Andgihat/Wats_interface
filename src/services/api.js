import axios from 'axios';

const BASE_URL = 'https://api.green-api.com';

export const checkInstanceStatus = async (idInstance, apiTokenInstance) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при проверке статуса инстанса:', error);
    throw error;
  }
};