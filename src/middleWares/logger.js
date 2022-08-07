const loggerMiddleware = (request, response, next) => {
    console.log('Request Type:', request.method);
    console.log('Original URL:', request.originalUrl);
    next();
  };

  
module.exports = loggerMiddleware;