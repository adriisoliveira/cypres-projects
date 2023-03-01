// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Central de Stendimento ao cliente TAT', function(){
  beforeEach(function (){
    cy.visit('../src/index.html')
  })
  it('verifica o titulo da aplicação', function(){
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', function(){
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis felis nec maximus egestas. Suspendisse fringilla ante quis lacus imperdiet suscipit at ac lectus. Integer sed mi elementum, mollis ipsum vitae, pulvinar eros'
    cy.get('#firstName').should('be.visible').type('Adrianne')
    cy.get('#lastName').should('be.visible').type('Oliveira')
    cy.get('#email').should('be.visible').type('adrianne@email.com')
    cy.get('#open-text-area').should('be.visible').type(longText, {delay : 0})
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  it ('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
    cy.get('#firstName').should('be.visible').type('Adrianne')
    cy.get('#lastName').should('be.visible').type('Oliveira')
    cy.get('#email').should('be.visible').type('adrianne@email')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('validar campo de telefone', function(){
    cy.get('#phone').type('abcdefg').should('have.value','')
  })

  it ('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis felis nec maximus egestas. Suspendisse fringilla ante quis lacus imperdiet suscipit at ac lectus. Integer sed mi elementum, mollis ipsum vitae, pulvinar eros'
    cy.get('#firstName').should('be.visible').type('Adrianne')
    cy.get('#lastName').should('be.visible').type('Oliveira')
    cy.get('#email').should('be.visible').type('adrianne@email.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').should('be.visible').type(longText, {delay : 0})
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis felis nec maximus egestas. Suspendisse fringilla ante quis lacus imperdiet suscipit at ac lectus. Integer sed mi elementum, mollis ipsum vitae, pulvinar eros'
    cy.get('#firstName').should('be.visible').type('Adrianne').should('have.value', 'Adrianne')
    cy.get('#lastName').should('be.visible').type('Oliveira').should('have.value', 'Oliveira')
    cy.get('#email').should('be.visible').type('adrianne@email.com').should('have.value', 'adrianne@email.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').should('be.visible').type('longText', {delay : 0}).should('have.value', 'longText')
    cy.get('button[type="submit"]').click()
    cy.get('#firstName').clear().should('have.value', '')
    cy.get('#lastName').clear().should('have.value', '')
    cy.get('#email').clear().should('have.value', '')
    cy.get('#open-text-area').clear().should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () { 
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
   })


   it('envia o formuário com sucesso usando um comando customizado', function(){
    
   })
})