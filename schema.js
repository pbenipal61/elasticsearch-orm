const schemaValidator = (schema) => {

    //TODO

}

module.exports = (schema) => {

    const schemaValid = schemaValidator(schema);
    if(!schemaValid){
        return "Schema not valid"
    }

    return Object.freeze({...schema, meta: {valid: true}});

}