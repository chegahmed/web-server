/**
 * Created by ahmed on 13/03/2017.
 */
var middleware ={
    requireAuthentication: function (req, res, next) {
        console.log('private route hit !');
        next();
    },
    logger: function (req, res, next) {
        console.log('Requist: '+new Date().toString()+req.method+ ' '+ req.originalUrl);
        next();
    }
};

module.exports = middleware;
