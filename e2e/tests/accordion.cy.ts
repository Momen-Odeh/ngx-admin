import accordion from "../../pageObjects/accordion";

const accordionObj:accordion = new accordion ();
describe("accourdian Test", ()=>{
  beforeEach(()=>{
    cy.visit("http://localhost:4200/pages/layout/accordion")
  })
  it.only("test top Accordion",()=>{
    accordionObj.checkAccordionTop();
  })
  it.only("test Bottom Accordion",()=>{
    accordionObj.checkAccordionBottom();
  })
  it.only("test Right Accordion",()=>{
    accordionObj.checkAccordionRight();
  })
})
