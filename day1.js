const apiGet = require('./getApiInput.js');

async function main() {
    const input = await apiGet.getInput(19);

}

main();