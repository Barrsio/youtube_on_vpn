describe('example to-do app', () =>{
    beforeEach(() =>{
        cy.visit('https://plainproxies.com/resources/free-web-proxy')
        const youtube = 'https://www.youtube.com'
        cy.get('[class=form-control]').type(`${youtube}{enter}`)
    })
    it('Это YouTube?', () =>{
        cy.get('[class=yt-spec-touch-feedback-shape__fill]').click()
        cy.get('[id=youtube-paths_yt6]').get('path').should('have.attr', 'd')    
    })
})