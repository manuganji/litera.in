Template.postsList.posts = function(){
    return Posts.find();
}

Template.postsList.numPosts = function(){
    return Posts.find().count();
}
