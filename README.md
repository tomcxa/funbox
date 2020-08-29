[![Build status](https://ci.appveyor.com/api/projects/status/mu3f96194ih5j747?svg=true)](https://ci.appveyor.com/project/tomcxa/funbox)
# [Ссылка на второе задание](https://tomcxa.github.io/funbox)  

# Ответы на вопросы Level01

## Ответ на Q1:
Хорошая верстка с точки зрения
* пользователя - ничего не должно "разъежаться";
* менеджера проекта - семантика для поисковой выдачи и ничего не должно "разъежаться";
* дизайнера - пиксель перфект (он же тютелька в тютельку);
* верстальщика - у верстальщика верстка хорошая всегда:), а так валидатор пройден, уже не плохо;
* клиентского программиста - ctrl-c, ctrl-v разных частей верстки и чтобы при этом все работало;
* серверного программиста - этому молодому человеку некогда думать о верстке;

## Ответ на Q2:
Если я правильно понял вопрос, то основная проблема (она же особенность) кроется в стилях:
* мертвый код;
* коллизия имен стилей;
* и, возможно, что-то еще;

По опыту верстки: в начале моего пути это БЭМ наименования классов в верстке + препроцессоры.
Когда перешел на реакт, начал использовать библиотеку CSS-in-JS (styled-components), которая,
на равне с CSS-modules, решает проблему коллизии имен.
Опыта верстки больших проектов.
Те проекты, которые представлены в [Ответе на Q8](#q8), не считаю большими.

## Ответ на Q3:
Начну с того, что требовалось поддерживать современные браузеры и устройства с шириной экрана от 360р.
Основные особенности тут:
* медиа запросы и количество контрольных (обычно, ширина экрана);
* использование относительных единиц измерения и технологии flexbox для резиновой верстки;
* для оптимизации, верстака по патерну "сначала мобильные";
Опыт адаптивной версктки был на мелких задачках учебных и на итоговом лендинге, сверстаном по
принципу "сначала мобильные": https://tomcxa.github.io/adaptive__diplom-surface/

В качестве проверки результата использовался браузерный devtools и телефон на базе андроид.
В качестве инструментов редактор с настроенной инфраструктурой (webpack+devserver).

## Ответ на Q4:
Конечно же редакторы кода (я использую Visual Studio Code) и расширения к ним. Фронтенд инфраструктура
типа webpack+babel. Ну и конечно, я в совершенстве владею навыком "console.log()" 👍.
Ну и другими возможностями devtools.

## Ответ на Q5:
Я воспользуюсь DevTools, а конкретно исследовать элемент и там уже выяснять в чем проблема.
С такими проблемами не сталкивался, но знание инструмента разработчика
помогает мне филигранно убирать лишние банеры со страниц некоторых сайтов.

## Ответ на Q6:
В зависимости от абстоятельств либо поинтересуюсь у дизайнера, либо начну импровизировать
(как учил капитан Джек Воробей) основываясь на стайл гайде проекта, если это возможно.

## Ответ на Q7:
Ресурсы:
* онлайн университет нетология https://netology.ru/programs/front-end (закончил программу);
* много youtube каналов (в том числе и на инглише);
* мой любимый youtube канал: https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw;
* сайты типа habr.com, medium.com, https://developer.mozilla.org/,
  https://learn.javascript.ru/;
* интерактивные курсы типа codecademy.com (закончил курсы по python, html+css);
* книги: Выразительный JavaScript,
  Вы не знаете JS:
  * типы и грамматические конструкции
  * замыкания и объекты
  * асинхронность и производительность
* поисковики;

Направления развития: JS-программирование (frontend-разработчик, на ближайшее время react).

Еще что интересно (можно и как область знаний рассматривать, применяемых на практике):
* спорт (в основном футбол);
* компьютерные игры;
* кино, сериалы;
* современные гаджеты и технологии;
* инвестиции в ценные бумаги;
* много всякого научнопознавательного на ютуб смотрю (например канал Физика от Побединского например);
* возможно что-то еще...

## Ответ на Q8: <a name="q8"></a>
Опыт разработки около года, приближенный к комерческому с использованием инфраструктуры типа git, webpack, ci/cd и т.д. Закончил обучение, по программе "frontend-разработчик с нуля", онлайн университета "НЕТОЛОГИЯ" (подробнее с программой можно ознакомиться по ссылке: https://netology.ru/programs/front-end).

Примеры проектов:
- Магазин обуви (React): https://tomcxa.github.io/bosa-noga-frontend/
- Приложение для контроля финансов (JS): https://tomcxa.github.io/bjs-diplom/
- Доска типа Trello (JS, DnD): https://tomcxa.github.io/CanbanDesk/
- Загрузчик картинок (JS, DnD) + свой сервер поэтому возможны баги при первой загрузке... : https://tomcxa.github.io/imgLoader/
- Тудушка (JS, удаление, добавление, редактирование, изменение статуса, просмотр подробностей) + свой сервер поэтому возможны баги при первой загрузке... : https://tomcxa.github.io/HelpDesk/
- Адаптивная верстка (HTML, CSS): https://tomcxa.github.io/adaptive__diplom-surface/
- И многое другое на странице гитхаб https://github.com/tomcxa

Не пью, не курю!


### Спасибо за внимание!
