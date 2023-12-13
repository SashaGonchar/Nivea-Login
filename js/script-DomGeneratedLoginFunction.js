function createElement(elementType, attributes = {},parent, innerText = "") {
    const element = document.createElement(elementType);

    for (const attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }

    if (innerText !== undefined) {
        element.textContent = innerText;
    }
    parent.append(element)
    return element;
}

const signInForm = createElement("div", {
    "class": "sign-in-form",
},document.body)

const signInFormContainer = createElement("div", {
    "class": "sign-in-form__container",
},signInForm)

const signInFormLogo = createElement("img", {
    "class": "sign-in-form__logo",
    "src": "img/Logo.svg",
    "alt": "logo"
},signInFormContainer)

const signInFormTitleContainer = createElement("div", {
    "class": "sign-in-form__title",
},signInFormContainer)

const signInFormTitle = createElement("p", {
        "class": "text text_title",
    },signInFormTitleContainer,
    "Sign in to your account"
)

const signInFormNotAMember = createElement("p", {
        "class": "text text_smokey",
    },signInFormTitleContainer,
    "Not a member? "
)

const signInFormSignUpLink = createElement("a", {
        "class": "text text_link",
    },signInFormNotAMember,
    "Sign Up "
)

const signInFormEmailLabelContainer = createElement("div", {
    "class": "sign-in-form__label",
},signInFormContainer)

const signInFormEmailLabel = createElement("label", {
        "class": "text text_smokey",
        "for": "email"
    },signInFormEmailLabelContainer,
    "Email"
)

const signInFormEmailInput = createElement("input", {
    "id": "email",
    "type": "email",
    "name": "email",
    "placeholder": "Your Email",
    "class": "sign-in-form__input text text_gray"
},signInFormEmailLabelContainer);

const signInFormPasswordLabelContainer = createElement("div", {
    "class": "sign-in-form__label",
},signInFormContainer)

const rowContainer = createElement("div", {
    "class": "row-container",
},signInFormPasswordLabelContainer)

const signInFormPasswordLabel = createElement("label", {
        "class": "text text_smokey",
        "for": "password"
    },rowContainer,
    "Password"
)

const signInFormForgotPassword = createElement("a", {
        "class": "text text_link",
    },rowContainer,
    "Forgot Password?"
)

const signInFormPasswordInput = createElement("input", {
    "id": "password",
    "type": "password",
    "name": "password",
    "placeholder": "Type your password here",
    "class": "sign-in-form__input text text_gray"
},signInFormPasswordLabelContainer);

const signInFormCheckboxContainer = createElement("div", {
    "class": "sign-in-form__checkbox",
},signInFormContainer)

const signInFormCheckboxInput = createElement("input", {
    "id": "remember",
    "type": "checkbox",
    "name": "remember",
    "class": "custom_checkbox"
},signInFormCheckboxContainer);

const signInFormCheckboxLabel = createElement("label", {
        "class": "text text_small",
        "for": "remember"
    },signInFormCheckboxContainer,
    "Remember me"
)

const signInFormButton = createElement("button", {
        "class": "sign-in-form__button text",
        "for": "remember"
    },signInFormContainer,
    "Sign in"
)
