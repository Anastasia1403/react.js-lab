class Model {
  constructor() {}
}

class View {
  constructor() {
    this.main = this.getElement(".enter-panel");
    this.routes = {
      "sign-up" : `<h1 class="title">Sign Up</h1>

      <form class="form">
    
          <div class="form__input-wrapper">
              <img src="img/svg/user.svg" alt="first name" class="icon form__input-icon">
              <input class="form__input" type="text" name="fname" placeholder="First Name">
          </div>
    
          <div class="form__input-wrapper">
              <img src="img/svg/user.svg" alt="last name" class="icon form__input-icon">
              <input class="form__input" type="text" name="lname" placeholder="Last Name">
          </div>
    
          <div class="form__input-wrapper">
              <img src="img/svg/email.svg" alt="email" class="icon form__input-icon">
              <input class="form__input" type="email" name="email" placeholder="Email">
          </div>
    
          <div class="form__input-wrapper">
              <img src="img/svg/lock.svg" alt="password" class="icon form__input-icon">
              <input class="form__input" type="password" name="password" placeholder="Password">
              <button class=" toggler-display-password show-password">
                  <img src="img/svg/eye-crossed-out.svg" alt="password" class="icon">
              </button>
          </div>
    
          <div class="form__input-wrapper">
              <img src="img/svg/check.svg" alt="confirm password" class="icon form__input-icon">
              <input class="form__input form__input_confirm-password" type="password" name="password"
                  placeholder="Confirm Password">
                  <button class="toggler-display-password show-password">
                      <img src="img/svg/eye-crossed-out.svg" alt="password" class="icon">
                      
                  </button>
          </div>
    
          <button class="submit" type="submit">
              <span>Sign Up</span>
              <img src="img/svg/angle-right-b.svg" alt="arrow" class="icon">
          </button>
    
      </form>
    
      <section class="footer">
          Already have an account? <a class="link footer__link" href="sign-in">Sign in</a>
      </section>  `,
      "sign-in" : ` <h1 class="title">Sign In</h1>

      <form class="form">
    
          <div class="form__input-wrapper">
                  <img src="img/svg/email.svg" alt="email" class="icon form__input-icon">
              <input class="form__input" type="email" name="email" placeholder="Email">
          </div>
    
          <div class="form__input-wrapper">
              <img src="img/svg/lock.svg" alt="password" class="icon form__input-icon">
              <input class="form__input" type="password" name="password" placeholder="Password">
              <button class="toggler-display-password show-password">
                  <img src="img/svg/eye-crossed-out.svg" alt="password" class="icon">
              </button>
          </div>
    
          <button class="submit" type="submit">
              <span>Sign In</span>
              <img src="img/svg/angle-right-b.svg" alt="arrow" class="icon">
          </button>
    
      </form>
    
      <a class="link" href="restore-password">Forgot Password?</a>
    
      <section class="footer">
          Don’t have an account? <a class="link footer__link" href="sign-up">Sign up</a>
      </section>`,
      "restore-password" :  `<h1 class="title title_go-back">
      <a class="link title__go-back-link" href="back">
          <img src="img/svg/angle-left-b.svg" alt="go back" class="icon" >
      </a>
      <span>Restore Password</span>
    </h1>
    <form class="form">
      <p class="form__note">Please use your email address, and we’ll send you the link to
          reset your password
      </p>
          <div class="form__input-wrapper">
              <img src="img/svg/email.svg" alt="email" class=" icon form__input-icon">
              <input class="form__input" type="email" name="email" placeholder="Email">
          </div>
    
      <button class="submit" type="submit">
          <span>Send Reset Link</span>
              <img src="img/svg/angle-right-b.svg" alt="arrow" class="icon">
      </button>
      
    </form>`
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

    let state = { page: "sign-in" };
  window.history.replaceState(state, "", state.page);
this.displayPage(state.page);
    this.findElements();
    this.inputListeners();
    this.goToListener();
    this.togglerListener();
    this.submitListener()
    
  };
  displayPage = (href) => {

    this.main.innerHTML = "";
    if (!window.history.state) return;  
    this.main.innerHTML = this.routes[window.history.state.page];
    this.findElements();
    this.inputListeners();
    this.goToListener();
    this.togglerListener();
    this.submitListener()
  };
  findElements = () => {
    this.linksNode = document.querySelectorAll(".link");
    this.inputsNode = document.querySelectorAll("input");
    this.submit = document.querySelector(".submit");
    this.passwordInputsNode = document.querySelectorAll(`[name = 'password']`);
    this.form = document.querySelector(".form");
    this.togglersNode = document.querySelectorAll(".toggler-display-password");
    this.submit.setAttribute("disabled", true);
  };

  //validating methods

  markInput = (input, valid) => {
    if (valid) input.style = "border: 1px solid green;";
    if (!valid) input.style = "border: 1px solid red;";
  };
  inputListeners = () => {
    for (let input of this.inputsNode) {
      input.setAttribute("required", true);
      if (input.name === "password" || input.name === "email") {
        input.setAttribute("minlength", "6");
      }
      if (input.name === "fname" || input.name === "lname") {
        input.setAttribute("minlength", "2");
      }
      input.addEventListener("blur", (event) => {
        this.validateInput(event);
        this.checkValidityForm(this.form);
      });

      if (this.passwordInputsNode.length > 1) {
        for (let passwordInput of this.passwordInputsNode) {
          passwordInput.addEventListener("input", () =>
            this.checkPasswordValidity(this.passwordInputsNode)
          );
        }
      }
    }
  };
  validateInput = (event) => {
    let input = event.target;
    this.markInput(input, input.validity.valid);
  };  
  checkPasswordValidity = (node) => {
    if(node[0].value === node[1].value && node[0].value) {
       this.markInput(node[1], true)
        return true
    } else if (node[1].value) {
       this.markInput(node[1], false);
       return false
    }
   }
  checkValidityForm = (form) => {
    const inputs = form.querySelectorAll("input");
    let res = true;
    for (let input of inputs) {
      if (!input.checkValidity()) {
        res = false;
        break;
      }
      if (input.name === "password" && this.passwordInputsNode.length > 1) {
        res = this.checkPasswordValidity(this.passwordInputsNode);
      }
    }
    res ? (this.submit.disabled = false) : (this.submit.disabled = true);
  };


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
  submitListener = () => {
    
this.submit.addEventListener("click", (event) => {    
  this.submitForm(event)
})
  }

  submitForm = (event) => {
  event.preventDefault();
    console.log('submit');
    window.open('doctor-view.html')
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
  }
}

const app = new Controller(new Model(), new View());
