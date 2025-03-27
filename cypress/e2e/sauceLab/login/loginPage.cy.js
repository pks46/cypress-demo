import { describe } from "mocha";
import { loginPageComponents } from "../../../pages/sauceLab/loginPage/loginPageComponents";

describe('Login to Sauce Lab', () => {

    it('Logging into Site with Valid User', ()=> {
        loginPageComponents.validLogin()
    })

    it('Try logging in with lockedout user', () => {
        loginPageComponents.lockedoutUserLogin()
    })
})