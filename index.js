const core = require('@actions/core');
(async () => {
  try {
    // TODO: Your implementation
  } catch (error) {
    await core.setFailed(error.stack || error.message);
  }
})();
