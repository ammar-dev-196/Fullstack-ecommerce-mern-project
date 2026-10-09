/*
  Higher Order AsyncHandler function for
  handling the errors in async code.

  Avoiding try-catch block in every controller file
  which make code clean and readable.

*/

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    // Resolving promise and handling errors
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error),
    );
  };
};

export { asyncHandler };

// Another syntax
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//         success: false,
//         message: error.message
//     })
//   }
// };
// export { asyncHandler };
