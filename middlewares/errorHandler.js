const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.send({ 
                title: "Validation Failed!",  
                message: err.message, 
                stackTrace: err.stack 
            });
            break;

        case constants.UNAUTHORIZED:
            res.send({ 
                title: "User Unauthorized!",   
                message: err.message, 
                stackTrace: err.stack 
            });
            break;

        case constants.FORBIDDEN:
            res.send({ 
                title: "Forbidden Access!",    
                message: err.message, 
                stackTrace: err.stack 
            });
            break;

        case constants.NOT_FOUND:
            res.send({ 
                title: "Not Found!", 
                message: err.message, 
                stackTrace: err.stack 
            });
            break;

        case constants.SERVER_ERROR:
            res.send({ 
                title: "An error occurred on the server",  
                message: err.message, 
                stackTrace: err.stack 
            });
            break;

        default:
            console.log("No Errors! All right! 🙏");
            break;
    }    
};

module.exports = errorHandler;
