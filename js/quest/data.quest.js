const QUEST_DATA_SAMPLE = {
    title: "",
    descr: "",
    checkpointsArr: []
};

const ARE_YOU_HUMAN_MESSAGE = `Ви людина? Просимо вибачення за плутанину, але ми не можемо точно визначити, ви людина чи сценарій. Будь ласка, не сприймайте це особисто. Боти та скрипти сьогодні можуть бути надзвичайно реалістичними!`;
const NEXT_CHECKPOINT_MESSAGE = `Новий чекпоінт досягнуто. Можеш відпочити і подумати, що робити далі`;

const acidFridayCheckpointsStroke =
    `16 Вызвать таксу до Ретромагаза
Забрать свой подарок
Добраться до студии
Установить игру на консоль`
;

const newTurnCheckpointsStroke =
    `Войти в «Тотентанц»
Поговорить с главарем мальстремовцев
Следовать за Патрицией
Поговорить с Нэнси
Отвести Нэнси в сторону, чтобы поговорить
(Дополнительное) Зайти в туалет в «Тотентанце»
(Дополнительное) Выйти через окно
(Дополнительное) Выйти на балкон
Добраться до лифта и покинуть «Тотентанц»
Проводить Нэнси к машине
Позвонить Керри
Добраться до особняка Денни
Найти Денни и Генри
(Дополнительное) Воспользоваться домофоном у особняка Денни
Поговорить с Керри
Поговорить с Денни и Генри
Подождать, пока Нэнси позвонит на следующий деньВойти в «Тотентанц»
Поговорить с главарем мальстремовцев
Следовать за Патрицией
Поговорить с Нэнси
Отвести Нэнси в сторону, чтобы поговорить
(Дополнительное) Зайти в туалет в «Тотентанце»
(Дополнительное) Выйти через окно
(Дополнительное) Выйти на балкон
Добраться до лифта и покинуть «Тотентанц»
Проводить Нэнси к машине
Позвонить Керри
Добраться до особняка Денни
Найти Денни и Генри
(Дополнительное) Воспользоваться домофоном у особняка Денни
Поговорить с Керри
Поговорить с Денни и Генри
Подождать, пока Нэнси позвонит на следующий день`
;

const bossDeadCheckpointsStroke =
    `[Opt]Поповнити боєзапас
[Opt]Домовитись дипломатично
[або]Перебити членів банди
Піти від переслідування`;

const dealWithMoneyCheckpointsStroke =
    `[Opt]Арендувати більше апаратури
    [Opt]Покликати друзів
    Зібрати лайнап
    Почати івент`;

const bossDeadAchievementsArr = [
    {
        id: "steel-only",
        name: "Тільки сталь",
        descr: "Використай лише холодну зброю",
        reward: "+10%"
    },
    {
        id: "boss-only",
        name: "Тільки босс",
        descr: "Знищ лише ватажка банди",
        reward: "+10%"
    }
];

const MINIMAP = {
    bossDead: "img/img-map--boss-dead.png",
    sheWantsRevenge: "img/img-map--she-wants-revenge.png"
}

export { ARE_YOU_HUMAN_MESSAGE, NEXT_CHECKPOINT_MESSAGE, acidFridayCheckpointsStroke, newTurnCheckpointsStroke, bossDeadCheckpointsStroke, bossDeadAchievementsArr, dealWithMoneyCheckpointsStroke, MINIMAP };
