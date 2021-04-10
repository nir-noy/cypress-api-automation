// describe('First UI Test Case', () => {

//     it('Verify a Website', () => {
//         cy.visit('https://www.tickertape.in') 
        
//     })
// })

describe('Verify GET Request', function(){

    it('GET', function(){
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2',

        }).then(function(response){
            expect(response.body).have.property('support');
        })
    })
})