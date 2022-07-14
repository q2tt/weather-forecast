export const innerEvening = (tempEvening, skyEvening, feelTempEvening, getImage ) =>
    `<div class="weather__section">
        <div class="weather__temp-box">
            <p class="weather__time">Evening</p>
            <p class="weather__temp">
                <span>${tempEvening}</span> &#8451
            </p>
        </div>
        <div class="weather__sky-box">
            <p class="weather__sky">${skyEvening}</p>
            <p class="weather__temp-feel">
                Feels like <span>${feelTempEvening}</span> &#8451
            </p>
        </div>
        <div class="weather__icon-box">
            <img class="weather__icon" src="${getImage(skyEvening)}"/>
        </div>
    </div>`;