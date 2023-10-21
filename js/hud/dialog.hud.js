import { win77 } from "../dne-cli.js";
import { updHand } from "../cards/dom.cards.js";
import { closePopup } from "../popup/dom.popup.jquery.js";
import { setupTheday } from "../theday/setup.theday.js";
import { getMatchMakingOptionsMarkup, getEventParamsMarkup } from "../router/initMatchMaking.js";
import { updBalanceNode } from "./balance.hud.js";
import { callFriend } from "../router/callFriend.js";

const DIALOG_ID = {
    start: 0,
    oneMore: 1,
    options: 2
}

const DIALOG_QUESTIONS = [
    {
        question:
`<p>
Your lineup is awesome.<br>
It remains to choose budget:
</p>
 ${getEventParamsMarkup()}
 <p>
Ready to start event?
</p>
`,
        answers: [
            {
                text: "Yep",
                action: () => {
                    console.log("Lets Rave");
                    const budgetInput = document.querySelector("#event-budget");
                    const eventBudget = budgetInput.value !== "" && budgetInput.value > 0 ? budgetInput.value : 5000;
                    if (win77.game.player.balance.bankroll >= eventBudget) {
                        win77.game.player.balance.bankroll = win77.game.player.balance.bankroll - eventBudget;
                        updBalanceNode();
                        document.querySelector("body").classList.remove("ready-to-start");
                        setupTheday(eventBudget);
                        win77.router.matchmaking ? win77.router.nextStep() : "";
                    } else {
                        console.log("..but your bankroll is not enouch to start event");
                    }
                }
            },
            {
                text: "Few mins",
                action: () => {
                    console.log("Few mins");
                    closePopup();
                }
            }
        ]
    },
    {
        question: `<p>Seems you dont have enouch sound. Wanna give up or buy some more?</p>`,
        answersId: {
            giveUp: 0,
            oneMore: 1,
            callFriend: 2
        },
        answers: [
            {
                text: "Give up",
                action: (e) => {
                    console.log("Give up");
                    location.reload();
                }
            },
            {
                text: "1 more(500)",
                action: (e) => {
                    console.log("One more");
                    win77.putCardAtPlayersHand(1);
                    win77.getCostFromPlayer(500);
                    updHand();
                    win77.updBalanceHUD();
                    closePopup();
                }
            },
            {
                text: "Call friend",
                action: (e) => {
                    console.log("Call friend");
                    callFriend();
                }
            }
        ]
    },
    {
        question: getMatchMakingOptionsMarkup(),
        answersId: {
            start: 0,
            cancel: 1
        },
        answers: [
            {
                text: "Start",
                action: (e) => {
                    console.log("Start");
                    // todo применить настройки матча
                    win77.mm.setOptions();
                    win77.mm.start();
                    closePopup();
                    // save new options
                }
            },
            {
                text: "Cancel",
                action: (e) => {
                    console.log("Cancel");
                    closePopup();
                    // clean changes
                }
            }
        ]
    }
];

const dialogPopupAnswerMarkup = (answer) => `
<button class="js-answer shadow"><img src="https://raw.githubusercontent.com/mbledkowski/win98popup/master/outline.svg" alt="" width="66.9" height="15"><p>${answer.text}</p></button>
`;

const drawAnswers = (answers) => {
    let joint = ``;
    answers.forEach((answer) => {
        joint = joint + dialogPopupAnswerMarkup(answer);
    });
    return joint;
}

const initAnswersActions = (answers, dialogElement) => {
    const answersButtons = dialogElement.querySelectorAll(".js-answer");
    answersButtons.forEach((answerBtn, i) => {
        answerBtn.addEventListener("click", () => {
            answers[i].action();
        });
    });
}

const dialogPopupMarkup = (question, answers) => `
<section class="js-question win77-dialog__textarea">
    ${question}
</section>
<div class="buttons">
    ${drawAnswers(answers)}    
</div>
<div class="bar">
    <p>HUD</p>
    <button class="mfp-close win77-dialog__close shadow">
        <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="7px" viewBox="0 0 8 7" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z"/></svg>
    </button>
</div>
`;

const initDialogPopup = (index = 0) => {
    const parent = document.querySelector("#dialog-popup");
    const newNode = document.createElement("div");
    newNode.classList.add("win77-dialog");
    parent.innerHTML = '';
    newNode.innerHTML = dialogPopupMarkup(DIALOG_QUESTIONS[index].question, DIALOG_QUESTIONS[index].answers);
    initAnswersActions(DIALOG_QUESTIONS[index].answers, newNode);
    parent.appendChild(newNode);
}

const dialog = {
    DIALOG_ID,
    DIALOG_QUESTIONS,
    init: initDialogPopup
}

export { dialog };
