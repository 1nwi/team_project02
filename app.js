

const URL = 'https://api.github.com/users';
// 메인 로고 누르면 깃허브 홈페이지로 가는 함수
function mainGithub () {
    
    const $link = 'https://github.com';
    
    document.querySelector('.logo').addEventListener('click', e => {
        window.open($link);
        console.log('링크');
    });
}

function getUser() {

    fetch(`https://api.github.com/users`)
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                return res.json();
            } else {
                alert('통신 실패!');
                return null;
            }     
        });
        
}


// 즉시실행 함수

(function() {
    mainGithub();
    getUser();
})();