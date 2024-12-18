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

export const errorBadRequest = (message?: string): HttpResponse => {
  return {
    statusCode: 400,
    body: {
      message:
        message || "Todas as informações devem ser preenchidas corretamente.",
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

export const errorInternalServer = (error: any): HttpResponse => {
  return {
    statusCode: 500,
    body: {
      message: "Erro interno no servidor.",
      error,
    },
  };
};
