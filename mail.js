const firebaseConfig = {
  apiKey: "AIzaSyBZsXM4L4Uok_hxNmyur1UYQ3uilyECW_8",
  authDomain: "albayhani-cv.firebaseapp.com",
  databaseURL: "https://albayhani-cv-default-rtdb.firebaseio.com",
  projectId: "albayhani-cv",
  storageBucket: "albayhani-cv.appspot.com",
  messagingSenderId: "640078259156",
  appId: "1:640078259156:web:f8d7297a8881cbb9e76c41",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
