const { Client } = require('@elastic/elasticsearch');
const model = require("./model");
const schema = require("./schema");

/**
 * Initialize
 * @param url URL of the elasticsearch cluster
 * @returns {{schema: *, client: Client, model: *}}
 */
const init = (url) => {
   return {model, schema, client: new Client({node: url})}

}

module.exports = init;