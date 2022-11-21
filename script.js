let html_questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robin Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": "3",
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": "3",
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt; ",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right_answer": "2",
    },
    {
        "question": "Wie stellt man Text man BESTEN fett dar?",
        "answer_1": "&lt;strong&gt; ",
        "answer_2": "CSS nutzen",
        "answer_3": "&lt;bold&gt;",
        "answer_4": "&lt;b&gt;",
        "right_answer": "1",
    },
    {
        "question": "Welches Atribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": "1",
    },
    {
        "question": "Wie wählst du alle Elemente vom Type &lt;a&gt; mit dem attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a < title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": "1",
    },
    {
        "question": "Wie definiert man in Javascript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": "4",
    }
];

let css_questions = [
    {
        "question": "Was ist keine gültige Schreibweise für die Farbe Weiß?",
        "answer_1": "rgba(255,255,255,1)",
        "answer_2": "#FFF",
        "answer_3": "white",
        "answer_4": "#ff",
        "right_answer": "4",
    },
    {
        "question": "top positioniert ein HTML-Element von oben. Mit welchem Wert für position funktioniert top nicht?",
        "answer_1": "absolute",
        "answer_2": "relative",
        "answer_3": "static",
        "answer_4": "fixed",
        "right_answer": "3",
    },
    {
        "question": "Was ist nicht das gleiche wie margin: 10px?",
        "answer_1": "margin: 10px 10px 10px",
        "answer_2": "margin: 10",
        "answer_3": "margin: 10px 10px",
        "answer_4": "margin: 10px 10px 10px 10px",
        "right_answer": "2",
    },
    {
        "question": "zoom existiert als Eigenschaft schon lange, ist aber erstmalig in CSS 3 Teil vom offiziellen W3C-Standard. Welcher Browser unterstützt zoom jedoch noch nicht?",
        "answer_1": "Safari",
        "answer_2": "Internet Eplorer",
        "answer_3": "Google Chrome",
        "answer_4": "Firefox",
        "right_answer": "4",
    },
    {
        "question": "Die Eigenschaft display hat seit CSS 3 neue Werte. Welcher ist hinzugekommen?",
        "answer_1": "inline-flex",
        "answer_2": "grid-row",
        "answer_3": "columns",
        "answer_4": "table-cell",
        "right_answer": "1",
    },
    {
        "question": "»Cascading Style Sheets« bedeutet, dass mehrere CSS-Regeln hintereinander interpretiert werden. Sie können in mehreren CSS-Dateien stecken. Welche Art von Stylesheets gibt es nicht?",
        "answer_1": "User/Nutzer-Stylesheet",
        "answer_2": "Autoren-Stylesheet",
        "answer_3": "Browser-Stylesheet",
        "answer_4": "Layout-Stylesheet",
        "right_answer": "4",
    },
    {
        "question": "Welche Eigenschaft gibt es bereits seit CSS 2.1??",
        "answer_1": "background-clip",
        "answer_2": "opacity",
        "answer_3": "quotes",
        "answer_4": "text-shadow ",
        "right_answer": "3",
    }
];

let js_questions = [
    {
        "question": "Wer hat JavaScript geschaffen?",
        "answer_1": "Microsoft",
        "answer_2": "Sun Microsystems",
        "answer_3": "Oracle",
        "answer_4": "Netscape",
        "right_answer": "4",
    },
    {
        "question": "Wie lange hat Brendan Eich gebraucht, um JavaScript in seiner Urfassung zu schreiben?",
        "answer_1": "10 Tage",
        "answer_2": "2 Wochen",
        "answer_3": "2 Monate",
        "answer_4": "10 Monate",
        "right_answer": "1",
    },
    {
        "question": "JavaScript hieß nicht immer so. Unter welchen anderen Namen wurde es veröffentlicht?",
        "answer_1": "Latte",
        "answer_2": "Mocha",
        "answer_3": "LiveScript",
        "answer_4": "BScript",
        "right_answer": "2",
    },
    {
        "question": "Welches der folgenden Wörter ist kein JavaScript Keyword?",
        "answer_1": "default",
        "answer_2": "finally",
        "answer_3": "throw",
        "answer_4": "undefined",
        "right_answer": "4",
    }
];

