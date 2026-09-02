// --- Web Audio setup ---
// We decode every note's mp3 into memory once, up front. Playing a note
// then just fires the already-decoded buffer through a fresh audio node,
// so there's no re-buffering delay and any number of notes can overlap.
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioBuffers = {};

function loadSounds() {
    document.querySelectorAll("audio[id]").forEach(function (el) {
        const id = el.id;
        const src = el.getAttribute("src");
        fetch(src)
            .then(function (res) { return res.arrayBuffer(); })
            .then(function (data) { return audioContext.decodeAudioData(data); })
            .then(function (buffer) { audioBuffers[id] = buffer; })
            .catch(function (err) { console.error("Could not load note", id, err); });
    });
}
window.addEventListener("DOMContentLoaded", loadSounds);

// Plays a note. Each call creates a brand new source node from the
// pre-decoded buffer, so overlapping/rapid presses never cut each other off.
function playNote(id) {
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
    const buffer = audioBuffers[id];
    if (!buffer) return; // still loading, ignore this press
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
}

//3
function A3(){
    playNote("A3");
}
function Bb3(){
    playNote("Bb3");
}
function B3(){
    playNote("B3");
}
//4
function C4(){
    playNote("C4");
}
function Db4(){
    playNote("Db4");
}
function D4(){
    playNote("D4");
}
function Eb4(){
    playNote("Eb4");
}
function E4(){
    playNote("E4");
}
function F4(){
    playNote("F4");
}
function Gb4(){
    playNote("Gb4");
}
function G4(){
    playNote("G4");
}
function Ab4(){
    playNote("Ab4");
}
function A4(){
    playNote("A4");
}
function Bb4(){
    playNote("Bb4");
}
function B4(){
    playNote("B4");
}
//5
function C5(){
    playNote("C5");
}
function Db5(){
    playNote("Db5");
}
function D5(){
    playNote("D5");
}
function Eb5(){
    playNote("Eb5");
}
function E5(){
    playNote("E5");
}
function F5(){
    playNote("F5");
}
function Gb5(){
    playNote("Gb5");
}
function G5(){
    playNote("G5");
}
function Ab5(){
    playNote("Ab5");
}
function A5(){
    playNote("A5");
}
function Bb5(){
    playNote("Bb5");
}
function B5(){
    playNote("B5");
}
