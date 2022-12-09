const path = require('path');

module.exports = function override(config) {
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  });

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json', '.d.ts'],
  };

  return config;
};

const candyShop = await CandyShop.initSolCandyShop({
  candyShopCreatorAddress: "DeXFanauSzkQPriAW52N2eq2PBo4TgTsjk5Tx33t4KX9", // Candy Shop owner address
  treasuryMint: "FrHe1NUX2hRgnpZCTcxDEh8LU9uYEGU1uWhyYjvXLdFe", // Candy Shop transaction currency
  candyShopProgramId: "csbMUULiQfGjT8ezT16EoEBaiarS6VWRevTw1JMydrS", // Candy Shop program ID
  env: "mainnet-beta", // network
});