let java_questions = [
    {
        "question": "Welche dieser Methoden besitzt die String-Klasse nicht?",
        "answer_1": "equals",
        "answer_2": "append",
        "answer_3": "matches",
        "answer_4": "concat",
        "right_answer": "2",
    },
    {
        "question": "Wie wandelt man einen String (str) in einen int um?",
        "answer_1": "int a = str;",
        "answer_2": "int a = str.toInt();",
        "answer_3": "int a = new StringBuffer(str).capacity()",
        "answer_4": "int a = Integer.parseInt(str);",
        "right_answer": "4",
    },
    {
        "question": "Wo ist der Unterschied zwischen i++ und ++i?",
        "answer_1": "Beide erhöhen i um 1, es gibt keinen Unterschied.",
        "answer_2": "i++ erhöht i um 1, ++i vermindert i um 1.",
        "answer_3": "i++ erhöht i um 1, ++i erhöht i um 2",
        "answer_4": "Beide erhöhen i um 1, der Rückgabewert von i++ ist aber der vorherige Wert, während der Rückgabewert von ++i der neue Wert ist.",
        "right_answer": "4",
    },
    {
        "question": "Durch welchen Operator lässt man eine Klasse von einer anderen (normalen Klasse) vererben?",
        "answer_1": "Extends",
        "answer_2": "Inherits",
        "answer_3": "Instanceof",
        "answer_4": "Implements",
        "right_answer": "1",
    },
    {
        "question": "Welche dieser Methoden sollte man bei Komponenten überlagern, um sie zu zeichnen?",
        "answer_1": "Draw(Graphics g)",
        "answer_2": "Paint(Graphics g)",
        "answer_3": "Update(Graphics g)",
        "answer_4": "CreateUI(JComponent c)",
        "right_answer": "2",
    },
    {
        "question": "Das GlassPane eines JFrame befindet sich in dem...",
        "answer_1": "RootPane",
        "answer_2": "MenuBar",
        "answer_3": "ContentPane",
        "answer_4": "LayeredPane",
        "right_answer": "1",
    },
    {
        "question": "Wie kann man ein externes Programm ausführen? (str ist der Pfad des Programms)",
        "answer_1": "System.load(str);",
        "answer_2": "Runtime.getRuntime().exec(str);",
        "answer_3": "Runtime.start(str);",
        "answer_4": "new File(str).startProcess();",
        "right_answer": "2",
    }
];

let currentQuestion = 0;
let rigthAnswered = 0;

let audio_correct = new Audio('audio/correct.mp3');
let audio_wrong = new Audio('audio/wrong.mp3');
let audio_succes = new Audio ('audio/succes.mp3')

let html = false;
let css = false;
let js = false;
let java = false;


function init() {
    loadHtml();
};

function loadHtml() {//Den HTML Bereich aufrufen und die HTML-Startseite anezeigen
    resetAllSides();
    document.getElementById('quiz-html').classList.add('white');
    resetAnswerButton();
    document.getElementById('start-side-html').style = '';
    currentQuestion = 0;
    rigthAnswered = 0;
};

function startHtmlQuiz() {//Das HTML-Quiz beginnen
    resetAllHtmlSide();
    showQuestionHtml();
};

function showQuestionHtml() {//Die HTML Fragen anzeigen 
    let percent = currentQuestion / html_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    html = true;
    document.getElementById('all-questions').innerHTML = html_questions.length;

    if (gameIsOverHtml()) {//Die letzte Seite anzeigen lassen mit dem Ergebnis
        showLastHtmlSide();
    } else {//Die nächste Frage mit den möglichen Antworten laden
        showNextHtmlquestion();
    };
};

function gameIsOverHtml() {
    return currentQuestion >= html_questions.length;
}

function showNextHtmlquestion() {
    document.getElementById('answer-area').style = '';//Die Fragenseite von HTML anzeigen
    let question = html_questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];// Die jeweilige Frage anzeigen
    document.getElementById('answer_1').innerHTML = question['answer_1'];// Die jeweiligen Antwortmöglichkeiten anzeigen
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('answer_1').parentNode.classList.remove('poniter-events');//Die sperre um mehrer Antworten anzuklicken aufheben
    document.getElementById('answer_2').parentNode.classList.remove('poniter-events');
    document.getElementById('answer_3').parentNode.classList.remove('poniter-events');
    document.getElementById('answer_4').parentNode.classList.remove('poniter-events');
    pauseAudio();
};

function showLastHtmlSide() {//Die letze Seite mit dem Erebniss anzeigen
    resetAllHtmlSide();
    document.getElementById('end-screem').style = '';
    document.getElementById('replay-botton-html').style = '';
    document.getElementById('complete-text').innerHTML = '<b>Complete<br>HTML Quiz<b>';
    document.getElementById('all-questions-result').innerHTML = html_questions.length;
    document.getElementById('all-right-aswer').innerHTML = rigthAnswered;
    audio_succes.play();
};

