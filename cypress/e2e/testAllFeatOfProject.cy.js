
describe('pages navigate', () => {
  it('pages navigate', () => {
    cy.visit('http://localhost:3000')
    cy.get('[alt="redDead"]').click()
    cy.contains('خانه').click()
    cy.contains('درباره ما').click()
    cy.contains('خانه').click()
  })
})


describe('delete and add', () => {
  it('delete and add test', () => {
    cy.visit('http://localhost:3000')
    cy.get('[cy="redDead"]').click()
    cy.get('[cy="residentEvil8"]').click()
    cy.get('[cy="deadByDaylight"]').click()
    cy.get('[type="button"]').click()
  })
})