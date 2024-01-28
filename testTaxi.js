const puppeteer = require('puppeteer');

const urlTest = 'https://qa-routes.praktikum-services.ru/'

async function testTaxi(){console.log('Запуск браузера');
const browser = await puppeteer.launch({headless: false, slowMo: 100,});

console.log('Создаем вкладку');
const page = await browser.newPage();

console.log('Переходим по ссылке');
await page.goto (urlTest);

console.log('Вводим минуты')
const timeMin = await page.$('#form-input-minute');
await timeMin.type('06');

console.log('Вводим час')
const timeHour = await page.$('#form-input-hour');
await timeHour.type('12');

console.log('Вводим адрес отправления')
const timeGo = await page.$('#form-input-from');
await timeGo.type('Усачева, 3');

console.log('Вводим адрес прибытия')
const timeTu = await page.$('#form-input-to');
await timeTu.type('Фрунзенская набережная, 46');

console.log('Клик свой')
const clikMine = await page.$('#form-mode-custom')
await clikMine.click();

console.log('Клик такси');
const clicTaxi = await page.$('#from-type-taxi')
await clicTaxi.click();

console.log('Ожитдаем расчет результата');
await page.waitForSelector('#result-time-price');

console.log('Ожидаем результат');
const text = await page.$eval('#result-time-price', element => element.textContent);

console.log('ОР и ФР');
if (text.startsWith('Такси')){
    console.log('Текст содержит ' +text);
} else {
    console.log('Ошибка');
}
 

console.log('Закрытие браузера');
    await browser.close();
}

testTaxi();