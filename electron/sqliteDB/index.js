const { getDataDir } = require('ee-core/ps');
const path = require('path');

class BasedbService {
  constructor(options) {
    const { dbname } = options;
    this.dbname = dbname;
    this.db = undefined;
    this._init();
  }

  _init() {
    const dbFile = path.join(getDataDir(), '');
  }
}
