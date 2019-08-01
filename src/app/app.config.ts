import { InjectionToken } from '@angular/core';
import { environment } from '../environments';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {

  /**
   * The Base URL at which the backend API resides
   * @type {string}
   */
  API_BASE_URL: string;

  /**
   * The URL at which the backend Auth Service resides
   * @type {string}
   */
  LOGIN_SERVER_URL: string;

  /**
   * The URL at which the backend User Service resides
   * @type {string}
   */
  USER_SERVICE_URL: string;

  /**
   * The URL at which the backend Query Service resides
   * @type {string}
   */
  INCIDENT_QUERY_SERVICE_URL: string;

  /**
   * The URL at which the backend Data Service resides
   * @type {string}
   */
  INCIDENT_DATA_SERVICE_URL: string;

  /**
   * Rule packages to be loaded for incident management
   */
  // INCIDENT_RULE_PACKAGES: string[];

  /**
   * Rule packages to be loaded for incident review form
   */
  INCIDENT_REVIEW_RULE_PACKAGES: string[];

  /**
   * Rule packages to be loaded for incident review form
   */
  HAZMAT_RULE_PACKAGES: string[];

  /**
   * The URL at which the backend Logging Service resides
   * @type {string}
   */
  LOGGING_SERVICE_URL: string;

  /**
   * The URL at which the backend Presentation Service resides
   * @type {string}
   */
  PRESENTATION_SERVICE_URL: string;

  /**
   * The URL at which the backend Rule Service resides
   * @type {string}
   */
  RULE_SERVICE_URL: string;

  /**
   * The URL at which the backend Rule Service resides
   * @type {string}
   */
  QUERY_MENU_DATA_SERVICE_URL: string;

  /**
   * The URL at which option data form dropdown/select controls is retrieved
   * @type {string}
   */
  LOOKUP_DATA_SERVICE_URL: string;

  /**
   * The URL at which standard call data for the incident toolbar is retrieved
   * @type {string}
   */
  STANDARD_CALL_DATA_SERVICE_URL: string;

  /**
   * The URL at which narrative template data for the resources narrative tab is retrieved
   * @type {string}
   */
  NARRATIVE_TEMPLATE_DATA_SERVICE_URL: string;

  /**
   * API Key for test page
   */
  API_KEY: string;
}

export const AppConfig: IAppConfig = {
  API_BASE_URL: 'http://' + environment.api_host + environment.api_port + environment.api_base_path + '/',
  LOGIN_SERVER_URL: 'http://' + environment.auth_host + environment.auth_port + environment.auth_base_path + '/auth',
  USER_SERVICE_URL: 'http://' + environment.api_host + environment.api_port + environment.api_base_path + '/user',
  INCIDENT_QUERY_SERVICE_URL: 'http://' + environment.api_host + environment.api_port + environment.api_base_path + '/graphql',
  INCIDENT_DATA_SERVICE_URL: 'http://' + environment.api_host + environment.api_port + environment.api_base_path + '/incident/',
  LOOKUP_DATA_SERVICE_URL: 'http://' + environment.api_host + environment.api_port + environment.api_base_path + '/lookup',
  STANDARD_CALL_DATA_SERVICE_URL: 'http://' + environment.presentation_host + environment.presentation_port + environment.presentation_base_path + '/standardCalls',
  NARRATIVE_TEMPLATE_DATA_SERVICE_URL: 'http://' + environment.presentation_host + environment.presentation_port + environment.presentation_base_path + '/narrative',
  LOGGING_SERVICE_URL: 'http://' + environment.presentation_host + environment.presentation_port + environment.presentation_base_path + '/logging',
  PRESENTATION_SERVICE_URL: 'http://' + environment.presentation_host + environment.presentation_port + environment.presentation_base_path + '/presentation',
  RULE_SERVICE_URL: 'http://' + environment.rule_host + environment.rule_port + environment.rule_base_path + '/applet/rule',
  // INCIDENT_RULE_PACKAGES: ['incident', 'incident_extra', 'incident_presentation', 'nfirs', 'nfirs_extra', 'nfirs_presentation'],
  INCIDENT_REVIEW_RULE_PACKAGES: ['incident_review', 'incident_review_presentation'],
  HAZMAT_RULE_PACKAGES: ['hazmat'],
  QUERY_MENU_DATA_SERVICE_URL: 'http://' + environment.rule_host + environment.rule_port + environment.rule_base_path + '/menu',
  API_KEY: 'vc6BY4hhcz9LhtYIkfNZ5e9yFJsGmX81nRhQcOuf'
};
