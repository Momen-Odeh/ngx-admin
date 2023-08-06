import dialog from "../../pageObjects/dialog";
const dialogObj:dialog = new dialog();
describe("testing the dialog",()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:4200/pages/modal-overlays/dialog')
  })
  it.only("check open dialog",()=>{
    dialogObj.checkDialog(dialogObj.getOpenDialog());
  })
  it.only("check Open Without Backdrop dialog",()=>{
    dialogObj.checkDialog(dialogObj.getopenWithoutBackdropDialog());
  })
  it.only("check Open Without Esc CloseDialog",()=>{
    dialogObj.checkDialog(dialogObj.getOpenWithoutEscCloseDialog());
  })
  it.only("check Open Without Backdrop Click",()=>{
    dialogObj.checkDialog(dialogObj.getOpenWithoutBackdropClickDialog());
  })
  it.only("check Return Result From Dialog",()=>{
    ["Momen Odeh","Mohammed Saleh","Mosab"].map((val)=>{
      dialogObj.checkReturnResultFromDialog(val);
    })
  })

})
