/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpResponse } from "../protocols/http";

export const successRequest = (dataParam?: any): HttpResponse => {
  const data = dataParam ? dataParam : null;

  return {
    statusCode: 200,
    body: {
      message: "Requisição bem-sucedida!",
      data,
    },
  };
};

export const created = (data: any): HttpResponse => {
  return {
    statusCode: 201,
    body: {
      message: "Item criado com sucesso!",
      data,
    },
  };
};

export const errorBadRequest = (error?: any): HttpResponse => {
  return {
    statusCode: 400,
    body: {
      message: "Todas as informações devem ser preenchidas corretamente.",
      error,
    },
  };
};

export const errorNotFound = (message?: string): HttpResponse => {
  return {
    statusCode: 404,
    body: {
      message: message || "Nenhum item encontrado.",
    },
  };
};

export const handleDatabaseError = (error: any): HttpResponse => {
  if (error.code === 11000) {
    // Código de erro para chave duplicada no MongoDB
    const duplicatedField = Object.keys(error.keyPattern)[0];
    const duplicatedValue = error.keyValue[duplicatedField];

    // Mensagem de erro traduzida
    const errorMessage = `O valor '${duplicatedValue}' já está em uso para o campo '${duplicatedField}'. Por favor, utilize outro.`;

    return {
      statusCode: 400,
      body: {
        message: errorMessage,
        field: duplicatedField,
        value: duplicatedValue,
      },
    };
  }

  return {
    statusCode: 500,
    body: {
      message:
        "Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.",
    },
  };
};
