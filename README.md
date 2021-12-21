# Тестовое задание

## Задание 3a:

```
Разработать программу, которая на основании данных ресурса https://openweathermap.org будет выводить слудующие данные для Вашего города:

1) День с минимальной разницей "ощущаемой" и фактической температуры ночью (с указанием разницы в градусах Цельсия).

2) Максимальную продолжительность светового дня (как рзницу между закатом и рассветом) за ближайшие 5 дней (включая текущий), с указанием даты.
```

## Задание 3b:

Разработать приложение, которое, конвертирует валюты через рубли по курсу ЦБ, определяет стоимость одной норвежской кроны в венгерских форинтах.

(Вен. форинты -> Рос. рубли -> Норв. кроны)

Курсы запросить с сайта: http://www.cbr.ru/scripts/XML_daily.asp

# Запуск приложения

Работающее приложение размещено на хостинге Heroku и доступно по ссылке: https://test-tasks-weather-and-convert.herokuapp.com

Если приложение по ссылке, по каким либо причинам не работает, можно сделать локальную копию и запустить у себя на компьютере.

## Клонируем репозиторий

```
cmd: git clone https://github.com/wfrsnk/test-task-weather.git
```

## Восстанавливаем зависимости из корня проекта

```
cmd: npm i
```

## Запускаем локальный сервер

```

cmd: node .

или

cmd: npm run dev

```

## Открываем http://localhost/ (PORT по умолчанию 80)
