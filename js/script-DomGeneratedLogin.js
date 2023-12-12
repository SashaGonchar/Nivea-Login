document.addEventListener("DOMContentLoaded", function() {
    let signInForm = document.createElement("div");
    signInForm.className = "sign-in-form";
    document.body.append(signInForm);

    let signInFormContainer = document.createElement("div");
    signInFormContainer.className = "sign-in-form__container";
    signInForm.append(signInFormContainer);

    let signInFormLogo = document.createElement("img");
    signInFormLogo.className = "sign-in-form__logo";
    signInFormLogo.src="img/Logo.svg";
    signInFormLogo.alt="logo";
    signInFormContainer.append(signInFormLogo);

    let signInFormTitleContainer = document.createElement("div");
    signInFormTitleContainer.className = "sign-in-form__title";
    signInFormContainer.append(signInFormTitleContainer);

    let signInFormTitle = document.createElement("p");
    signInFormTitle.className = "text text_title";
    signInFormTitle.innerText = "Sign in to your account"
    signInFormTitleContainer.append(signInFormTitle);

    let signInFormNotAMember = document.createElement("p");
    signInFormNotAMember.className = "text text_smokey";
    signInFormNotAMember.innerText = "Not a member? "
    signInFormTitleContainer.append(signInFormNotAMember);

    let signInFormSignUpLink = document.createElement("a");
    signInFormSignUpLink.className = "text text_link";
    signInFormSignUpLink.innerText = "Sign Up "
    signInFormNotAMember.append(signInFormSignUpLink);

    let signInFormEmailLabelContainer = document.createElement("div");
    signInFormEmailLabelContainer.className = "sign-in-form__label";
    signInFormContainer.append(signInFormEmailLabelContainer);

    let signInFormEmailLabel = document.createElement("label");
    signInFormEmailLabel.innerText = "Email"
    signInFormEmailLabel.className = "text text_smokey";
    signInFormEmailLabel.setAttribute("for", "email");
    signInFormEmailLabelContainer.append(signInFormEmailLabel);

    let signInFormEmailInput = document.createElement("input");
    signInFormEmailInput.className = "sign-in-form__input text text_gray";
    signInFormEmailInput.setAttribute("id", "email");
    signInFormEmailInput.setAttribute("type", "email");
    signInFormEmailInput.setAttribute("name", "email");
    signInFormEmailInput.setAttribute("placeholder", "Your Email");
    signInFormEmailLabelContainer.append(signInFormEmailInput);

    let signInFormPasswordLabelContainer = document.createElement("div");
    signInFormPasswordLabelContainer.className = "sign-in-form__label";
    signInFormContainer.append(signInFormPasswordLabelContainer);

    let rowContainer = document.createElement("div");
    rowContainer.className = "row-container";
    signInFormPasswordLabelContainer.append(rowContainer);

    let signInFormPasswordLabel = document.createElement("label");
    signInFormPasswordLabel.innerText = "Password";
    signInFormPasswordLabel.setAttribute("for", "password");
    signInFormPasswordLabel.className = "text text_smokey";
    rowContainer.append(signInFormPasswordLabel);

    let signInFormForgotPassword = document.createElement("a");
    signInFormForgotPassword.className = "text text_link";
    signInFormForgotPassword.innerText = "Forgot Password?"
    rowContainer.append(signInFormForgotPassword);

    let signInFormPasswordInput = document.createElement("input");
    signInFormPasswordInput.className = "sign-in-form__input text text_gray";
    signInFormPasswordInput.setAttribute("id", "password");
    signInFormPasswordInput.setAttribute("type", "password");
    signInFormPasswordInput.setAttribute("name", "password");
    signInFormPasswordInput.setAttribute("placeholder", "Type your password here");
    signInFormPasswordLabelContainer.append(signInFormPasswordInput);

    let signInFormCheckboxContainer = document.createElement("div");
    signInFormCheckboxContainer.className = "sign-in-form__checkbox";
    signInFormContainer.append(signInFormCheckboxContainer);

    let signInFormCheckboxInput = document.createElement("input");
    signInFormCheckboxInput.className = "custom_checkbox";
    signInFormCheckboxInput.setAttribute("id", "remember");
    signInFormCheckboxInput.setAttribute("type", "checkbox");
    signInFormCheckboxInput.setAttribute("name", "remember");
    signInFormCheckboxContainer.append(signInFormCheckboxInput);

    let signInFormCheckboxLabel = document.createElement("label");
    signInFormCheckboxLabel.innerText = "Remember me";
    signInFormCheckboxLabel.setAttribute("for", "remember");
    signInFormCheckboxLabel.className = "text text_small";
    signInFormCheckboxContainer.append(signInFormCheckboxLabel);

    let signInFormButton = document.createElement("button");
    signInFormButton.innerText = "Sign in";
    signInFormButton.className = "sign-in-form__button text";
    signInFormContainer.append(signInFormButton);

});