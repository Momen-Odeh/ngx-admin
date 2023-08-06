class accordion{

  elements={
    accordionBtn:()=>cy.get('.appearance-filled'),
    bottomAccordion:()=>cy.get(':nth-child(1) > nb-accordion'),
    rightAccordion:()=>cy.get(':nth-child(2) > nb-accordion')

  }
  checkAccordionTop(){
    this.elements.accordionBtn().click()
    this.elements.accordionBtn().click()
  }
  checkAccordionBottom(){
    this.elements.bottomAccordion().children().each(($el,index)=>{
      cy.wrap($el).click()
    })
  }
  checkAccordionRight(){
    this.elements.rightAccordion().children().each(($el,index)=>{
      cy.wrap($el).click()
    })
  }

}

export default accordion
