// Grab audio elements by their IDs
var audio_1 = document.getElementById("audio_1");
var audio_2 = document.getElementById("audio_2");
var audio_3 = document.getElementById("audio_3");
var audio_4 = document.getElementById("audio_4");
var audio_5 = document.getElementById("audio_5");
var audio_6 = document.getElementById("audio_6");
var audio_7 = document.getElementById("audio_7");
var audio_8 = document.getElementById("audio_8");

// Function to play the first audio file
function playAudio1() {
    audio_1.play();
}

// Function to play the second audio file
function playAudio2() {
    audio_2.play();
}

// Function to play the third audio file
function playAudio3() {
    audio_3.play();
}

// Function to play the fourth audio file
function playAudio4() {
    audio_4.play();
}

// Function to play the fifth audio file
function playAudio5() {
    audio_5.play();
}

// Function to play the sixth audio file
function playAudio6() {
    audio_6.play();
}

// Function to play the seventh audio file
function playAudio7() {
    audio_7.play();
}

// Function to play the eighth audio file
function playAudio8() {
    audio_8.play();
}

// Function to convert text to speech
function textToSpeech() {
    // Get the value from the text input field
    var text = document.getElementById("textToSpeech").value;

    // Create a new speech synthesis object
    var speech = new SpeechSynthesisUtterance();

    // Set properties of the speech (language, volume, rate, pitch)
    speech.text = text; // The text to be spoken
    speech.lang = "en-US"; // Set the language to English (US)
    speech.volume = 1; // Set volume (1 is the maximum)
    speech.rate = 1; // Set speech rate (1 is normal speed)
    speech.pitch = 1; // Set pitch of the voice (1 is normal)

    // Use the speech synthesis API to speak the text
    window.speechSynthesis.speak(speech);

    // Clear the text input field after speaking
    document.getElementById("textToSpeech").value = "";
}
