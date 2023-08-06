
class windowEl {
  elements={
    windowForm:()=> cy.get(':nth-child(1) > nb-card > nb-card-body'),
    windowWithoutBackdrop:()=> cy.get(':nth-child(2) > nb-card > nb-card-body'),
  }
}
