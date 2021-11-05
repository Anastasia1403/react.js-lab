const signIn = ` <h1 class="title">Sign In</h1>

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
  
        <button class="submit submit-sign-in" type="submit">
            <span>Sign In</span>
            <img src="img/svg/angle-right-b.svg" alt="arrow" class="icon">
        </button>
  
    </form>
  
    <a class="link" href="restore-password" >Forgot Password?</a>
  
    <section class="footer">
        Don’t have an account? <a class="link footer__link" href="sign-up" >Sign up</a>
    </section>`;
