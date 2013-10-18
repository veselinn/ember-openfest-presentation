Man = Ember.Object.extend({
  hobbies: [],
  dislikes: [],

  sayCatchPhrase: function() {
  }

});

AverageJoe = Man.extend({
  hobbies: ['lying around'],
  dislikes: ['working'],

  sayCatchPhrase: function() {
    console.log("Let's go to the coffee shop?");
  }

});

SuperPowers = Ember.Mixin.create({
  powers: []
});

arnold = Man.create({
  hobbies: ['kicking asses', 'shooting with his shotgun', 'being BACK!'],
  dislikes: ['Choir boys.'],

  sayCatchPhrase: function() {
    console.log("I'm a cybernetic organism living tissue over metal endoskeleton.");
    console.log('I WILL BE BACK!!!');
  }
});

SuperHero = Man.extend(SuperPowers, {
});

superMario = SuperHero.create({
  hobbies: ['Saving the princess', 'Eating shrooms', 'Stomping goombas'],
  dislikes: ['turtles', 'goombas'],

  powers: ['jumping', 'breaking bricks', 'going into pipes', 'fire flower!!!'],

  sayCatchPhrase: function() {
    console.log("Ita sa mii Mario!!!");
  }
});

Bulgarian = AverageJoe.extend({
  firstName: '',
  familyName: '',
  nickname: '',

  sayCatchPhrase: function() {
    console.log("Let's drink some Beer/Rakia/Vodka/Rom/Antifreeze!?");
  },

  fullName: function() {
    var firstName = this.get('firstName'),
        familyName = this.get('familyName'),
        nickname = this.get('nickname');

    return "%@ %@ - %@".fmt(firstName, familyName, nickname);
  }.property('firstName', 'familyName', 'nickname')

});

meddle = Bulgarian.create({
  firstName: 'Nickolay',
  familyName: 'Tzvetinov',
  nickname: 'Meddle'
});

misho = Bulgarian.create({
  firstName: 'Mihail',
  familyName: 'Mihailov',
  nickname: 'Shamara'
});
