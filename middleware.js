
function uppercase(req,res,next) {
    // console.log('in the uppercase middleware');
    // console.log(req.body.name);
    // const name = req.body.name;
    // name.toUpperCase();
    // console.log(req.body.name.toUpperCase());
    req.body.name = req.body.name.toUpperCase();
    // req.body.name = req.body.name.toUpperCasse();
    // console.log(req.body.name.typeof());
    // res.status(200);
    // console.log('after the json status');
    // next(req.body.name.toUpperCase());
    next();
}

module.exports = uppercase;
