

const modelFactory = (schema, client) => {

    if(!schema.meta.valid || schema.index){
        return "Schema not acceptable"
    }

    if(!client){
        return "No client passed"
    }

    return Object.freeze(
        {
            pre: {
                schema
            },

            index: (doc) => client.index({index: schema.index, body: doc}),
            match: (o) => {
                if(!Object.keys(schema).includes(Object.keys(o)[0])){
                    return "Invalid key passed"
                }
                return client.search({index: schema.index, body: { query: { match: {...o}}}})
            }
        }
    )


}

module.exports = modelFactory();