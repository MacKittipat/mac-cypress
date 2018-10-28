describe('Profile', function() {

    it('Access profile page', function() {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/articles?author=mac&limit=10&offset=0',
            response: {
                "articles": [{
                    "slug": "hello-86jrvo",
                    "title": "Hello123",
                    "description": "",
                    "body": "This is article123",
                    "createdAt": "2018-10-28T04:37:17.438Z",
                    "updatedAt": "2018-10-28T04:37:17.438Z",
                    "tagList": [],
                    "favorited": false,
                    "favoritesCount": 0,
                    "author": {
                        "username": "mac",
                        "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
                        "following": false
                    }
                }],
                "articlesCount": 1
            }
        });

        cy.visit('/profile/mac')

    });

});