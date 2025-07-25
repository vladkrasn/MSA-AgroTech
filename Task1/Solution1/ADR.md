# Solution 1

## Автор: Владимир Красночуб

### Дата: 20/07/2025

### Функциональные требования

|**№**|**Действующие лица или системы**|**Use Case**|**Описание**|
| :-: | :- | :- | :- |
|1|Менеджер фермы|Менеджмент фермы|Получает все релевантные данные, которые нужны ему для выполнения day-to-day операций|
|2|Ферма|Сбор и отсылка данных, выполнение базовых операций|Собирает данные с различных датчиков/камер и отсылает их в Livestock Management System|
|3|Livestock Management System|Выполнение сложных операций|Анализирует данные (в том числе нейросетями), предоставляет цифровую инфраструктуру которой пользуется менеджер фермы (API/WebApp). Посылает релевантные для анализов данные в остальную систему AgTech|

### Нефункциональные требования

|**№**|**Требование**|
| :-: | :- |
|1|Расширяемость|
|2|Независимость различных частей|
|3|Простота развертки|

### Решение

[Диаграмма](./C1.md)

В данном решении предлагается иметь минимум функционала на самих фермах, они, по большей части, просто посылают данные на центральный сервер, и большую часть задач решать на центральном сервере.
Это обеспечивает стандартизированность подходов между фермами (т.к. большинство логики находится на центральной ноде), легкость установки, расширения и менеджмента (новая ферма = минимум требований к ее технической базе).

### Альтернативы

Альтернатива - сосредоточить больше задач на самих фермах локально, этот подход подробнее разобран [тут](../Solution2/ADR.md).

#### Недостатки, ограничения, риски

Центральным недостатком данного подхода является зависимость каждой фермы от центральной ноды системы - Livestock Management System. Такой подход более чувствителен к помехам связи (больше функций системы, нужных менеджеру фермы, находятся далеко), а также негативно сказывается на независимости различных частей - обслуживая нужды Фермы 2, центральная система может нечаянно изменить что-то в своих обязанностях по отношению к Ферме 1.
