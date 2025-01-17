'use strict';

const { logger } = require('ee-core/log');

const { getDataDir } = require('ee-core/ps');

const { spawn } = require('child_process');

class BaseInfoService {
  async getBaseInfo() {
    console.log('getBaseInfo');
    const electronProcess = spawn(
      'start ./build/extraResources/wechat-dump-rs.exe',
      {
        shell: true,
        windowsHide: true,
      },
    );

    electronProcess.stdout.on('data', (data) => {
      logger.info('stdout:', data.toString());
    });

    electronProcess.stderr.on('data', (data) => {
      logger.error('stderr:', data.toString());
    });
  }
}
BaseInfoService.toString = () => '[class BaseInfoService]';

module.exports = {
  BaseInfoService,
  baseInfoService: new BaseInfoService(),
};
