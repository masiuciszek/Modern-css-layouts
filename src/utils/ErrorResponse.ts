class ErrorResponse extends Error {
  statusCode: number;

  code: number | undefined;

  value: string | undefined;

  constructor(
    message: string,
    statusCode: number,
    code?: number,
    value?: string
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
    this.value = value;

    Error.captureStackTrace(this);
  }
}

export default ErrorResponse;
