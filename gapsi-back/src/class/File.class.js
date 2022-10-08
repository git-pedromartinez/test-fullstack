const fs = require("fs");

class File {
    constructor() {}

    read(pathFile) {
        var content = "";
        try {
            content = fs.readFileSync(pathFile).toString();
        } catch (e) {
        } finally {
        }
        return content;
    }

    writte(pathFile, data) {
        try {
            fs.writeFileSync(pathFile, data);
        } catch (e) {
        } finally {
        }
        return this.read(pathFile);
    }
}

module.exports = File;
