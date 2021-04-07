export const getLocation = () => {
    const p = new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(data => {
            resolve(data);
        }, ()=>{reject("Not able to get position")})
    })
    return p
}

export const getCurrentWeather = (lat, lon, callback) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b47c691c8a0f75f611910b34d9884500`)
    .then(data => data.json()) //stream=> stream.json()
    .then(data => {
        callback(data)
    })
}
