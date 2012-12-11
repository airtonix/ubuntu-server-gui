define(function (require) {
    var $ = require('jquery');
    var chai = require("chai");
    var sinonChai = require("sinon_chai");

    $(document).ready(function() {
        // Chai
        assert = chai.assert;
        should = chai.should();
        expect = chai.expect;

        // Mocha
        mocha.setup({
            ui: 'bdd',
            ignoreLeaks: true
        });

        require([
            '../test/App.spec',
            // Views
            'views/LoginSignup.spec.js',
            'views/Login.spec.js',
            'views/Signup.spec.js',
            // Models
            '../test/models/Server.spec',
            '../test/models/User.spec',
            '../test/models/Session.spec',
            // Controllers
            '../test/controllers/Base.spec',
            // Routers
            '../test/routers/Base.spec'
            ],
            function() {
                chai.use(sinonChai);
                mocha.run();
            }
        );

    });

});

