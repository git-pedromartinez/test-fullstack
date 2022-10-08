const { Router } = require("express");
const messagesRoutes = require("./messages.routes");
const providersRoutes = require("./providers.routes");
const router = Router();

module.exports = function (api, app) {
    /**
     * api: /api/api
     */
    messagesRoutes(api + "/messages", app);
    providersRoutes(api + "/providers", app);

    app.use(router);
};
