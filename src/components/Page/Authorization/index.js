import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { checkInstanceStatus } from "../../../services/api";
import {
  StyledMainFrame,
  StyledFormField,
  StyledWrapperBox,
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledSubmitButton,
  StyledLink,
} from "./styles";

const Authorization = () => {
  const validationSchema = Yup.object({
    idInstance: Yup.string()
      .matches(/^[0-9]+$/, "Только цифры")
      .required("Обязательное поле"),
    apiTokenInstance: Yup.string().required("Обязательное поле"),
  });

  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const status = await checkInstanceStatus(
        values.idInstance,
        values.apiTokenInstance
      );

      if (status.stateInstance === "authorized") {
        localStorage.setItem("idInstance", values.idInstance);
        localStorage.setItem("apiTokenInstance", values.apiTokenInstance);
        navigate("/chat");
      } else {
        setErrors({
          apiTokenInstance:
            "Инстанс не авторизован или данные введены неправильно.",
        });
      }
    } catch (error) {
      setErrors({
        apiTokenInstance:
          "Ошибка при проверке данных. Проверьте правильность ввода.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledWrapperBox>
      <StyledMainFrame>
        <StyledHeader variant="h4">Вход в WhatsApp Chat</StyledHeader>
        <Formik
          initialValues={{ idInstance: "", apiTokenInstance: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <StyledForm>
              <StyledLabel>ID</StyledLabel>
              <Field
                as={StyledFormField}
                label="idInstance"
                name="idInstance"
                variant="outlined"
                fullWidth
                error={touched.idInstance && Boolean(errors.idInstance)}
                helperText={touched.idInstance && errors.idInstance}
              />
              <StyledLabel>Токен</StyledLabel>
              <Field
                as={StyledFormField}
                label="apiTokenInstance"
                name="apiTokenInstance"
                variant="outlined"
                fullWidth
                error={
                  touched.apiTokenInstance && Boolean(errors.apiTokenInstance)
                }
                helperText={touched.apiTokenInstance && errors.apiTokenInstance}
              />
              <StyledSubmitButton type="submit" variant="outlined"><span>Войти</span></StyledSubmitButton>
              <StyledLink underline="none" href="https://console.green-api.com/?utm_source=hh&utm_medium=vacancy&utm_campaign=fronted_dev&utm_site=https://green-api.com&utm_site=https://green-api.com">Получить токен GREEN-API</StyledLink>
            </StyledForm>
          )}
        </Formik>
      </StyledMainFrame>
    </StyledWrapperBox>
  );
};

export default Authorization;