function restartHtmlQuiz() {//Das HTML Quiz wieder erneut starten
    resetAllHtmlSide();
    document.getElementById('question-body').style = '';
    currentQuestion = 0;
    rigthAnswered = 0;
    showQuestionHtml();
    pauseAudio();   
};

function loadCss() {//Den CSS Bereich aufrufen
    resetAllSides();
    document.getElementById('quiz-css').classList.add('white');
    resetAnswerButton();
    document.getElementById('start-side-css').style = '';
    currentQuestion = 0;
    rigthAnswered = 0;
};


function startCssQuiz() {//Das CSS-Quiz beginnen
    resetAllCssSide();
    showQuestionCss();
}

function showQuestionCss() {//Die CSS Fragen anzeigen 
    let percent = currentQuestion / css_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    css = true;
    document.getElementById('all-questions').innerHTML = css_questions.length;

    if (gameIsOverCss()) {//Die letzte Seite anzeigen lassen mit dem Ergebnis
        showLastCssSide();
    } else {//Die nächste Frage mit den möglichen Antworten laden
        showNextCssQuestion();
    };
}

function gameIsOverCss() {
    return currentQuestion >= css_questions.length;
}

function showNextCssQuestion() {
    document.getElementById('answer-area').style = '';//Die Fragenseite von CSS anzeigen
    let question = css_questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];// Die jeweilige Frage anzeigen
    document.getElementById('answer_1').innerHTML = question['answer_1'];// Die jeweiligen Antwortmöglichkeiten anzeigen
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('answer_1').parentNode.classList.remove('poniter-events');//Die sperre um mehrer Antworten anzuklicken aufheben
    document.getElementById('answer_2').parentNode.classList.remove('poniter-events');
    document.getElementById('answer_3').parentNode.classList.remove('poniter-events');
    document.getElementById('answer_4').parentNode.classList.remove('poniter-events');
    pauseAudio();
}

function showLastCssSide() {//Die letzte CSS-Seite mit dem Ergebniss anzeigen
    resetAllCssSide();
    document.getElementById('end-screem').style = '';
    document.getElementById('replay-botton-css').style = '';
    document.getElementById('complete-text').innerHTML = '<b>Complete<br>CSS Quiz<b>';
    document.getElementById('all-questions-result').innerHTML = css_questions.length;
    document.getElementById('all-right-aswer').innerHTML = rigthAnswered;
    audio_succes.play();

}

function restartCssQuiz() {//Das CSS Quiz wieder erneut starten
    resetAllCssSide();
    document.getElementById('question-body').style = '';
    currentQuestion = 0;
    rigthAnswered = 0;
    showQuestionCss();
    pauseAudio();
};

function loadJs() {//Den CSS Bereich aufrufen
    resetAllSides();
    document.getElementById('quiz-js').classList.add('white');
    resetAnswerButton();
    document.getElementById('start-side-js').style = '';
    currentQuestion = 0;
    rigthAnswered = 0;
};


function startJsQuiz() {//Das JS-Quiz beginnen
    resetAllJsSide();
    showQuestionJs();
}

function showQuestionJs() {//Die JS Fragen anzeigen 
    let percent = currentQuestion / js_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    js = true;
    document.getElementById('all-questions').innerHTML = js_questions.length;

    if (gameIsOverJs()) {//Die letzte Seite anzeigen lassen mit dem Ergebnis
        showLastJsSide();
    } else {//Die nächste Frage mit den möglichen Antworten laden
        showNextJsQuestion();
    };
}

function gameIsOverJs() {
    return currentQuestion >= js_questions.length;
}

function showNextJsQuestion() {
    document.getElementById('answer-area').style = '';//Die Fragenseite von JS anzeigen
    let question = js_questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];// Die jeweilige Frage anzeigen
    document.getElementById('answer_1').innerHTML = question['answer_1'];// Die jeweiligen Antwortmöglichkeiten anzeigen
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('answer_1').parentNode.classList.remove('poniter-events');//Die sperre um mehrer Antworten anzuklicken aufheben
    document.getElementById('answer_2').parentNode.classList.remove('poniter-events');
    document.getElementById('answer_3').parentNode.classList.remove('poniter-events');
    document.getElementById('answer_4').parentNode.classList.remove('poniter-events');
    pauseAudio();
}

function showLastJsSide() {//Die letzte JS-Seite mit dem Ergebniss anzeigen
    resetAllJsSide();
    document.getElementById('end-screem').style = '';
    document.getElementById('replay-botton-js').style = '';
    document.getElementById('complete-text').innerHTML = '<b>Complete<br>JS Quiz<b>';
    document.getElementById('all-questions-result').innerHTML = js_questions.length;
    document.getElementById('all-right-aswer').innerHTML = rigthAnswered;
    audio_succes.play();
}

