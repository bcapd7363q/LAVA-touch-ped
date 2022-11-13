import STORAGE from './storage'
let storage = new STORAGE();


function ram() {
    return {
        data: storage.RAM
    }
}

 async function processor() {
    return {
        data: storage.PROCESSOR,

        system: await storage.SYSTEM('all', 'try')
            .then(res => { return res })
            .catch(error => { return error })
            .finally(() => { return "connected.." })
    }
}
 

function data() {
    return {
        data: storage.DATA
    }
}



export {
    ram,
    processor,
    data
}
