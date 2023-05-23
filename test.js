const options = {
  method: "POST",
  hostname: "voicerss-text-to-speech.p.rapidapi.com",
  port: null,
  path: "/?key=0fed0ddfd2ab46b38c95d7e8237b1867",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "1e400b32cbmsh08a602c81f4a21dp163aeejsnc477b3cb72b7",
    "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
  },
};

document.getElementById("play-button").addEventListener("click", fetchData);

async function fetchData() {
  const inputText = document.getElementById("text-input").value;

  try {
    const response = await fetch(
      "https://voicerss-text-to-speech.p.rapidapi.com/?key=0fed0ddfd2ab46b38c95d7e8237b1867",
      {
        ...options,
        body: new URLSearchParams({
          src: inputText,
          hl: "en-us",
          r: "0",
          c: "mp3",
          f: "8khz_8bit_mono",
        }).toString(),
      }
    );

    const body = await response.arrayBuffer();
    const audioSrc = "data:audio/mpeg;base64," + arrayBufferToBase64(body);

    // Set the audio source dynamically
    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = audioSrc;

    // Play the audio
    audioPlayer.play();
  } catch (error) {
    console.error(error);
  }
}

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
