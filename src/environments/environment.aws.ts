// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_host: 'ec2-54-185-33-79.us-west-2.compute.amazonaws.com',
  api_port: ':8080',
  api_base_path: '/alwaysonscene/api',
  presentation_host: 'ec2-54-185-33-79.us-west-2.compute.amazonaws.com',
  presentation_port: ':8081',
  presentation_base_path: '/alwaysonscene/ui',
  rule_host: 'ec2-54-185-33-79.us-west-2.compute.amazonaws.com',
  rule_port: ':8081',
  rule_base_path: '/alwaysonscene/ui',
  auth_host: 'ec2-54-185-33-79.us-west-2.compute.amazonaws.com',
  auth_port: ':8081',
  auth_base_path: '/alwaysonscene'
};

