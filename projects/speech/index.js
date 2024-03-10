const synth = window.speechSynthesis;
const voiceSelect = document.getElementById("voices");

function synthesize() {
  const text = document.getElementById("inputText").value

  const utterThis = new SpeechSynthesisUtterance(text);

  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  utterThis.voice = voices.find((v) => v.name === selectedOption);

  synth.speak(utterThis);
}

function voiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}

voiceList()
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
