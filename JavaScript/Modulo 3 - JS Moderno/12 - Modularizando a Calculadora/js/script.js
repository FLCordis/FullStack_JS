import calculate from "./calculate.js";
import copyClipboard from "./copyClipboard.js";
import {handleTyping, handleButtonPress, handleClearButton } from "./keyHandler.js";
import themeswitch from "./themeswitch.js";

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handleClearButton)

document.getElementById('input').addEventListener('keydown', handleTyping)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', copyClipboard)

document.getElementById('themeSwitcher').addEventListener('click', themeswitch)