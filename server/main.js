Meteor.publish('posts', function() {
  return Posts.find({_id: this.params._id});
});
