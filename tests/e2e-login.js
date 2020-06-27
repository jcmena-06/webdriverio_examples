import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe ('E2E Tests - Login / Logout Flow', () => {
    it('Shold not login with invalid credentials', () => {
        //browser.url('http://zero.webappsecurity.com/index.html')
        App.openHomePage()
        /* const button = $('#singing_button')
        button.click() */
        /* $('#signin_button').waitForExist()
        $('#signin_button').click() */
        Navbar.clickSignIn()
        /* $('#login_form').waitForExist()
        $('#user_login').setValue('invalid')
        $('#user_password').setValue('invalid')
        $('input[type="submit"]').click() */
        LoginPage.pauseShort()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid username', 'invalid password')
        LoginPage.submitForm()

        //const error = $('.alert-error')
        const error = LoginPage.error()
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        //browser.url('http://zero.webappsecurity.com/index.html')
        App.openHomePage()
        /* $('#signin_button').waitForExist()
        $('#signin_button').click() */
        Navbar.clickSignIn()
        /* $('#login_form').waitForExist()
        $('#user_login').setValue('username')
        $('#user_password').setValue('password')
        $('input[type="submit"]').click() */
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()

        $('.nav-tabs').waitForExist()
    })

    it('Should logout from app', () => {
        $('.icon-user').waitForExist()
        $('.icon-user').click()
        $('#logout_link').waitForExist()
        $('#logout_link').click()
        $('#pages-nav').waitForExist()
    })
})