class ApiResponse {
  constructor(statusCode, message, data = null) {
    this.status = statusCode;
    this.message = message;
    this.data = data;
    this.success = StatusCode < 400;
  }
}
