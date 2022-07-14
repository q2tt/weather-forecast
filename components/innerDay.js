export const innerDay = (tempDay, skyDay, feelTempDay, getImage ) =>
 `<div class="weather__section">
        <div class="weather__temp-box">
            <p class="weather__time">Day</p>
            <p class="weather__temp">
                <span>${tempDay}</span> &#8451
            </p>
        </div>
        <div class="weather__sky-box">
            <p class="weather__sky">${skyDay}</p>
            <p class="weather__temp-feel">
                Feels like <span>${feelTempDay}</span> &#8451
            </p>
        </div>
         <div class="weather__icon-box">
             <img class="weather__icon" src="${getImage(skyDay)}"/>
         </div>
    </div>`;