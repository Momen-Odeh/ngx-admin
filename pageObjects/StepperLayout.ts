class StepperLayout
{
    elements={
        mainStepPrevBtn : () => cy.get('.horizontal > .step-content > .btn-disabled'),
        mainStepNextBtn : () => cy.get('.horizontal > .step-content > [aria-disabled="false"]')

    }
    checkMainStepper()
    {
        // this.elements.mainStepPrevBtn().should('be.disabled');
        this.elements.mainStepNextBtn().click({ multiple: true }).then(()=>{
          this.elements.mainStepNextBtn().click({ multiple: true })
        })

    }



    //get functions
    get username()
    {
        return cy.get('input[name="userName"]');
    }

   get password()
    {
        return cy.get('input[name="password"]');
    }

   get submit()
    {
        return cy.get('input[name="submit"]');
    }

   get successText()
    {
        return cy.get('h3');
    }

   get errorText()
   {
       return cy.get('span');
   }

}
export default StepperLayout;
