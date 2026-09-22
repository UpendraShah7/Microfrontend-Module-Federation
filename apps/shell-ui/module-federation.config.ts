import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { sharedDependencies } from '../../shared/module-federation.shared';

export default createModuleFederationConfig({
  name: 'shell_ui',
  shared: sharedDependencies,
  dts: false,
});