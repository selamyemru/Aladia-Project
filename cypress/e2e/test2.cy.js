describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('test1', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('  http://localhost:3000/');
    cy.get('#email-field').clear('s');
    cy.get('#email-field').type('selamyemru6@gmail.com');
    cy.get('.gap-4 > .gradient').click();
    cy.get('#name').clear('selam');
    cy.get('#name').type('selam');
    cy.get('#surname').clear('yemru');
    cy.get('#surname').type('yemru');
    cy.get(':nth-child(6) > .group > #password').click();
    cy.get(':nth-child(6) > .group > #password').clear('s');
    cy.get(':nth-child(6) > .group > #password').type('seli@3840');
    cy.get(':nth-child(7) > .group > #password').clear('s');
    cy.get(':nth-child(7) > .group > #password').type('seli@3840');
    cy.get('#terms-checkbox').check();
    cy.get('.py-1\\.5 > .gradient').click();
    /* ==== End Cypress Studio ==== */
  });
})