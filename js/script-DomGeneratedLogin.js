document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.createElement("div");
    signInForm.className = "sign-in-form";
    document.body.append(signInForm);

    const signInFormContainer = document.createElement("div");
    signInFormContainer.className = "sign-in-form__container";
    signInForm.append(signInFormContainer);

    const signInFormLogo = document.createElement("img");
    signInFormLogo.className = "sign-in-form__logo";
    signInFormLogo.src="img/Logo.svg";
    signInFormLogo.alt="logo";
    signInFormContainer.append(signInFormLogo);

    const signInFormTitleContainer = document.createElement("div");
    signInFormTitleContainer.className = "sign-in-form__title";
    signInFormContainer.append(signInFormTitleContainer);

    const signInFormTitle = document.createElement("p");
    signInFormTitle.className = "text text_title";
    signInFormTitle.innerText = "Sign in to your account"
    signInFormTitleContainer.append(signInFormTitle);

    const signInFormNotAMember = document.createElement("p");
    signInFormNotAMember.className = "text text_smokey";
    signInFormNotAMember.innerText = "Not a member? "
    signInFormTitleContainer.append(signInFormNotAMember);

    const signInFormSignUpLink = document.createElement("a");
    signInFormSignUpLink.className = "text text_link";
    signInFormSignUpLink.innerText = "Sign Up "
    signInFormNotAMember.append(signInFormSignUpLink);

    const signInFormEmailLabelContainer = document.createElement("div");
    signInFormEmailLabelContainer.className = "sign-in-form__label";
    signInFormContainer.append(signInFormEmailLabelContainer);

    const signInFormEmailLabel = document.createElement("label");
    signInFormEmailLabel.innerText = "Email"
    signInFormEmailLabel.className = "text text_smokey";
    signInFormEmailLabel.setAttribute("for", "email");
    signInFormEmailLabelContainer.append(signInFormEmailLabel);

    const signInFormEmailInput = document.createElement("input");
    signInFormEmailInput.className = "sign-in-form__input text text_gray";
    signInFormEmailInput.setAttribute("id", "email");
    signInFormEmailInput.setAttribute("type", "email");
    signInFormEmailInput.setAttribute("name", "email");
    signInFormEmailInput.setAttribute("placeholder", "Your Email");
    signInFormEmailLabelContainer.append(signInFormEmailInput);

    const signInFormPasswordLabelContainer = document.createElement("div");
    signInFormPasswordLabelContainer.className = "sign-in-form__label";
    signInFormContainer.append(signInFormPasswordLabelContainer);

    const rowContainer = document.createElement("div");
    rowContainer.className = "row-container";
    signInFormPasswordLabelContainer.append(rowContainer);

    const signInFormPasswordLabel = document.createElement("label");
    signInFormPasswordLabel.innerText = "Password";
    signInFormPasswordLabel.setAttribute("for", "password");
    signInFormPasswordLabel.className = "text text_smokey";
    rowContainer.append(signInFormPasswordLabel);

    const signInFormForgotPassword = document.createElement("a");
    signInFormForgotPassword.className = "text text_link";
    signInFormForgotPassword.innerText = "Forgot Password?"
    rowContainer.append(signInFormForgotPassword);

    const signInFormPasswordInput = document.createElement("input");
    signInFormPasswordInput.className = "sign-in-form__input text text_gray";
    signInFormPasswordInput.setAttribute("id", "password");
    signInFormPasswordInput.setAttribute("type", "password");
    signInFormPasswordInput.setAttribute("name", "password");
    signInFormPasswordInput.setAttribute("placeholder", "Type your password here");
    signInFormPasswordLabelContainer.append(signInFormPasswordInput);

    const signInFormCheckboxContainer = document.createElement("div");
    signInFormCheckboxContainer.className = "sign-in-form__checkbox";
    signInFormContainer.append(signInFormCheckboxContainer);

    const signInFormCheckboxInput = document.createElement("input");
    signInFormCheckboxInput.className = "custom_checkbox";
    signInFormCheckboxInput.setAttribute("id", "remember");
    signInFormCheckboxInput.setAttribute("type", "checkbox");
    signInFormCheckboxInput.setAttribute("name", "remember");
    signInFormCheckboxContainer.append(signInFormCheckboxInput);

    const signInFormCheckboxLabel = document.createElement("label");
    signInFormCheckboxLabel.innerText = "Remember me";
    signInFormCheckboxLabel.setAttribute("for", "remember");
    signInFormCheckboxLabel.className = "text text_small";
    signInFormCheckboxContainer.append(signInFormCheckboxLabel);

    const signInFormButton = document.createElement("button");
    signInFormButton.innerText = "Sign in";
    signInFormButton.className = "sign-in-form__button text";
    signInFormContainer.append(signInFormButton);

});