function login() {
    const username = document.getElementById('username').value.trim();
    if(username){
        localStorage.setItem('titanUsername', username);
        showUserInfo();
    }
}

function showUserInfo(){
    const username = localStorage.getItem('titanUsername');
    if(username){
        document.getElementById('user-login').style.display = 'none';
        document.getElementById('user-info').style.display = 'flex';
        document.getElementById('playername').innerText = username;
        document.getElementById('playerhead').src = `https://mc-heads.net/avatar/${username}/50`;
    }
}

function logout() {
    localStorage.removeItem('titanUsername');
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('user-login').style.display = 'flex';
}

function toggleRank(section){
    document.getElementById('permanent').style.display = section==='permanent'?'grid':'none';
    document.getElementById('upgrades').style.display = section==='upgrades'?'grid':'none';
}

window.onload = showUserInfo;
