const { develop } = require("../configs/api.config.json");

module.exports = {
    develop: {
        host: `http://${develop.host}:${develop.port}/`,
    },
};
