import api from "../../frontend/src/services/api";
import endpoints from "../../frontend/src/services/endpoints";

export const login = async (
  email: string,
  password: string
) => {
  const response = await api.post(
    endpoints.login,
    {
      email,
      password,
    }
  );

  return response.data;
};