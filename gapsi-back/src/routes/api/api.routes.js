const api_api = require("./api/api.api");

const { Router } = require("express");
const router = Router();

module.exports = function (app) {
    /**
     * api: /api
     */
    let api = "/api";
    api_api(api + "/api", app);
    app.use(router);
};
