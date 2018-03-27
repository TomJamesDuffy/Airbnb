describe('bnb', function(){
  var bnb
  var user
  beforeEach(function(){
    bnb = new Bnb()
  })

  describe('Bnb can find an user', function(){
    it('can find a user into an array by ID', function(){
      bnb.createUser(1)
      expect(bnb.findUser(1).constructor.name).toEqual('User')
    })
  })
})
