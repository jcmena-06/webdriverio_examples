import Base from '../Base'

class Navbar extends Base {
    get signInButton(){
        return $('#signin_button')
    }

    clickSignIn(){
        this.signInButton.waitForExist()
        this.signInButton.click()
    }
}

export default new Navbar()