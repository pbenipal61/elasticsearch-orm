const supportedDataType = (values, allowObjects = true) => {

    const SUPPORTED_DATATYPES = ["text", "keyword", "Int", "Float"];
    const res =  values.filter(v => {
        if(allowObjects){
            return typeof v === "object" || SUPPORTED_DATATYPES.includes(v)
        }else{
            if(!v.type){
                return false;
            }else{
                if(SUPPORTED_DATATYPES.includes(v.type)){
                    return true;
                }

                return false;
            }
        }

    }).length === values.length;

    console.log("res", values, res);
    return res;

}


const schemaValidator = (schema) => {


    const aValues = Object.values(schema);
    if(!supportedDataType(aValues)){
        return false;
    }
    const bValues = aValues.filter(v => typeof v === "object");
    if(bValues.length === 0){
        return true;
    }
    return supportedDataType(Object.values(bValues), false);



}

module.exports = (schema) => {

    const schemaValid = schemaValidator(schema);
    if(!schemaValid){
        return "Schema not valid"
    }

    return Object.freeze({...schema, meta: {valid: true}});

}