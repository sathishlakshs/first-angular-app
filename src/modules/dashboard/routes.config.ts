import {InjectionToken} from '@angular/core';

export let DASHBOARD_ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
    dashboard: 'dashboard',
};

const routesNames = {
  home: '',
  error404: '404',
  dashboard: {
    basePath: basePaths.dashboard
  }
};

export const DashboardRoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    dashboard: {
      detail: getProjects
    }
  }
};

export function getProjects(id) {
  return `/${basePaths.dashboard}/${id}`;
}
