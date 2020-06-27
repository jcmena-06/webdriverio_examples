describe('E2E Tests - Transactions Filter', () => {
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

    it('Transaction filter should work', () => {
        $('#account_activity_tab').click()
        $('#tabs > ul > li:nth-child(2) > a').waitForExist()
        $('#tabs > ul > li:nth-child(2) > a').click()
        $('#aa_description').waitForExist()
        $('#aa_description').setValue('Test')
        $('button[type="submit"]').click()
        $('#filtered_transactions_for_account').waitForExist()
        const message = $('.well')
        expect(message).toHaveText('No results.')
    })
})