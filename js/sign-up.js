
const signUp = `<h1 class="title">Sign Up</h1>

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
  
        <button class="submit submit-sign-up" type="submit">
            <span>Sign Up</span>
            <img src="img/svg/angle-right-b.svg" alt="arrow" class="icon">
        </button>
  
    </form>
  
    <section class="footer">
        Already have an account? <a class="link footer__link" href="sign-in">Sign in</a>
    </section>  `;
