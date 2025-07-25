export class UserSignUp {
  lastName: string;
  firstName: string;
  email: string;
  password: string;

  constructor(lastName: string, firstName: string, email: string, password: string) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.password = password;
  }
}

export interface SignUpRequest {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  success: boolean;
  message: string;
  userId?: string;
}

import { signUpService } from '../service/userService';

export async function signUpUser(user: UserSignUp): Promise<SignUpResponse> {
  const req: SignUpRequest = {
    lastName: user.lastName,
    firstName: user.firstName,
    email: user.email,
    password: user.password,
  };
  return await signUpService(req);
} 