class BaseModel {
  id: number
  createdAt: Date
  updatedAt: Date
}

class ApiResponse {
  message: string
  success: boolean
  token: string
}

class LoginRequest {
  phoneNumber: string
  smsCode: string
}