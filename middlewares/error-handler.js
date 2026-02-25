const errorHandler = (err, req, res, next) => {
  console.error(err);

  const { statusCode = 500, message } = err;

  res.status(statusCode).json({
    message:
      statusCode === 500 ? "An error has occurred on the server" : message,
  });
};

module.exports = errorHandler;
