describe('template spec', () => {
  it('passes', () => {
    const render = cy.visit('http://localhost:3000')
    expect(render).to.contain("Template")
  })
})