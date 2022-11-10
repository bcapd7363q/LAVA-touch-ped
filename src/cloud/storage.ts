class Storage {
    AIR = async (resolve, reject) => {
        return {
            resolve: resolve,
            reject: reject,
            data: {
                name: "RadhaR",
                dob: 1992
            },
        };
    };
}

let storage = new Storage()

export default {
    air : await storage.AIR
};

