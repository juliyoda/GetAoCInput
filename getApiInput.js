const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

module.exports = {
    async getInput(day) {
        const options = {
            method: 'GET',
            url: `https://adventofcode.com/2023/day/${day}/input`,
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

                return data;
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                return fs.readFileSync(`./inputDay${day}.txt`, 'utf8');
            } catch (error) {
                console.error(error);
            }
        }
    }
};