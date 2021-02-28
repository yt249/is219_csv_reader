class FilePath{
    static getAbsolutePath(file) {
        const path = require('path');
        return path.resolve(file);
    }
}

module.exports = FilePath;