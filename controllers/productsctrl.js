const get = (req, res) => {
    res.status(200);
    res.send('List of Products');
};


module.exports = {
    get
};