const ErrorHandller = (err, req, res, next) => {
  const errstatus = err.status || 500;
  const errmessage = err.message || "error from the server";
  return res.status(errstatus).json({
    success: false,
    status: errstatus,
    message: errmessage,
  });
};
export default ErrorHandller;
