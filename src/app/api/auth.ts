import axios from "@/app/api/axios";


export const login = async (requestData: LoginRequest): Promise<ApiResponse> => {
  const { data } = await axios.post("/auth/login", requestData);
  return data;
}