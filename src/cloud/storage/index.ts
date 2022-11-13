interface MEMORY{
    RAM: number,
    PROCESSOR: number,
    DATA:string,
    SYSTEM:  ()=> void
}

export default class STORAGE<MEMORY> {
    RAM = "30";
    PROCESSOR = "100";
    DATA = "GB";
    constructor() {
        
        
    }

    SYSTEM = async (resolve, reject)=>{
        let date = new Date();
        
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
         switch (resolve) {
            case "all":
                return{
                    name: "RadhaR",
                    date: date.getDate(),
                    day: days[date.getDay()],
                    wiki: days,
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    hour: date.getHours(),
                    minutes: date.getMinutes(),
                    second: date.getSeconds(),
                    millSecond: date.getMilliseconds(),
                    timeZone: date.getTimezoneOffset()
                }
        
            default:
                throw (reject)
        }
         
        console.log('test123');
        
        

    }
}

