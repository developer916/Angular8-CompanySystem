// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_host: 'localhost',
  api_port: ':8080',
  api_base_path: '/alwaysonscene/api',
  presentation_host: 'localhost',
  presentation_port: ':8081',
  presentation_base_path: '/alwaysonscene/ui',
  rule_host: 'localhost',
  rule_port: ':8081',
  rule_base_path: '/alwaysonscene/ui',
  auth_host: 'localhost',
  auth_port: ':8082',
  auth_base_path: '/alwaysonscene'
};

