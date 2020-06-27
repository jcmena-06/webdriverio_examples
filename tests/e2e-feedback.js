import App from '../page-objects/App'

describe('E2E - Feedback', () => {
    it('Should load feedback form', () => {
        //browser.url('http://zero.webappsecurity.com/index.html')
        App.openHomePage()
        $('#feedback').waitForExist()
        $('#feedback').click()
        $('form').waitForExist()
    })

    it('Should submit feedback form', () => {
        $('#name').setValue('Name')
        $('#email').setValue('test@test.com')
        $('#subject').setValue('Subjects')
        $('#comment').setValue('Just a comment!')
        $('input[type="submit"]').click()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})