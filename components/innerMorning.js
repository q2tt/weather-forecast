export const innerMorning = (tempMorning, skyMorning, feelTempMorning, getImage ) =>
    `<div class="weather__section">
        <div class="weather__temp-box">
            <p class="weather__time">Mornig</p>
            <p class="weather__temp">
                <span>${tempMorning}</span> &#8451
            </p>
        </div>
        <div class="weather__sky-box">
            <p class="weather__sky">${skyMorning}</p>
            <p class="weather__temp-feel">
                Feels like <span>${feelTempMorning}</span> &#8451
            </p>
        </div>
        <div class="weather__icon-box">
            <img class="weather__icon" src="${getImage(skyMorning)}"/>
        </div>
    </div>`;