const puppeteer = require('puppeteer');

const urlTest = 'https://ya.ru/'

async function testTaxi(){console.log('Запуск браузера');
const browser = await puppeteer.launch({headless: false, slowMo: 100,});

console.log('Создаем вкладку');
const page = await browser.newPage();

console.log('Переходим по ссылке');
await page.goto (urlTest);

console.log('Вводим запрос')
const timeRequest = await page.$('#text');
await timeRequest.type('Погода в москве');

console.log('Клик кнопки Найти')
const clikMine = await page.$('button[class="search3__button mini-suggest__button"]')
await clikMine.click();

console.log('Ожтдаем переход по запросу');
const result = await page.waitForSelector('div[class="main__center"]');


console.log('ОР и ФР');
if (result == null) {
    console.log('Нет результата "Ошибка!"');
} else {
    console.log('Результат найден');
};

console.log('Закрытие браузера');
    await browser.close();

};

testTaxi()