export const errorHandler = (err, req, res, action) => {

    const status = res.statusCode ? res.statusCode :500;
    res.status(status)

    res.json({
        message: err.message,
        stack: err.stack    
    })
};