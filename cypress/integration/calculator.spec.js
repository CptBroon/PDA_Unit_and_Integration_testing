describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the running total field when a button is pressed', () => {
    cy.get('#number2').click();
    cy.get('.display').should('have.text', '2')
  })

  it('should update the display with the result of any mathematical operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '6');
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '10');
  })

  it('should be able to show negative numbers properly', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '-1');
  })

  it('should be able to show decimal numbers properly', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '2.5');

  })

  it('should be able to show large numbers properly', () => {
    cy.get('#number1').click();
    for(let n = 0; n < 16; n++){
      cy.get('#number0').click();
    }
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    for(let n = 0; n < 16; n++){
      cy.get('#number0').click();
    }
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '1e+32');
  })

  it('should return a sensible message when attempting to divide by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', 'Cannot divide by zero');
  })

  it('should return a sensible message when attempting to return too large a number', () => {
    for(let n = 0; n < 23; n++){
      cy.get('#number6').click();
    }
    cy.get('#operator-multiply').click();
    for(let n = 0; n < 23; n++){
      cy.get('#number6').click();
    }
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', 'Result too large');
  })

})