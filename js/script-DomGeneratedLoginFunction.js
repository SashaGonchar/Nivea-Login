function createElement(elementType, attributes = {}, innerText = "") {
    const element = document.createElement(elementType);

    for (const attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }

    if (innerText !== undefined) {
        element.textContent = innerText;
    }

    return element;
}

const signInForm = createElement("div", {
    "class": "sign-in-form",
})

const signInFormContainer = createElement("div", {
    "class": "sign-in-form__container",
})

const signInFormLogo = createElement("img", {
    "class": "sign-in-form__logo",
    "src": "img/Logo.svg",
    "alt": "logo"
})

const signInFormTitleContainer = createElement("div", {
    "class": "sign-in-form__title",
})

const signInFormTitle = createElement("p", {
        "class": "text text_title",
    },
    "Sign in to your account"
)

const signInFormNotAMember = createElement("p", {
        "class": "text text_smokey",
    },
    "Not a member? "
)

const signInFormSignUpLink = createElement("a", {
        "class": "text text_link",
    },
    "Sign Up "
)

const signInFormEmailLabelContainer = createElement("div", {
    "class": "sign-in-form__label",
})

const signInFormEmailLabel = createElement("label", {
        "class": "text text_smokey",
        "for": "email"
    },
    "Email"
)

const signInFormEmailInput = createElement("input", {
    "id": "email",
    "type": "email",
    "name": "email",
    "placeholder": "Your Email",
    "class": "sign-in-form__input text text_gray"
});

const signInFormPasswordLabelContainer = createElement("div", {
    "class": "sign-in-form__label",
})

const rowContainer = createElement("div", {
    "class": "row-container",
})

const signInFormPasswordLabel = createElement("label", {
        "class": "text text_smokey",
        "for": "password"
    },
    "Password"
)

const signInFormForgotPassword = createElement("a", {
        "class": "text text_link",
    },
    "Forgot Password?"
)

const signInFormPasswordInput = createElement("input", {
    "id": "password",
    "type": "password",
    "name": "password",
    "placeholder": "Type your password here",
    "class": "sign-in-form__input text text_gray"
});

const signInFormCheckboxContainer = createElement("div", {
    "class": "sign-in-form__checkbox",
})

const signInFormCheckboxInput = createElement("input", {
    "id": "remember",
    "type": "checkbox",
    "name": "remember",
    "class": "custom_checkbox"
});

const signInFormCheckboxLabel = createElement("label", {
        "class": "text text_small",
        "for": "remember"
    },
    "Remember me"
)

const signInFormButton = createElement("button", {
        "class": "sign-in-form__button text",
        "for": "remember"
    },
    "Sign in"
)


document.body.append(signInForm);
signInForm.append(signInFormContainer);
signInFormContainer.append(signInFormLogo);
signInFormContainer.append(signInFormTitleContainer);
signInFormTitleContainer.append(signInFormTitle);
signInFormTitleContainer.append(signInFormNotAMember);
signInFormNotAMember.append(signInFormSignUpLink);
signInFormContainer.append(signInFormEmailLabelContainer);
signInFormEmailLabelContainer.append(signInFormEmailLabel);
signInFormEmailLabelContainer.append(signInFormEmailInput);
signInFormContainer.append(signInFormPasswordLabelContainer);
signInFormPasswordLabelContainer.append(rowContainer);
rowContainer.append(signInFormPasswordLabel);
rowContainer.append(signInFormForgotPassword);
signInFormPasswordLabelContainer.append(signInFormPasswordInput);
signInFormContainer.append(signInFormCheckboxContainer);
signInFormCheckboxContainer.append(signInFormCheckboxInput);
signInFormCheckboxContainer.append(signInFormCheckboxLabel);
signInFormContainer.append(signInFormButton);
signInFormContainer.append(signInFormButton);