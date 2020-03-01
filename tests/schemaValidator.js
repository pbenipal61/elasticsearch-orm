const schema = require("../schema");

console.log(schema({
        id: "keyword",
        name: "text",
        school: {
            required: true,
            type: "text"
        }
    }
));

