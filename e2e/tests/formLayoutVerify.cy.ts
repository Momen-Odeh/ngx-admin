import formLayout from "../../pageObjects/formLayout";
const formObj:formLayout = new formLayout();
describe('check form layout',()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:4200/pages/forms/layouts');
  })
  it.only('check inline form',()=>{
    formObj.checkInlineForm();
  })
  it.only('check grid form',()=>{
    formObj.checkGridForm();
  })
  it.only('check basic form',()=>{
    formObj.checkBasicForm();
  })
  it.only('check block form', ()=>{
    formObj.checkBlockForm();
  })
})
