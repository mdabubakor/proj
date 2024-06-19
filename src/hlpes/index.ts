export const getProducts = async ()=>{
    const res = await fetch ("https://jsonserver.reactbd.com/amazonpro",{
        cache:"no-cache"
    })
    if(!res.ok){
        throw new Error ("Faild to fatch Data")
    }
    return res.json();

} 
export const getphones = async ()=>{
    const res = await fetch ("https://jsonserver.reactbd.com/phone",{
        cache:"no-cache"
    })
    if(!res.ok){
        throw new Error ("Faild to fatch Data")
    }
    return res.json();

} 
export const getphonecases = async ()=>{
    const res = await fetch ("https://jsonserver.reactbd.com/phonecase",{
        cache:"no-cache"
    })
    if(!res.ok){
        throw new Error ("Faild to fatch Data")
    }
    return res.json();

}
export const getwhtaches = async ()=>{
    const res = await fetch ("https://jsonserver.reactbd.com/watch",{
        cache:"no-cache"
    })
    if(!res.ok){
        throw new Error ("Faild to fatch Data")
    }
    return res.json();

}
export const getaccessories = async ()=>{
    const res = await fetch ("https://jsonserver.reactbd.com/accessories",{
        cache:"no-cache"
    })
    if(!res.ok){
        throw new Error ("Faild to fatch Data")
    }
    return res.json();

}