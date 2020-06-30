import * as dns from 'dns';

dns.resolve4('yahoo.com', (err, addresses) => {
    console.log(`Addresses: ${JSON.stringify(addresses)}`);
    addresses.map(addr => dns.reverse(addr, (err, hostnames) => {
        console.log(`reverse for ${addr}: ${JSON.stringify(hostnames)}`);
        
    }))
});
