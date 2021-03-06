import React from 'react';

import { PGRModule, PGRLinks, PGRReducers } from "@egovernments/digit-ui-module-pgr";
// import { FSMModule, FSMLinks } from "@egovernments/digit-ui-module-fsm";
import { DigitUI } from "@egovernments/digit-ui-module-core";

import Registry from "./ComponentRegistry";

const enabledModules = ["PGR"];
const registry = new Registry({
  PGRLinks,
  PGRModule,
  // FSMModule,
  // FSMLinks,
});
const moduleReducers = (initData) => ({
  pgr: PGRReducers(initData),
});

function App() {
  const stateCode = globalConfigs?.getConfig("STATE_LEVEL_TENANT_ID") || process.env.STATE_LEVEL_TENANT_ID;
  if (!stateCode) {
    return <h1>stateCode is not defined</h1>
  }
  return (
    <DigitUI stateCode={stateCode} registry={registry} enabledModules={enabledModules} moduleReducers={moduleReducers} />
  );
}

export default App;
