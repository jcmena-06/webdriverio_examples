import {short, medium, long } from '../lib/timeouts'
import {mobile, tablet, desktop } from '../lib/devices'

describe('First steps with WebdriverIO', () => {
    it('Load example Website', () => {
        browser.url('http://www.example.com')
        browser.pause(short) //implicit wait
        expect(browser).toHaveUrl('http://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })

    it('H1 should be visible', () => {
        const h1 = $('h1')
        h1.waitForExist() //explicit wait
        expect(h1).toBeVisible()
    })

    it('P should be visible', () => {
        const p = $('p')
        p.waitForExist() //explicit wait
        expect(p).toBeVisible()
    })

    it('Check link Value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })

    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example Domain')
    })

    it('Assert Attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example')
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')
    })

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('Save Screenshot', () => {
        browser.saveScreenshot('your-name.png')
    })
    
    it('Change Browser Viewport', () => {
        browser.setWindowSize(800, 1050)
        browser.pause(long)
    })

    it('Set Mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })
    
    it('Set Tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    })

    it('Set Desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })
})