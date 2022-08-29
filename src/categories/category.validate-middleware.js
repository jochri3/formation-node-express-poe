function validateBody(req,res,next){
    const body=req.body;
    const validator={errors:{},isValid:true}
    if(!body.name){
        validator.errors.name="name cannot be empty"
    }

    if(!body.description){
        validator.errors.description="description cannot be empty"
    }

    if(validator.errors.name || validator.errors.description){
        validator.isValid=false;
    }

    if(!validator.isValid){
        return res.status(422).send(validator)
    }

    next()
}

module.exports.validateBody=validateBody;