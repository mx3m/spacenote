Router.configure({
  layoutTemplate: 'layout',
  // waitOn: function() {
  //   return Meteor.subscribe('posts')
  // }
});

Router.route('/', {name: 'editor'});

Router.route('/posts/:_id', {name: 'post'});
