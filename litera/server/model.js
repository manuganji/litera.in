Posts.allow({
    insert: function (userId, post) {
        return true;
    },
    update: function (userId, post, fields, modifier) {
        if (userId !== post.owner) { // can only update posts that the user owns
            return false;
        };
        allowedFields = ['owner', 'content'];// cannot update the owner of a post 

        if (_.contains(fields, allowedFields)) {            
            return false;
        };
        return true;     
    },
    remove: function (userId, post) {
        return (user.id === post.owner); // can only delete posts that the user owns
    },
    fetch: ['owner'], // this the only field relevant to our allow logic now 
});
