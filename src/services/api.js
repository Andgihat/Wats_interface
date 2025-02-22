import axios from 'axios';

// Базовый URL для запросов
const BASE_URL = 'https://api.green-api.com';

/**
 * Проверка статуса инстанса
 * @param {string} idInstance - ID инстанса
 * @param {string} apiTokenInstance - Токен инстанса
 * @returns {Promise<object>} - Статус инстанса
 */
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

/**
 * Отправка сообщения
 * @param {string} idInstance - ID инстанса
 * @param {string} apiTokenInstance - Токен инстанса
 * @param {string} chatId - ID чата (номер телефона с окончанием @c.us)
 * @param {string} message - Текст сообщения
 * @returns {Promise<object>} - Результат отправки сообщения
 */
export const sendMessage = async (idInstance, apiTokenInstance, chatId, message) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      {
        chatId,
        message
      }
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    throw error;
  }
};

/**
 * Получение нового сообщения
 * @param {string} idInstance - ID инстанса
 * @param {string} apiTokenInstance - Токен инстанса
 * @returns {Promise<object|null>} - Уведомление или null, если новых сообщений нет
 */
export const receiveNotification = async (idInstance, apiTokenInstance) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении уведомления:', error);
    return null;
  }
};

/**
 * Удаление уведомления о сообщении
 * @param {string} idInstance - ID инстанса
 * @param {string} apiTokenInstance - Токен инстанса
 * @param {number} receiptId - ID уведомления, которое нужно удалить
 * @returns {Promise<void>}
 */
export const deleteNotification = async (idInstance, apiTokenInstance, receiptId) => {
  try {
    await axios.delete(
      `${BASE_URL}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`
    );
  } catch (error) {
    console.error('Ошибка при удалении уведомления:', error);
  }
};