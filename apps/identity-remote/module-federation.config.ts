import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { sharedDependencies } from '../../shared/module-federation.shared';

export default createModuleFederationConfig({
  name: 'identity_module',
  exposes: {
    './Login': './src/Login.tsx',
  },
  shared: sharedDependencies,
  dts: false,
});