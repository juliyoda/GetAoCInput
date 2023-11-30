const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

async function getInput(day) {
    const options = {
        method: 'GET',
        url: `https://adventofcode.com/2020/day/${day}/input`,
        headers: {
            Cookie: `session=${process.env.SESSION_COOKIE}`
        }
    };

    if (!fs.existsSync(`./inputDay${day}.txt`)) {
        try {
            const { data } = await axios.request(options);

            await fs.promises.writeFile(`./inputDay${day}.txt`, data, err => {
                if (err) {
                    console.error(err);
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    return fs.readFileSync(`./inputDay${day}.txt`, 'utf8');
}

module.exports = {
    getInput
};