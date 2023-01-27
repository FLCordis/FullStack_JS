document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session');
    sessionStorage.setItem('sessionSt', input.value);
    input.value = '';
})

document.getElementById('readSession').addEventListener('click', function(){
    const info = sessionStorage.getItem('sessionSt');
    alert('O SessionStorage foi lida e o resultado é: ' + info)
;})

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local');
    localStorage.setItem('localSt', input.value);
    input.value = '';
});

document.getElementById('readLocal').addEventListener('click', function(){
    const readLocal = localStorage.getItem('localSt');
    alert('O LocalStorage foi lido e o resultado é: ' + readLocal);
});

document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie');
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'cookieInfo=' + input.value + ';'
    const expireDate = 'expires=' + new Date(2023,1,27) +';'
    const path = 'path=/' //Fica disponivel no site todo por que ta na pasta geral.
    document.cookie = cookie + expireDate + path;
    input.value = '';
    console.log(document.cookie);
});

document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2');
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'secondCookieInfo=' + input.value + ';'
    const expireDate = 'expires=' + new Date(2023,1,28) +';'
    const path = 'path=/' //Fica disponivel no site todo por que ta na pasta geral.
    document.cookie = cookie + expireDate + path;
    input.value = '';
    console.log(document.cookie);
});