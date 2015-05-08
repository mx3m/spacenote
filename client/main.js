Template.post.helpers({
  'post': function() {

    Meteor.subscribe('posts', this._id);

    return Posts.findOne()
  }
});

Template.header.events({
  'click .app-share-btn': function() {

    var post = {
      mardown: Session.get('editor-markdown'),
      html: Session.get('editor-html'),
      wordCount: Session.get('editor-word-count')
    }

    post._id = Posts.insert(post);

    Router.go('post', post);

  }
});
