
// 메인 로고 누르면 깃허브 홈페이지로 가는 함수
function mainGithub () {
    
    const $link = 'https://github.com';
    
    document.querySelector('.logo').addEventListener('click', e => {
        window.open($link);
        console.log('링크');
    });
}


//프로필 사진 렌더링람수
function renderingPhoto() {
    
}


// 즉시실행 함수

(function() {
    mainGithub();
})();