describe('user', function(){
  var user

  beforeEach(function(){
    user = new User
  });

  describe('user can post a space', function(){
    it('user can push space into an array', function(){
      user.list('Flat in Cagliari')
      expect(user.availableProperties().length).toEqual(1)
    })
  })

  describe('user can create a property', function(){
    it('user creates a property object instance', function(){
      user.createProperty("1","2","3","4")
      expect(user.createProperty("1","2","3","4").constructor.name).toEqual('Property');
    })
  })

});
