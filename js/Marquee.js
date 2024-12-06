const text = "VALORES OBJETIVOS MISION VISION";
const colors = ["#BEFF01","#FFFFFF"];
const marqueeText = document.getElementById("marqueeText");

function createColoredText(text) {
    return text.split(' ').map((word, index) => {
        const color = colors[index % colors.length];
        return `<span class="colored" style="color: ${color};">${word}</span>`;
    }).join(' ');
}

marqueeText.innerHTML = createColoredText(text);