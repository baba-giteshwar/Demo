describe('test', () => {
 
  // it('elements foreach', () => {
  //   cy.visit('/');
  //   cy.get('.category-cards > :nth-child(1)').click();
  //   cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
  //   cy.get('#userForm').within(()=>{
  //     const fields = ['Full Name', 'Email', 'Current Address', 'Permanent Address'];
  //     fields.forEach(function (title){cy.contains(title).should('exist')});
  //   })
  // })

  // it('tables', () => {
  //   cy.viewport(1300,900)
  //   cy.visit('/webtables');

  //   // delete row where name is Alden

  //   cy.get('.rt-tr-group').contains('.rt-tr-group','Alden').then((row)=>{
  //     cy.wrap(row).find('span[title=Edit]').click();
  //     cy.get("[placeholder='Age']").clear().type(25)
  //   })
  // })

  // link
  // it('link',()=>{
  //   cy.visit('/links');
  //   // cy.get('#created').invoke('removeAttr','href').click();
  //   cy.get('a').each((li)=>{
  //     const link = li.prop('href');
  //     // cy.log(link)
  //     if(link){
  //       cy.request({
  //         url: link,
  //         failOnStatusCode: false
  //       }).then(resp=>{
  //         if(resp.status!==200){
  //           cy.log(link)

  //         }
          

  //       })
  //     }

  //   })
  // })

  // broken link
  // it('broken link',()=>{
  //   cy.visit('/broken');
  //   cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]').then((link)=>{
  //     if(link.prop('href')){
  //       cy.request({
  //         url: link.prop('href'),
  //         failOnStatusCode: false
  //       }).then((resp)=>{
  //         expect(resp.status).to.equal(500)
  //       })
  //     }
  //   })


  // })

  // broken image

  // it('broken image', ()=>{
  //   cy.visit('/broken')
  //   cy.get('[src="/images/Toolsqa_1.jpg"]').should($img => expect($img[0].naturalWidth).to.be.gt(0));
  // })

  it('alerts', ()=>{
    cy.visit('/alerts');
    // cy.get('#alertButton').click();
    // cy.on('window:alert', txt=>{
    //   expect(txt).to.contains('You clicked a button')
    // })
    // cy.get('#confirmButton').click();
    // cy.on('window:confirm',txt=>{
    //   expect(txt).to.contains('')
    // })

    cy.window().then((p)=>{
      cy.stub(p,'prompt').returns('hkjsdkjfdw')
      cy.get('#promtButton').click();
    })
  })
})