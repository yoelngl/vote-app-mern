module.exports.notFound = (req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
}


module.exports.errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        err: err.message || 'Something Wrong yeahh'
    })};