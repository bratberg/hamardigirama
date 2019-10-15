const fetch = require('node-fetch');

export default function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    fetch('https://api.meetup.com/Hamar-Digirama/events?status=upcoming&desc=true')
        .then(r => r.json())
        .then(res.json)
        .catch(error => {
            console.log(error)
            res.status(500).end();
        });
};
