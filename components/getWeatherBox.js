import {innerNight} from "./innerNight.js";
import {innerEvening} from "./innerEvening.js";
import {innerDay} from "./innerDay.js";
import {innerMorning} from "./innerMorning.js";
import {getImage} from "./getImage.js";
import {getEl} from "../script.js";

let store = {};


export const getWeatherBox = (data) => {
    const  {
        forecast: { forecastday },
        location: { localtime },
    } = data;
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
        const date = forecastday[i].date;
        const tempMorning = forecastday[i].hour[7].temp_c;
        const feelTempMorning = forecastday[i].hour[7].feelslike_c;
        const skyMorning = forecastday[i].hour[7].condition.text;
        const tempDay = forecastday[i].hour[13].temp_c;
        const feelTempDay = forecastday[i].hour[13].feelslike_c;
        const skyDay = forecastday[i].hour[13].condition.text;
        const tempEvening = forecastday[i].hour[19].temp_c;
        const feelTempEvening = forecastday[i].hour[19].feelslike_c;
        const skyEvening = forecastday[i].hour[19].condition.text;
        const tempNight = forecastday[i].hour[23].temp_c;
        const feelNight = forecastday[i].hour[23].feelslike_c;
        const skyNight = forecastday[i].hour[23].condition.text;

        if (i === 0) {
            if (localTime >= 19) {
                inner = `
                <div class="weather__box">
                    ${innerDate}
                    ${innerNight(tempNight, skyNight, feelNight, getImage )}
                </div>`;
            } else if (localTime >= 13 && localTime < 19) {
                inner = `
                <div class="weather__box">
                    ${innerDate}
                    ${innerEvening(tempEvening, skyEvening, feelTempEvening, getImage )}
                    ${innerNight(tempNight, skyNight, feelNight, getImage )}
                </div>`;
            } else if (localTime >= 7 && localTime < 13) {
                inner = `
                <div class="weather__box">
                    ${innerDate}
                    ${innerDay({tempDay, skyDay, feelTempDay})}
                    ${innerEvening(tempEvening, skyEvening, feelTempEvening, getImage )}
                    ${innerNight(tempNight, skyNight, feelNight, getImage )}
                </div>`;
            } else {
                inner = `
                <div class="weather__box">
                    ${innerDate}
                    ${innerMorning(tempMorning, skyMorning, feelTempMorning, getImage )}
                     ${innerDay(tempDay, skyDay, feelTempDay, getImage)}
                    ${innerEvening(tempEvening, skyEvening, feelTempEvening, getImage )}
                    ${innerNight(tempNight, skyNight, feelNight, getImage )}
                </div>`;
            }
        } else {
            inner = ` <div class="weather__box">
            <div class="weather__section-day">
                <p>${date}</p>
            </div>
            ${innerMorning(tempMorning, skyMorning, feelTempMorning, getImage ) }
            ${innerDay(tempDay, skyDay, feelTempDay, getImage)}
            ${innerEvening(tempEvening, skyEvening, feelTempEvening, getImage )}
            ${innerNight(tempNight, skyNight, feelNight, getImage )}
            </div>`;
        }
        getEl("weather").innerHTML += inner;
    }
}