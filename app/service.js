var User  = require('./models/user.js');
module.exports = function(router) {

    //middle ware service status
    router.use(function(req, res, next) {
        console.log('service is working');
        next();
    });

    router.get('/', function(req, res) {
        res.json({ message: 'welcome to likeme-api' });
    });

    router.route('/users')

        .get(function(req, res) {
            User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });
        });

    router.route('/users/:_id')

        .get(function(req, res) {
                User.findById(req.params._id, function(err, id) {
                    if (err)
                        res.send(err);
                    res.json(id);
                });
            });

    router.route('/users/:email')

        .get(function(req, res) {
                User.find(req.params.email, function(err, emails) {
                    if (err)
                        res.send(err);
                    res.json(emails);
                });
            });

}