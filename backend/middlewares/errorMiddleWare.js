const notFound = (req, res, next) => {
    res.status(404);
    const err = new Error("Route not found");
    next(err)
}

const errorHandler = (err, req, res, next) => {
    let message = err.message
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode).json({ message, stack: process.env === "production" ? null : err.stack })
}
export { notFound, errorHandler };