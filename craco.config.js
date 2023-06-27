const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
// 别名s
module.exports = {
    webpack: {
        // 别名
        alias: {
            '@': resolve('src')
        },
    }
};
