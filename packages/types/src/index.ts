export interface AuthSession {
  token: string;
  userId: string;
  expiresAt: number;
}