function restartJsQuiz() {//Das JS Quiz wieder erneut starten
    resetAllJsSide();
    document.getElementById('question-body').style = '';
    currentQuestion = 0;
    rigthAnswered = 0;
    showQuestionJs();
    pauseAudio();
};

function loadJava() {//Den Java Bereich aufrufen
    resetAllSides();
    document.getElementById('quiz-java').classList.add('white');
    resetAnswerButton();
    document.getElementById('start-side-java').style = '';
    currentQuestion = 0;
    rigthAnswered = 0;
};


function startJavaQuiz() {//Das Java-Quiz beginnen
    resetAllJavaSide();
    showQuestionJava();
}

function showQuestionJava() {//Die Java Fragen anzeigen 
    let percent = currentQuestion / java_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    java = true;
    document.getElementById('all-questions').innerHTML = java_questions.length;

    if (gameIsOverJava()) {//Die letzte Seite anzeigen lassen mit dem Ergebnis
        showLastJavaSide();
    } else {//Die nächste Frage mit den möglichen Antworten laden
        showNextJavaQuestion();
    };
}

function gameIsOverJava() {
    return currentQuestion >= java_questions.length;
}

function showNextJavaQuestion() {
    document.getElementById('answer-area').style = '';//Die Fragenseite von Java anzeigen
    let question = java_questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];// Die jeweilige Frage anzeigen
    document.getElementById('answer_1').innerHTML = question['answer_1'];// Die jeweiligen Antwortmöglichkeiten anzeigen
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('answer_1').parentNode.classList.remove('poniter-events');//Die sperre um mehrer Antworten anzuklicken aufheben
    document.getElementById('answer_2').parentNode.classList.remove('poniter-events');
    document.getElementById('answer_3').parentNode.classList.remove('poniter-events');
    document.getElementById('answer_4').parentNode.classList.remove('poniter-events');
    pauseAudio();
}

function showLastJavaSide() {//Die letzte Java-Seite mit dem Ergebniss anzeigen
    resetAllJavaSide();
    document.getElementById('end-screem').style = '';
    document.getElementById('replay-botton-java').style = '';
    document.getElementById('complete-text').innerHTML = '<b>Complete<br>Java Quiz<b>';
    document.getElementById('all-questions-result').innerHTML = java_questions.length;
    document.getElementById('all-right-aswer').innerHTML = rigthAnswered;
    audio_succes.play();
}

function restartJavaQuiz() {//Das Java Quiz wieder erneut starten
    resetAllJavaSide();
    document.getElementById('question-body').style = '';
    currentQuestion = 0;
    rigthAnswered = 0;
    showQuestionJava();
    pauseAudio();
};

function pauseAudio() { //Den Sound zu unterbrechen wenn man eine neue Aufgabe löst, weil sonst der Klang beim klicken auf eine Antwort nicht ausgefüht wird wenn man zu schnell die Augaben löst.
    audio_correct.pause();
    audio_correct.currentTime = 0;
    audio_wrong.pause();
    audio_wrong.currentTime = 0;
    audio_succes.pause();
    audio_succes.currentTime = 0;
};

function answer(selected_answer) {//welche Antwort wurde geklickt und ob sie Falsch oder Richtig ist 
    let question = html_questions[currentQuestion];
    let selectedAnswerNumber = selected_answer.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedAnswerNumber, question)) {//Die angeklickte Antwort ist richtig und wird grün
        rightAnswer(selected_answer);
    } else {//Die angeklickte Antwort ist falsch und wird rot angezeigt abenso wird die richtige Antwort grün angezeigt
        wrongAnswer(idOfRightAnswer, selected_answer);
    }
    document.getElementById('next-button').disabled = false;
    document.getElementById('answer_1').parentNode.classList.add('poniter-events');//Es wird verhindert die Antorten mehrmals anzuklicken
    document.getElementById('answer_2').parentNode.classList.add('poniter-events');
    document.getElementById('answer_3').parentNode.classList.add('poniter-events');
    document.getElementById('answer_4').parentNode.classList.add('poniter-events');
};

function rightAnswerSelected(selectedAnswerNumber, question){
    return selectedAnswerNumber == question['right_answer'];
}

function rightAnswer(selected_answer) {//Die angeklickte Antwort ist richtig und wird grün
    document.getElementById(selected_answer).parentNode.classList.add('bg-success');
    rigthAnswered++;

    if (html) {
        percentAudioCorrectHtml();
    } else if (css) {
        percentAudioCorrectCss();
    } else if (js) {
        percentAudioCorrectJs();
    } else if (java) {
        percentAudioCorrectJava();
    };
};

