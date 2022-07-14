export const innerNight = (tempNight, skyNight, feelNight, getImage ) =>
    `<div class="weather__section">
    <div class="weather__temp-box">
        <p class="weather__time">Night</p>
        <p class="weather__temp">
            <span>${tempNight}</span> &#8451
        </p>
    </div>
    <div class="weather__sky-box">
        <p class="weather__sky">${skyNight}</p>
        <p class="weather__temp-feel">
            Feels like <span>${feelNight}</span> &#8451
        </p>
    </div>
    <div class="weather__icon-box">
        <img class="weather__icon" src="${getImage(skyNight)}"/>
    </div>
    </div>`;