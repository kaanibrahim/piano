// Plays a note by cloning its <audio> element each time,
// so overlapping/rapid presses of the same or different notes
// don't cut each other off.
function playNote(id) {
    const original = document.getElementById(id);
    const sound = original.cloneNode();
    sound.play();
    // Clean up the clone once it finishes playing
    sound.addEventListener("ended", () => sound.remove());
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
