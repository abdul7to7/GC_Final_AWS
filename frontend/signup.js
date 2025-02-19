const server = `https://gc-final-aws-backend.onrender.com`;

document.getElementById("signUpForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("signUpUsername").value;
  const mail = document.getElementById("signUpMail").value;
  const password = document.getElementById("signUpPassword").value;
  const phoneno = document.getElementById("signupPhoneno").value;

  [...document.getElementsByClassName("btn")].forEach((btn) => {
    btn.setAttribute("disabled", true);
  });

  fetch(`${server}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      mail: mail,
      password: password,
      phoneno: phoneno,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (!response.suceess) {
        window.location.reload();
        //send msg here
        return;
      }
      alert("register successful");
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token", data.token);
      localStorage.setItem("receiverId", 1);
      localStorage.setItem("receiverName", "global");
      localStorage.setItem("isReceiverGroup", 1);
      window.location = "./main.html";
    })
    .catch((e) => {
      alert(e);
    });

  [...document.getElementsByClassName("btn")].forEach((btn) => {
    btn.removeAttribute("disabled");
  });
});
