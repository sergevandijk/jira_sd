const path = require('path');

const ROOT_DIR = __dirname;
const VISUAL_REGRESSION_DIR = path.join(ROOT_DIR, '.visual_regression');

module.exports = {
    baseImageRepository:
        'ssh://git@stash.atlassian.com:7997/sdserver/visual-regression-images.git',
    stashApiUrl: 'https://stash.atlassian.com/rest/api/latest/',
    reportToken: 'jsds-vr-statlassian-token',
    reportNamespace: 'jsds-vr-storage',
    rootDir: ROOT_DIR,
    visualRegressionDir: VISUAL_REGRESSION_DIR,
    envUser: 'bamboo_jsds_stash_bot_username',
    envToken: 'bamboo_jsds_stash_bot_token_password',
    stashProject: 'SDSERVER',
    stashRepository: 'servicedesk',
};
