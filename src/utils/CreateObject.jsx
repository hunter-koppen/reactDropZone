export const createObject = async entityName => {
    return new Promise((resolve, reject) => {
        mx.data.create({
            entity: entityName,
            callback: function (newObj) {
                console.log("Object created on server");
                newObj;
                resolve(newObj);
            },
            error: function (e) {
                console.error("Could not commit object:", e);
                reject();
            }
        });
    });
};
