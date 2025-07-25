import { SignUpRequest, SignUpResponse } from '../logic/userLogic';

export async function signUpService(req: SignUpRequest): Promise<SignUpResponse> {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || 'Sign up failed',
      };
    }
    const data = await response.json();
    return {
      success: true,
      message: 'Sign up successful',
      userId: data.userId,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Network error',
    };
  }
} 