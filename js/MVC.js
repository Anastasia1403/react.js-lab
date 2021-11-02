class Model {
  constructor() {
    this.registeredUser = {};
    this.savedUser = {}
  }

  signUp = (inputs) => {
    let userData = {};
    for (let input of inputs) {
     userData[input.name] = input.value;
    }
    localStorage.setItem(userData.email, JSON.stringify(userData))
    console.log( userData)
console.log('Your registration is completed successfully!')
  }
    
  signIn = (inputs) => {
  
    let login;
    let confirmToEnter;
    for (let input of inputs) {
      if (input.name === "email") login = input.value
    }
    let userData =JSON.parse(localStorage.getItem(login));
    if (!userData) {
     console.log('You are not registered yet.') 
    } else {
      confirmToEnter = Object.values(inputs).every( input =>  { return userData[input.name] == input.value} );
      confirmToEnter ? window.open('doctor-view.html') : console.log('Password is wrong. Please check the spelling')     
    } 
     
  }
}

class View {
  constructor() {
    this.main = this.getElement(".enter-panel");
    this.routes = {
      "sign-up" : signUp,
      "sign-in" : signIn,
      "restore-password" :  restorePassword
    }
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
  createElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  };
  displayFirstPage = () => {

    let state = { page: "sign-up" };
  window.history.replaceState(state, "", state.page);
  this.displayPage(state.page);
      };

  displayPage = () => {
    this.main.innerHTML = "";
    if (!window.history.state) return;  
    this.main.innerHTML = this.routes[window.history.state.page];
     this.findElements();
    this.inputSetup();
    this.goToListener();
    this.togglerListener();
  };
  findElements = () => {
    this.linksNode = document.querySelectorAll(".link");
    this.inputsNode = document.querySelectorAll("input");
    this.submit = document.querySelector(".submit");
    this.passwordInputsNode = document.querySelectorAll(`[name = 'password']`);
    this.form = document.querySelector(".form");
    this.togglersNode = document.querySelectorAll(".toggler-display-password");
  };

  //validating methods

  markInput = (input, valid) => {
    if (valid) {
      input.classList.add('form__input_valid');
      return true
    }
    if (!valid) {
      input.classList.add('form__input_invalid');    
      return false
    }
  };

  inputSetup = () => {
    for (let input of this.inputsNode) {
      input.setAttribute("required", true);
      if (input.name === "password" || input.name === "email") {
        input.setAttribute("minlength", "6");
      }
      if (input.name === "fname" || input.name === "lname") {
        input.setAttribute("minlength", "2");
      }
    }
  }

  checkPasswordValidity = (node) => {
    if (document.querySelector('.error-mes')) document.querySelector('.error-mes').remove();
    const [passwordStep1, passwordStep2] = node;
    if(passwordStep1.value === passwordStep2.value && passwordStep1.value) {
      return this.markInput(passwordStep2, true)
    } else if (passwordStep2.value) {
      const error = this.createElement("div", "error-mes");
      error.innerHTML = 'Passwords are not equal. Please check the spelling'
      passwordStep2.parentElement.append(error);
       return this.markInput(passwordStep2, false);
       
    }
   }

  checkValidityForm = () => {
   
    for (let input of this.inputsNode) {
      this.removeValidateClasses(input)
    }
    let isFormValid;

    isFormValid = Object.values(this.inputsNode).every(input => {
      if (input === this.passwordInputsNode[1]) {
        return this.checkPasswordValidity(this.passwordInputsNode)
      }
       return this.markInput(input, input.checkValidity()) 
      })
      return isFormValid;
      }
      
  //routing methods

  goToListener = () => {
    for (let link of this.linksNode) {
      link.addEventListener("click", (event) => {
        this.goTo(event)
      });
    }
  };

  goTo = (event) => {
    event.preventDefault();
    let state;
      if (event.currentTarget.getAttribute("href") === "back") {      
    window.history.back();
    state = window.history.state;
  } else {
    state = { page: event.currentTarget.getAttribute("href") };
    window.history.pushState(state, "", state.page);
  }
  this.displayPage(state.page);
  };

  onPopStateListener = () => {    
  window.addEventListener('popstate', () => this.displayPage(window.history.state.page))
  }


  //submit methods
  bindSubmitListener = (handler1, handler2) => {
    
this.main.addEventListener("click", (event) => { 
  if (event.target.classList.contains('submit-sign-up') || event.target.parentElement.classList.contains('submit-sign-up'))  {
    event.preventDefault();
    this.checkValidityForm() ? handler1(event) : this.resetFormListeners(event)   

} else if (event.target.classList.contains('submit-sign-in') || event.target.parentElement.classList.contains('submit-sign-in'))  {
  event.preventDefault();
  
  this.checkValidityForm() ? handler2(event) : this.resetFormListeners(event)
  } else if (event.target.classList.contains('submit') || event.target.parentElement.classList.contains('submit')) {
event.preventDefault();
  }
})
}

removeValidateClasses = (input) => {
    input.classList.contains('form__input_valid') ? input.classList.remove('form__input_valid') : null;
    input.classList.contains('form__input_invalid') ? input.classList.remove('form__input_invalid') : null;
    
  }

  resetFormListeners = (event) => {

    for (let input of this.inputsNode) {
      input.addEventListener('change', () => {
        this.removeValidateClasses(input)
      }, true
        )
    }
  }

//displaying password methods

  togglerListener = () => {
    for (let toggler of this.togglersNode) {
      toggler.addEventListener("click", this.toggleDisplayPassword);
    }
  }
  toggleDisplayPassword = (event) => {
    event.preventDefault();
    let button = event.currentTarget;
    let icon = event.currentTarget.firstElementChild; // =event.target
    button.classList.toggle("show-password");
    let input = button
      .closest(".form__input-wrapper")
      .querySelector(".form__input");
  
    if (button.classList.contains("show-password")) {
      input.type = "password";
      icon.src = "img/svg/eye-crossed-out.svg";
    } else {
      input.type = "text";
      icon.src = "img/svg/eye.svg";
    }
  };

};

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.displayFirstPage();
    this.view.onPopStateListener();
    this.view.bindSubmitListener(this.handleSignUp, this.handleSignIn)
  }

  handleSignUp = () => {
this.model.signUp(this.view.inputsNode)
  }
  handleSignIn = () => {
        this.model.signIn(this.view.inputsNode)
      }
}

const app = new Controller(new Model(), new View());
