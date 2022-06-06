import { StyleSheet } from "react-native"

export const globalOptions = {
  name: "time_helps_everyone_35626",
  url: "https://time_helps_everyone_35626.botics.co",
  api: "https://time_helps_everyone_35626.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    copy: "Routes available!"
  },

  "@modules/login": {
    LOGO_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon.png",
    BACKGROUND_URL:
      "https://www.istockphoto.com/vector/work-life-balance-gm1276654003-376102702",
    HOME_SCREEN_NAME: "Time Helps Everyone",
    validateEmail: "^[^\\s]+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,3})+$",
    SignInNavText: "Sign In",
    SignUpNavText: "Sign Up",
    SignInButtonText: "Login",
    SignUpButtonText: "Sign Up"
  },

  undefined: { title: "App Menu", copy: "Messages", styles: styles },
  undefined: {
    title: "payment ",
    copy: "",
    styles: styles,
    localOptions: localOptions
  }
}
