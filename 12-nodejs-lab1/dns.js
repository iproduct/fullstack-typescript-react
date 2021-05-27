const dns = require('dns');
const { hostname } = require('os');

function test() {
    dns.resolve4('yahoo.com', function (err, addresses) {
        if (err) throw err;
        console.log(`Addresses: ${JSON.stringify(addresses)}`);
        addresses.forEach(addr => {
            dns.reverse(addr, (err, hostnames) => {
                if (err) throw err;
                console.log(`Domains for address: ${addr} -> ${JSON.stringify(hostnames)}`);
            })
        });
    });
}

test();