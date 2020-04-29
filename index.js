const websockify = require('@maximegris/node-websockify');
require('dotenv').config()
web = './public'

const port = process.env.PORT || 6110
const target = process.env.TARGET || 'localhost:6112'

websockify({
    source: `localhost:${port}`,
    target,
    web
    // cert: 'certSSL',
    // key: 'certSSL-key'
})
