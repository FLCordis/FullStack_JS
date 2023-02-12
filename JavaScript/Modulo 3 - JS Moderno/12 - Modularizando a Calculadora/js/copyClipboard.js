export default function(ev) {
    const copyButton = ev.currentTarget;
    if (copyButton.innerText === 'Copy'){
        copyButton.innerText = 'Copied!';
        copyButton.classList.add('success');
        window.navigator.clipboard.writeText(document.getElementById('result').value);
    } else{
        copyButton.innerText = 'Copy';
        copyButton.classList.remove('success');
    }
}