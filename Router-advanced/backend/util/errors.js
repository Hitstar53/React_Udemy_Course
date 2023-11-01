class NotFoundError {
  constructor(message) {
    this.message = message;
    this.status = 404;
  }
}

const _NotFoundError = NotFoundError;
export { _NotFoundError as NotFoundError };