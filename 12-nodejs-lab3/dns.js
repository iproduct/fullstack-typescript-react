const dns = require('dns');

dns.resolve4('yahoo.com', function(err, addresses){
    if(err) throw err;
    console.log(`Addresses: ${JSON.stringify(addresses)}`);
    addresses.forEach(addr => {
        dns.reverse(addr, function(err, hostnames){
            if(err) throw err;
            console.log(`Address [${addr}] => ${JSON.stringify(hostnames)}`)
        });
    });
})