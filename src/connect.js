const { typesBundleForPolkadotApps } = require("@darwinia/types/mix");
const { ApiPromise, WsProvider } = require("@polkadot/api");

const darwiniaTypesBundle = {
  spec: {
    Crab: typesBundleForPolkadotApps.spec.Crab,
    Darwinia: typesBundleForPolkadotApps.spec.Darwinia,
    Pangolin: typesBundleForPolkadotApps.spec.Pangolin,
  },
};

const wsProvider = new WsProvider("wss://rpc.darwinia.network");

ApiPromise.create({ provider: wsProvider, typesBundle: darwiniaTypesBundle })
  .then((api) => {
    api.query.system
      .account("2taB6H6skSMonaGSoR4pdSFZMsK3TFrFSwkGjvXBPo8Rjgro")
      .then(({ nonce, data }) => {
        console.log(`balance of ${data.free} and a nonce of ${nonce}`);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });