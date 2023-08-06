class formLayout
{
    elements={
      //Inline form
        inlineName : () => cy.get('[placeholder="Jane Doe"]'),
        inlineEmail : () => cy.get('.form-inline > [placeholder="Email"]'),
        inlineCheckBox : () => cy.get('.form-inline > nb-checkbox.status-basic > .label > .custom-checkbox'),
        inlineSubmit : () => cy.get('.form-inline > .appearance-filled'),
      //Grid form
        gridEmail:()=> cy.get('[data-cy="imputEmail1"]'),
        gridPassword:()=> cy.get('#inputPassword2'),
        gridRadioOp1:()=> cy.get('nb-radio-group > :nth-child(1) > label'),
        gridRadioOp2:()=> cy.get('nb-radio-group > :nth-child(2) > label'),
        gridRadioOp3:()=> cy.get('nb-radio-group > :nth-child(3) > label'),
        gridSubmit:()=> cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > nb-card-body > form > :nth-child(4) > .offset-sm-3 > .appearance-filled'),
      //basic form
        basicEmail:()=> cy.get('#exampleInputEmail1'),
        basicPassword:()=> cy.get('#exampleInputPassword1'),
        basicCheckBox:()=>cy.get(':nth-child(3) > .status-basic > .label > .text'),
        basicSubmit:()=>cy.get(':nth-child(2) > :nth-child(1) > nb-card-body > form > .appearance-filled'),
      //block form
        blockForm :()=>cy.get(':nth-child(2) > :nth-child(2) > nb-card-body'),
    }
    checkInlineForm()
    {
      this.elements.inlineName().type('Momen Odeh');
      this.elements.inlineEmail().type('momen.odeh74@gmail.com');
      this.elements.inlineCheckBox().click()
      this.elements.inlineSubmit().click()
    }

    checkGridForm()
    {
      this.elements.gridEmail().type('momen.odeh74@gmail.com');
      this.elements.gridPassword().type('123456');
      this.elements.gridRadioOp1().click()
      this.elements.gridRadioOp2().click()
      this.elements.gridRadioOp3().should('not.be.enabled')
      this.elements.gridSubmit().click();
    }

    checkBasicForm()
    {
      this.elements.basicEmail().type('momen.odeh74@gmail.com');
      this.elements.basicPassword().type('123456');
      this.elements.basicCheckBox().click()
      this.elements.basicSubmit().click()
    }
    checkBlockForm()
    {
      this.elements.blockForm().children().each(($el,index)=>{
        if(index == 2) return false
        cy.log("the each area", $el, index)
      })
    }
    //get functions
    get inlineName()
    {
        return this.elements.inlineName();
    }

   get inlineEmail()
    {
        return this.elements.inlineEmail();
    }

   get inlineCheckBox()
    {
        return this.elements.inlineCheckBox();
    }

   get inlineSubmit()
    {
        return this.elements.inlineSubmit();
    }

}
export default formLayout;
