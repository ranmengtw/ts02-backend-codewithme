/* eslint-disable @typescript-eslint/no-explicit-any */

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public details: any
  ) {
    super(message);
  }
}

export class NotFoundError extends AppError {
  constructor(public message: string, public details: any) {
    super(message, 404, details);
  }
}
