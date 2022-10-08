const { default: axios } = require("axios");
const { Router } = require("express");
const router = Router();
const { develop } = require("../../../keys/server.key");
const File = require("../../../class/File.class");
const file = new File();
const Providers = require("../../../class/Providers.class");
const providers = new Providers();

const pathBd = process.env.BD;
const pathBdInitial = process.env.BD_INITIAL;

module.exports = (api, app) => {
    /**
     * api: /api/api/providers
     */

    router.route(api + `/initial`).post(async function (req, res) {
        const data = JSON.parse(await file.read(pathBdInitial));
        await file.writte(pathBd, JSON.stringify(data));
        const dataNew = JSON.parse(await file.read(pathBd));
        res.json(dataNew);
    });

    router
        .route(api + `/all`)
        .get(async function (req, res, next) {
            const data = await file.read(pathBd);
            if (data === "") {
                axios
                    .post(develop.host + "api/api/providers/initial")
                    .then(function (response) {})
                    .catch(function (error) {})
                    .finally(function () {
                        next();
                    });
            } else {
                next();
            }
        })
        .get(async function (req, res) {
            const data = JSON.parse(await file.read(pathBd));
            res.json(data);
        });

    router.route(api + `/add_provider`).post(async function (req, res) {
        const { name, businessName, direction } = req.body;
        const data = JSON.parse(await file.read(pathBd));

        const addProvider = providers.addProvider(data.providers, {
            name,
            businessName,
            direction,
        });

        if (addProvider) {
            await file.writte(
                pathBd,
                JSON.stringify({ providers: addProvider })
            );
        }

        res.json({
            type: "successful",
            content: addProvider,
        });
    });

    router.route(api + `/delete_provider`).post(async function (req, res) {
        const { name, businessName, direction } = req.body;
        const data = JSON.parse(await file.read(pathBd));

        const deleteProvider = providers.deleteProvider(data.providers, {
            name,
            businessName,
            direction,
        });

        if (deleteProvider) {
            await file.writte(
                pathBd,
                JSON.stringify({ providers: deleteProvider })
            );
        }

        res.json({
            type: "successful",
            content: deleteProvider,
        });
    });

    router.route(api + `/find_provider`).post(async function (req, res) {
        const { name, businessName, direction } = req.body;
        const data = JSON.parse(await file.read(pathBd));
        const findProvider = providers.findProvider(data.providers, {
            name,
            businessName,
            direction,
        });
        res.json({
            type: "successful",
            content: findProvider,
        });
    });

    app.use(router);
};
