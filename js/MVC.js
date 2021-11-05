class Model {
  constructor() {
    this.registeredUser = {};
    this.savedUser = {};
  }

  signUp = (inputs) => {
    let userData = {};
    for (let input of inputs) {
      userData[input.name] = input.value;
    }
    localStorage.setItem(userData.email, JSON.stringify(userData));
    console.log(userData);
    console.log("Your registration is completed successfully!");
    alert("Your registration is completed successfully!");
  };

  signIn = (inputs) => {
    let login;
    let confirmToEnter;
    for (let input of inputs) {
      if (input.name === "email") {
        login = input.value;
      }
    }
    let userData = JSON.parse(localStorage.getItem(login));
    let errorMessage;
    if (!userData) {
      errorMessage = "You are not registered yet.";
      return errorMessage;
    }
    confirmToEnter = Object.values(inputs).every((input) => {
      return userData[input.name] == input.value;
    });
    if (confirmToEnter) {
      const Doctor = new ControllerDoctor(new ModelDoctor(), new ViewDoctor());
    } else {
      errorMessage = "Password is wrong. Please check the spelling";
      return errorMessage;
    }
  };
}

class View {
  constructor() {
    this.main = this.getElement(".enter-panel");
    this.routes = {
      "sign-up": signUp,
      "sign-in": signIn,
      "restore-password": restorePassword,
    };
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

  findElements = () => {
    this.linksNode = document.querySelectorAll(".link");
    this.inputsNode = document.querySelectorAll("input");
    this.passwordInputsNode = document.querySelectorAll(`[name = 'password']`);
    this.form = document.querySelector(".form");
    this.togglersNode = document.querySelectorAll(".toggler-display-password");
  };

  //validating methods

  markInput = (input, valid) => {
    const validationClass = valid ? "form__input_valid" : "form__input_invalid";
    input.classList.add(validationClass);
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
  };

  createErrorMessage = (text, parentElement) => {
    const error = this.createElement("div", "error-message");
    error.innerHTML = text;
    parentElement.append(error);
  };

  checkPasswordValidity = (node) => {
    const [passwordStep1, passwordStep2] = node;
    let isValid;
    if (passwordStep1.value === passwordStep2.value && passwordStep1.value) {
      this.markInput(passwordStep2, true);
      isValid = true;
    } else if (passwordStep2.value) {
      const errorMessage = "Passwords are not equal. Please check the spelling";
      this.createErrorMessage(errorMessage, passwordStep2.parentElement);
      this.markInput(passwordStep2, false);
      isValid = false;
    }
    return isValid;
  };

  checkValidityForm = () => {
    if (document.querySelector(".error-message"))
      document.querySelector(".error-message").remove();
    for (let input of this.inputsNode) {
      this.removeValidateClasses(input);
    }
    const isFormValid = Object.values(this.inputsNode).every((input) => {
      if (input === this.passwordInputsNode[1]) {
        return this.checkPasswordValidity(this.passwordInputsNode);
      }
      const isValid = input.checkValidity();
      this.markInput(input, isValid);
      return isValid;
    });
    return isFormValid;
  };

  removeValidateClasses = (input) => {
    input.classList.contains("form__input_valid") &&
      input.classList.remove("form__input_valid");
    input.classList.contains("form__input_invalid") &&
      input.classList.remove("form__input_invalid");
  };

  resetFormListeners = (event) => {
    for (let input of this.inputsNode) {
      input.addEventListener(
        "change",
        () => {
          this.removeValidateClasses(input);
        },
        true
      );
    }
  };

  //routing methods

  goToListener = () => {
    for (let link of this.linksNode) {
      link.addEventListener("click", (event) => {
        this.goTo(event);
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
    window.addEventListener("popstate", () =>
      this.displayPage(window.history.state.page)
    );
  };

  changePage = (page) => {
    let state = { page: page };
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

  //submit methods

  bindSubmitListener = (handler1, handler2) => {
    this.main.addEventListener("click", (event) => {
      const targetClass = event.target.classList;
      const buttonClass = event.target.parentElement.classList;

      if (!(targetClass.contains("submit") || buttonClass.contains("submit")))
        return;
      event.preventDefault();
      const isFormValid = this.checkValidityForm();
      this.resetFormListeners(event);
      let handler;

      if (
        targetClass.contains("submit-sign-up") ||
        buttonClass.contains("submit-sign-up")
      ) {
        handler = handler1;
      }
      if (
        targetClass.contains("submit-sign-in") ||
        buttonClass.contains("submit-sign-in")
      ) {
        handler = handler2;
      }
      isFormValid ? handler(event) : null;
    });
  };


  //displaying password methods

  togglerListener = () => {
    for (let toggler of this.togglersNode) {
      toggler.addEventListener("click", this.toggleDisplayPassword);
    }
  };
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
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.changePage("sign-up");
    this.view.onPopStateListener();
    this.view.bindSubmitListener(this.handleSignUp, this.handleSignIn);
  }

  handleSignUp = () => {
    this.model.signUp(this.view.inputsNode);
    this.view.changePage("sign-in");
  };
  handleSignIn = () => {
    const errorMessage = this.model.signIn(this.view.inputsNode);
    if (errorMessage) {
      const passwordInput = this.view.passwordInputsNode[0];
      this.view.createErrorMessage(errorMessage, passwordInput.parentElement);
      this.view.markInput(passwordInput, false);
    }
  };
}

const app = new Controller(new Model(), new View());
