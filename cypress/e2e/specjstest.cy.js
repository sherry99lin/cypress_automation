
describe('empty spec', () => {
  beforeEach( () => {
    cy.viewport(1920, 1080)
    cy.login('admin@RUBYS', 'YvrK3ZQX')
    cy.visit('/ma/dashboard')
  })
  it('passes', () => {
    cy.visit('https://staging.omnicloud.tech/')
  })
  
  it('first test', () =>{
    cy.wait(4000)
    cy.get('[i18nkey="workflow"]').click()
    cy.wait(3000)
    cy.contains('每日自動測試流程').click()
    // cy.contains('登 入').click()
    // cy.get('[name="username"]').should('contain','').clear().type('admin@RUBYS')
    // cy.get('[name="password"]').should('contain','').clear().type('YvrK3ZQX')
    // cy.get('[name="username"]')
    //   .parents('form')
    //   .contains('[type="submit"]','登入')
    //   .click()
    // cy.get('[i18nkey="workflow"]').click()
    // cy.wait(3000)
    // // cy.get('.ant-btn ant-btn-default action-btn')
    //     // .parents('td').find('button').should('contain','編輯').click()
    // cy.get('[data-row-key="4454"]')
    // // cy.get('.ant-table-tbody').children()
    
    // cy.contains('登 入').click()
        // cy.get('[name="username"]').should('contain','').clear().type('admin@RUBYS')
        // cy.get('[name="password"]').should('contain','').clear().type('YvrK3ZQX')
        // cy.get('[name="username"]')
        //   .parents('form')
        //   .find('button')
        //   .should('contain','登入')
        //   .click()
        
        // cy.get('tbody').contains('tr','每日發送測試LINE').then( tableRow => {
        //   //另種寫法cy.wrap(tableRow).find('td').eq(9).should('contains','檢視').click()
        //   cy.wrap(tableRow).contains('[type="button"]','檢視').click()
        // })
        // cy.wait(3000)
        // cy.get('.ant-space').find('.ant-space-item').then( mubutton =>{
        //   cy.wrap(mubutton).get('[aria-label="copy"]').click()
        // })
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth()+1
        //另種寫法會產生出「11月」
        // let month = date.toLocaleDateString('default',{month:'short'})
        let year = date.getFullYear()
        // cy.get('.ant-modal-content').get('[placeholder="顧客旅程"]').clear()
        // .type('每日發送測試Line_'+ year + '-' + month + '-' + day)
        // cy.get('.ant-modal-footer').contains('[type="button"]','完 成').should('contain','完 成').click()
        // cy.wait(3000)
        // cy.get('[i18nkey="workflow"]').click()
        // cy.contains('每日自動測試流程').click()
        // //複製立即發送line workflow
        // cy.get('tbody').contains('tr','立即發送line').then( tableRow => {
        //   cy.wrap(tableRow).contains('[type="button"]','檢視').click()
        // })
        // cy.wait(3000)
        // cy.get('.ant-space').find('.ant-space-item').then( mubutton =>{
        //   cy.wrap(mubutton).get('[aria-label="copy"]').click()
        // })
        // cy.get('.ant-modal-content').get('[placeholder="顧客旅程"]').clear()
        // .type('立即發送測試Line_'+ year + '-' + month + '-' + day)
        // cy.get('.ant-modal-footer').contains('[type="button"]','完 成').should('contain','完 成').click()
        // cy.wait(3000)
        // cy.get('[i18nkey="workflow"]').click()
        // //複製NASLD Wrokflow
        // cy.contains('每日自動測試流程').click()
        cy.wait(3000)
        cy.get('tbody').contains('tr','NASLD').then( tableRow => {
          cy.wrap(tableRow).contains('[type="button"]','檢視').click()
        })
        cy.wait(3000)
        cy.get('.ant-space').find('.ant-space-item').then( mubutton =>{
          cy.wrap(mubutton).get('[aria-label="copy"]').click()
        })
        cy.get('.ant-modal-content').get('[placeholder="顧客旅程"]').clear()
        .type('NASLD_'+ year + '-' + month + '-' + day)
        cy.get('.ant-modal-footer').contains('[type="button"]','完 成').should('contain','完 成').click()
        cy.wait(3000)
        cy.get('[i18nkey="workflow"]').click()

        //節點編輯尚未寫完...
        // cy.get('[text="Scheduler"]').click()
        // cy.wait(1000)
        // cy.get('[name="datetime"]').find('input').then(input =>{
        //   cy.wrap(input).click()
        //   cy.get('.rdtPicker').contains(day).click()
        // })
})
})