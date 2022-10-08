const { develop } = require("../configs/api.config.json");

//port
process.env.PORT = develop.port || process.env.PORT;
process.env.BD = develop.bd;
process.env.BD_INITIAL = develop.bd_inital;
