import {innerNight} from "./innerNight.js";
import {innerEvening} from "./innerEvening.js";
import {innerDay} from "./innerDay.js";
import {innerMorning} from "./innerMorning.js";
import {getImage} from "./getImage.js";
import {getEl} from "../script.js";

let store = {};


export const getWeatherBox = (data) => {
   
    const { forecastday } = data.forecast
    const { localtime } = data.location

    store = {
        ...store,
        forecastday,
        localtime,
    };

    let localTime = localtime.substring(11, 13).replace(/[^0-9]/g, "");
    let inner;
    let innerDate = `<div class="weather__section-day">
            <p>today</p>
        </div>`;
    for (let i = 0; i < store.forecastday.length; i++) {
        let fDay = forecastday[i];
         getEl('weather').innerHTML += getValue(fDay, i, localTime, innerDate)
    }
}

function getValue(fDay, i, localTime, innerDate) {
    const date = fDay.date;
    const tempMorning = fDay.hour[7].temp_c;
    const feelTempMorning = fDay.hour[7].feelslike_c;
    const skyMorning = fDay.hour[7].condition.text;
    const tempDay = fDay.hour[13].temp_c;
    const feelTempDay = fDay.hour[13].feelslike_c;
    const skyDay = fDay.hour[13].condition.text;
    const tempEvening = fDay.hour[19].temp_c;
    const feelTempEvening = fDay.hour[19].feelslike_c;
    const skyEvening = fDay.hour[19].condition.text;
    const tempNight = fDay.hour[23].temp_c;
    const feelNight = fDay.hour[23].feelslike_c;
    const skyNight = fDay.hour[23].condition.text;

    if (i === 0) {
        if (localTime >= 19) {
            return `
                <div class="weather__box">
                    ${innerDate}
                    ${innerNight(tempNight, skyNight, feelNight, getImage )}
                </div>`;
        } else if (localTime >= 13 && localTime < 19) {
            return  `
                <div class="weather__box">
                    ${innerDate}
                    ${innerEvening(tempEvening, skyEvening, feelTempEvening, getImage )}
                    ${innerNight(tempNight, skyNight, feelNight, getImage )}
                </div>`;
        } else if (localTime >= 7 && localTime < 13) {
            return  `
                <div class="weather__box">
                    ${innerDate}
                    ${innerDay(tempDay, skyDay, feelTempDay, getImage)}
                    ${innerEvening(tempEvening, skyEvening, feelTempEvening, getImage )}
                    ${innerNight(tempNight, skyNight, feelNight, getImage )}
                </div>`;
        } else {
            return  `
                <div class="weather__box">
                    ${innerDate}
                    ${innerMorning(tempMorning, skyMorning, feelTempMorning, getImage )}
                     ${innerDay(tempDay, skyDay, feelTempDay, getImage)}
                    ${innerEvening(tempEvening, skyEvening, feelTempEvening, getImage )}
                    ${innerNight(tempNight, skyNight, feelNight, getImage )}
                </div>`;
        }
    } else {
        return ` <div class="weather__box">
            <div class="weather__section-day">
                <p>${date}</p>
            </div>
            ${innerMorning(tempMorning, skyMorning, feelTempMorning, getImage ) }
            ${innerDay(tempDay, skyDay, feelTempDay, getImage)}
            ${innerEvening(tempEvening, skyEvening, feelTempEvening, getImage )}
            ${innerNight(tempNight, skyNight, feelNight, getImage )}
            </div>`;
    }
}