describe('E2E Testing - Help Section', () => {
    it('Should log into application', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        $('#login_form').waitForExist()
        $('#user_login').setValue('username')
        $('#user_password').setValue('password')
        $('input[type="submit"]').click()
        $('.nav-tabs').waitForExist()
    })

    it('Should load help content', () => {
        $('.icon-cog').click()
        $('#help_link').waitForExist()
        $('#help_link').click()
        const title = $('.span8 > h3')
        expect(title).toHaveText('How do I log into my account?')
        $('*=transfer funds').click()
        expect(title).toHaveText('How do I transfer funds?')
        $('*=pay bills').click()
        expect(title).toHaveText('How do I pay bills?')
    })

})