function percentAudioCorrectHtml() {//Die Prozentzahl für den progress Balken ausrechen und einfügen und die Audio correct abspielen.
    let percent = (currentQuestion + 1) / html_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    audio_correct.play();
}
function percentAudioCorrectCss() {//Die Prozentzahl für den progress Balken ausrechen und einfügen und die Audio correct abspielen.
    let percent = (currentQuestion + 1) / css_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    audio_correct.play();
}
function percentAudioCorrectJs() {//Die Prozentzahl für den progress Balken ausrechen und einfügen und die Audio correct abspielen.
    let percent = (currentQuestion + 1) / js_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    audio_correct.play();
}
function percentAudioCorrectJava() {//Die Prozentzahl für den progress Balken ausrechen und einfügen und die Audio correct abspielen.
    let percent = (currentQuestion + 1) / java_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    audio_correct.play();
}

function wrongAnswer(idOfRightAnswer, selected_answer) {//Die angeklickte Antwort ist falsch und wird rot angezeigt abenso wird die richtige Antwort grün angezeigt
    document.getElementById(selected_answer).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');

    if (html) {
        percentAudioWrongHtml();
    } else if (css) {
        percentAudioWrongCss();
    } else if (js) {
        percentAudioWrongJs();
    } else if (java) {
        percentAudioWrongJava();
    }
};

function percentAudioWrongHtml() {//Die Prozentzahl für den progress Balken ausrechen und einfügen und die Audio wrong abspielen.
    let percent = (currentQuestion + 1) / html_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    audio_wrong.play();
}
function percentAudioWrongCss() {//Die Prozentzahl für den progress Balken ausrechen und einfügen und die Audio wrong abspielen.
    let percent = (currentQuestion + 1) / css_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    audio_wrong.play();
}
function percentAudioWrongJs() {//Die Prozentzahl für den progress Balken ausrechen und einfügen und die Audio wrong abspielen.
    let percent = (currentQuestion + 1) / js_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    audio_wrong.play();
}
function percentAudioWrongJava() {//Die Prozentzahl für den progress Balken ausrechen und einfügen und die Audio wrong abspielen.
    let percent = (currentQuestion + 1) / java_questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
    audio_wrong.play();
}

function nextQuestion() {//Die nächste Frage laden
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    if (html) {
        showQuestionHtml();
    } else if (css) {
        showQuestionCss();
    } else if (js) {
        showQuestionJs();
    } else if (java) {
        showQuestionJava();
    }
};

function resetAnswerButton() { //Die Farben von den angeklickten Antwort zurücksetzen
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
};

function resetAllSides() {// Alles was geöfnnet sein kann, mit style = 'display: none'; verbergen.
    resetAllHtmlSide();
    resetAllCssSide();
    resetAllJsSide();
    resetAllJavaSide();
    document.getElementById('quiz-html').classList.remove('white');
    document.getElementById('quiz-css').classList.remove('white');
    document.getElementById('quiz-js').classList.remove('white');
    document.getElementById('quiz-java').classList.remove('white');
    html = false;
    css = false;
    js = false;
    java = false;
}

function resetAllHtmlSide() {//Löscht alle Bereiche die im HTML-Quiz geöffnet werden können
    document.getElementById('start-side-html').style = 'display: none';
    document.getElementById('answer-area').style = 'display: none';
    document.getElementById('end-screem').style = 'display: none';
    document.getElementById('replay-botton-html').style = 'display: none';
}
function resetAllCssSide() {//Löscht alle Bereiche die im CSS-Quiz geöffnet werden können
    document.getElementById('start-side-css').style = 'display: none';
    document.getElementById('answer-area').style = 'display: none';
    document.getElementById('end-screem').style = 'display: none';
    document.getElementById('replay-botton-css').style = 'display: none';
}

function resetAllJsSide() {//Löscht alle Bereiche die im JS-Quiz geöffnet werden können
    document.getElementById('start-side-js').style = 'display: none';
    document.getElementById('answer-area').style = 'display: none';
    document.getElementById('end-screem').style = 'display: none';
    document.getElementById('replay-botton-js').style = 'display: none';
}
function resetAllJavaSide() {//Löscht alle Bereiche die im Java-Quiz geöffnet werden können
    document.getElementById('start-side-java').style = 'display: none';
    document.getElementById('answer-area').style = 'display: none';
    document.getElementById('end-screem').style = 'display: none';
    document.getElementById('replay-botton-java').style = 'display: none';
}

