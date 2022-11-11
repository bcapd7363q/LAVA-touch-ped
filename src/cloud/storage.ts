class Storage {
    AIR = async (resolve, reject) => {
        let date = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return {
            resolve: resolve,
            reject: reject,
            data: {
                name: "RadhaR",
                date: date.getDate() ,
                day: days[date.getDay()] ,
                wiki: days,
                month: date.getMonth(),
                year: date.getFullYear(),
                hour: date.getHours(),
                minutes: date.getMinutes(),
                second: date.getSeconds(),
                millSecond:date.getMilliseconds(),
                timeZone:date.getTimezoneOffset()
            },
        };
    };
}

let storage = new Storage()

export default {
    air: await storage.AIR
};

