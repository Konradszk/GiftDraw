import { NgModule } from '@angular/core';

export function errorIfModuleAlreadyLoaded(
  parentModule: NgModule | undefined,
  moduleName: string
): void {
  if (parentModule) {
    throw new Error(`${moduleName} has already loaded. \n Import core module in in AppModule/coreModule only`);
  }
}
