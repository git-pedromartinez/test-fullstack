const api = require("./api/api.routes");

const { Router } = require("express");
const router = Router();

module.exports = function (app) {
    /**
     * api: /
     */
    router.all("/*", function (req, res) {
        res.json({
            type: "void",
            content: null,
        });
    });

    api(app);

    app.use(router);
};
