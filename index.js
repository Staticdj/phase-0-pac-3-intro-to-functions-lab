function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(logShout);
    console.log(string.toUpperCase());
}
logShout()

function logWhisper(string) {
    console.log(logWhisper);
    console.log(string.toLowerCase());
}
logWhisper()

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }else if (string === "I love you, Grandma.") {
        return "I love you, too.";
    }
}
// sayHiToGrandma()
sayHiToGrandma("I love you, Grandma.")