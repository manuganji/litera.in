Router.map(function(){
	this.route('postsPage', {path: '/postsPage'
	});

});

if(Meteor.isClient){
	Template.postsPage.events({

	});

Template.postsPage.rendered = function(){
        $('#poemDesc').wysihtml5();
    };
}    

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
