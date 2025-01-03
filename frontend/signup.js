const server = `https://gc-final-aws-backend.onrender.com`;
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const mail = document.getElementById("signupMail").value;
  const phoneno = document.getElementById("signupPhoneno").value;
  const password = document.getElementById("signupPassword").value;
  try {
    let data = await fetch(`${server}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        mail: mail,
        phoneno: phoneno,
        password: password,
      }),
    });
    data = await data.json();
    if (!(data && data.success)) {
      return;
    }
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("username", data.username);
    localStorage.setItem("token", data.token);
    localStorage.setItem("receiverId", 1);
    localStorage.setItem("receiverName", "global");
    localStorage.setItem("isReceiverGroup", 1);
    window.location = "./main.html";
  } catch (error) {
    console.error(error);
  }
});
