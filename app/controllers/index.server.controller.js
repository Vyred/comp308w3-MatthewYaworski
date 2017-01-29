exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    
    console.log(req.session.ip);
    res.render('index', {
        title: 'Hello World, And GoodBye'
    });
};