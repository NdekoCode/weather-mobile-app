export const formatTime = (time=Date.now())=>{
    const date = new Date(time);
    const hours = String(date.getHours()).padStart(2,0);
    const minutes =String( date.getMinutes()).padStart(2,0);
    const timeFormat = `${hours}:${minutes}`;
    return timeFormat;
}