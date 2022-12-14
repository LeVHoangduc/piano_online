const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keys_checkbox = document.querySelector(".keys-checkbox input");

let audio = new Audio("./assets/tunes/a.wav"); // by default , audio src is "a" tune
const playtune=(key)=>{
    audio.src=`./assets/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key]="${key}"]`); // getting clicked key element
    clickedKey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(()=> {
        clickedKey.classList.remove("active");
    },100);
}
pianoKeys.forEach(key =>{
    // allKeys.push(key.dataset.key);
    // calling playtune function with passing data-key value as an argument
    key.addEventListener("click",()=>playtune(key.dataset.key));
}); 

const pressedKey=(e)=>{
    //if the pressed key is in the allKeys array , only call the playtune function
    // if(allKeys.includes(e.key))
    playtune(e.key);
}
const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}
const hideKeys = ()=>{
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
document.addEventListener("keydown",pressedKey);
volumeSlider.addEventListener("input",handleVolume);
keys_checkbox.addEventListener("click",hideKeys);