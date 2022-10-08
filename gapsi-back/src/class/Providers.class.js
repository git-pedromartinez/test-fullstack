class Providers {
    constructor() {
        this.list = [];
    }

    addProvider(list, provider) {
        if (!this.findProvider(list, provider)) {
            this.list.push(provider);
            return this.list;
        }
        return false;
    }

    deleteProvider(list, provider) {
        this.list = list;
        if (this.findProvider(list, provider)) {
            this.list = this.list.filter((p) => p.name !== provider.name);
            return this.list;
        }
        return false;
    }

    findProvider(list, provider) {
        this.list = list;
        for (let index = 0; index < this.list.length; index++) {
            const p = this.list[index];
            if (p.name === provider.name) {
                return true;
            }
        }
        return false;
    }
}

module.exports = Providers;
