'use strict';

const { logger } = require('ee-core/log');
const { baseInfoService } = require('../service/baseInfo');

/**
 * baseInfo
 * @class
 */
class BaseInfoController {
  /**
   * getBaseInfo
   */
  async getBaseInfo() {
    const result = await baseInfoService.getBaseInfo();
    logger.info('service result:', result);

    return result;
  }
}

BaseInfoController.toString = () => '[class BaseInfoController]';

module.exports = BaseInfoController;
