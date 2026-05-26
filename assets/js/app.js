const form = document.getElementById("anagram-form");
const firstInput = document.getElementById("word1");
const secondInput = document.getElementById("word2");
const result = document.getElementById("result");
const swapButton = document.getElementById("swap-button");

function initSpeedInsights() {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return;
    }

    const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);

    if (window.location.protocol === "file:" || isLocalHost) {
        return;
    }

    if (document.head.querySelector('script[src="/_vercel/speed-insights/script.js"]')) {
        return;
    }

    const script = document.createElement("script");
    script.src = "/_vercel/speed-insights/script.js";
    script.defer = true;
    script.dataset.route = window.location.pathname;
    document.head.appendChild(script);
}

function normalizePhrase(value) {
    return value
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[^a-z0-9]/g, "")
        .split("")
        .sort()
        .join("");
}

function renderResult(isAnagram, firstValue, secondValue) {
    if (!firstValue.trim() || !secondValue.trim()) {
        result.className = "result";
        result.textContent = "Enter two phrases to compare them.";
        return;
    }

    if (isAnagram) {
        result.className = "result is-match";
        result.textContent = "Anagram match. Same letters, same count.";
        return;
    }

    result.className = "result is-miss";
    result.textContent = "Not an anagram. The letter signatures do not match.";
}

function checkAnagram(event) {
    if (event) {
        event.preventDefault();
    }

    const firstValue = firstInput.value;
    const secondValue = secondInput.value;
    const firstSignature = normalizePhrase(firstValue);
    const secondSignature = normalizePhrase(secondValue);

    renderResult(firstSignature === secondSignature, firstValue, secondValue);
}

function swapInputs() {
    const firstValue = firstInput.value;
    firstInput.value = secondInput.value;
    secondInput.value = firstValue;
    firstInput.focus();
    firstInput.select();
}

form.addEventListener("submit", checkAnagram);
swapButton.addEventListener("click", swapInputs);

firstInput.addEventListener("input", () => {
    if (result.textContent) {
        result.className = "result";
    }
});

secondInput.addEventListener("input", () => {
    if (result.textContent) {
        result.className = "result";
    }
});

renderResult(false, "", "");
initSpeedInsights();