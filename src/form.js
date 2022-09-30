const firebaseConfig = {
    apiKey: "AIzaSyASM16yYVoe4MQQ0zAWktwQZWFIGHZaaBs",
    authDomain: "form-e88ae.firebaseapp.com",
    databaseURL: "https://form-e88ae-default-rtdb.firebaseio.com",
    projectId: "form-e88ae",
    storageBucket: "form-e88ae.appspot.com",
    messagingSenderId: "184083222098",
    appId: "1:184083222098:web:faca360d83b98f2241598b"
  };


  firebase.initializeApp(firebaseConfig);

  const contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contact-form').addEventListener("submit", submitForm);


  function submitForm(e){
      e.preventDefault();

      var name = getElementVal('full-name');
      var email = getElementVal('email-address');
      var subject = getElementVal('subject');
      var message = getElementVal('message');
      
      saveMessages(name, email, subject, message);

      //alert
      document.getElementById('alert').style.display = 'block';

    //remove alert
    setTimeout(() => {
        document.getElementById('alert').style.display = 'none';
    }, 3000);

    // reset form

    document.getElementById('contact-form').reset();



  }

  const saveMessages = ((name, email, subject, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set(
        {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
    )
  });

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };