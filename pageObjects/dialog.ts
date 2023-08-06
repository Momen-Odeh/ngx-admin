class dialog{
elements = {
  openDialog:()=> cy.get(':nth-child(1) > nb-card > nb-card-body'),
  openWithoutBackdropDialog:()=> cy.get(':nth-child(2) > nb-card > nb-card-body'),
  OpenWithoutEscCloseDialog:()=> cy.get(':nth-child(3) > nb-card > nb-card-body'),
  OpenWithoutBackdropClickDialog:()=> cy.get(':nth-child(4) > nb-card > nb-card-body'),
  ReturnResultFromDialog:()=> cy.get('.result-from-dialog'),
  NameDialog:()=>cy.get('.ng-star-inserted > nb-card > nb-card-body > .size-medium'),
  DialogBtn:()=>cy.get('nb-card-footer > .size-medium')
}

checkDialog(Dialog)
{
  Dialog.children().each(($el,index)=>{
    cy.wrap($el).click()
    this.elements.DialogBtn().click()
    this.elements.DialogBtn().should("not.exist")

  })
}
getOpenDialog(){
  return this.elements.openDialog();
}
getopenWithoutBackdropDialog(){
  return this.elements.openDialog();
}
getOpenWithoutEscCloseDialog(){
  return this.elements.openDialog();
}
getOpenWithoutBackdropClickDialog(){
  return this.elements.openDialog();
}

checkReturnResultFromDialog(value:string)
{
  this.elements.ReturnResultFromDialog().children().first().click();
  this.elements.NameDialog().type(value);
  this.elements.DialogBtn().last().click();
  this.elements.ReturnResultFromDialog().children().last().contains(value)
}

}

export default dialog;
