export const getImage = (val) => {
    const value = val.toLowerCase();
    const skyImages = {
        sunny: 'https://img.icons8.com/plasticine/100/000000/smiling-sun.png',
        'partly cloudy': 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-weather-vacation-planning-adventure-flaticons-lineal-color-flat-icons.png',
        "light rain": "https://img.icons8.com/officel/16/000000/rainy-weather.png",
        "Light drizzle": "https://img.icons8.com/external-color-outline-adri-ansyah/64/000000/external-weather-weather-color-outline-adri-ansyah-75.png",
        "patchy rain possible": "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-weather-digital-nomading-relocation-flaticons-lineal-color-flat-icons.png",
        "light rain shower": 'https://img.icons8.com/office/40/000000/light-rain-2.png"',
        "fog": "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-foggy-weather-flaticons-lineal-color-flat-icons-5.png",
        "mist": "https://img.icons8.com/plasticine/100/000000/foggy-night-1.png",
        "clear": "https://img.icons8.com/external-color-outline-adri-ansyah/64/000000/external-weather-weather-color-outline-adri-ansyah-68.png",
    }
    const defaultImage = 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-weather-vacation-planning-adventure-flaticons-lineal-color-flat-icons.png'
    const image = skyImages[value] ?? defaultImage;
    return image;

};