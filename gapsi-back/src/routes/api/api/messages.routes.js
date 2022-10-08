const { Router } = require("express");
const router = Router();

module.exports = (api, app) => {
    /**
     * api: /api/api/messages
     */

    router.route(api + `/welcome`).get(function (req, res) {
        res.send("Bienvenido Candidato 01");
    });
    router.route(api + `/version`).get(function (req, res) {
        res.send("versión 0.0.1");
    });

    app.use(router);
};
