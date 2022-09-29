const h1 = document.querySelector('#hi');
const input = document.querySelector('.username');
const button = document.querySelector('button');

const name = localStorage.getItem('username'); // null ==> 저장된 이름이 없음

if (name === null) {
  h1.innerText = '사용자 이름을 등록해주세요!';
} else {
  h1.innerText = name + '님 안녕하세요!';
}

// function = 함수
function printUsername() {
  const username = input.value; // 사용자가 입력한 이름

  localStorage.setItem('username', username);
  h1.innerText = username + '님 안녕하세요!';
}

// 버튼에 클릭이라는 이벤트가 발생하면 printUsername 이라는 함수를 실행시켜줘!
button.addEventListener('click', printUsername);
