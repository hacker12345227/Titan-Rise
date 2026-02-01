function login() {
    const username = document.getElementById('username').value.trim();
    if(username) {
        localStorage.setItem('titanUsername', username);
        showUserInfo();
    }
}

function showUserInfo() {
    const username = localStorage.getItem('titanUsername');
    if(username) {
        document.getElementById('user-login').style.display = 'none';
        document.getElementById('user-info').style.display = 'flex';
        document.getElementById('playername').innerText = username;

        // Laad de Minecraft avatar
        const avatarURL = `https://mc-heads.net/avatar/${username}/50`;
        document.getElementById('playerhead').src = avatarURL;
    }
}

// Toggle Ranks menu
function toggleRank(section) {
    document.getElementById('permanent').style.display = section === 'permanent' ? 'block' : 'none';
    document.getElementById('upgrades').style.display = section === 'upgrades' ? 'block' : 'none';
}

// Run on load
window.onload = showUserInfo;
