import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-job_categoryComponent
import { job_categoryComponent } from '../components/routes/disibility_module/job_category.component';
//CORE_REFERENCE_IMPORT-disclaimer_dialogComponent
import { disclaimer_dialogComponent } from '../components/extras/disclaimer_dialog.component';
//CORE_REFERENCE_IMPORT-dialogBoxComponent
import { dialogBoxComponent } from '../components/extras/dialogBox.component';
//CORE_REFERENCE_IMPORT-female_eligibilityComponent
import { female_eligibilityComponent } from '../components/routes/disibility_module/female_eligibility.component';
//CORE_REFERENCE_IMPORT-not_eligibleComponent
import { not_eligibleComponent } from '../components/routes/disibility_module/not_eligible.component';
//CORE_REFERENCE_IMPORT-disibility_module_summary_objectService
import { disibility_module_summary_objectService } from '../services/disibility_module_summary_object/disibility_module_summary_object.service';
//CORE_REFERENCE_IMPORT-disibility_moduleComponent
import { disibility_moduleComponent } from '../components/routes/disibility_module/disibility_module.component';
//CORE_REFERENCE_IMPORT-eligibilityComponent
import { eligibilityComponent } from '../components/routes/eligibility.component';
//CORE_REFERENCE_IMPORT-price_checkComponent
import { price_checkComponent } from '../components/routes/price_check.component';
//CORE_REFERENCE_IMPORT-nicotineComponent
import { nicotineComponent } from '../components/routes/nicotine.component';
//CORE_REFERENCE_IMPORT-gov_employeeComponent
import { gov_employeeComponent } from '../components/routes/gov_employee.component';
//CORE_REFERENCE_IMPORT-gross_incomeComponent
import { gross_incomeComponent } from '../components/routes/gross_income.component';
//CORE_REFERENCE_IMPORT-full_timeComponent
import { full_timeComponent } from '../components/routes/full_time.component';
//CORE_REFERENCE_IMPORT-occupationComponent
import { occupationComponent } from '../components/routes/occupation.component';
//CORE_REFERENCE_IMPORT-provinceComponent
import { provinceComponent } from '../components/routes/province.component';
//CORE_REFERENCE_IMPORT-genderComponent
import { genderComponent } from '../components/routes/gender.component';
//CORE_REFERENCE_IMPORT-date_pickerComponent
import { date_pickerComponent } from '../components/routes/date_picker.component';
//CORE_REFERENCE_IMPORT-four_iconsComponent
import { four_iconsComponent } from '../components/routes/four_icons.component';
//CORE_REFERENCE_IMPORT-three_iconsComponent
import { three_iconsComponent } from '../components/routes/three_icons.component';
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/inside_base/footer.component';
//CORE_REFERENCE_IMPORT-page_not_foundComponent
import { page_not_foundComponent } from '../components/routes/page_not_found.component';
//CORE_REFERENCE_IMPORT-reccomended_optionsComponent
import { reccomended_optionsComponent } from '../components/routes/reccomended_options.component';
//CORE_REFERENCE_IMPORT-password_setupComponent
import { password_setupComponent } from '../components/routes/password_setup.component';
//CORE_REFERENCE_IMPORT-disibility_insuranceComponent
import { disibility_insuranceComponent } from '../components/routes/disibility_insurance.component';
//CORE_REFERENCE_IMPORT-navBar_2Component
import { navBar_2Component } from '../components/extras/navBar_2.component';
//CORE_REFERENCE_IMPORT-summaryComponent
import { summaryComponent } from '../components/routes/summary.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/routes/register.component';
//CORE_REFERENCE_IMPORT-stepperComponent
import { stepperComponent } from '../components/inside_base/stepper.component';
//CORE_REFERENCE_IMPORT-navBarComponent
import { navBarComponent } from '../components/inside_base/navBar.component';
//CORE_REFERENCE_IMPORT-base_layoutComponent
import { base_layoutComponent } from '../components/base_layout.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-job_categoryComponent
  job_categoryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-disclaimer_dialogComponent
  disclaimer_dialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogBoxComponent
  dialogBoxComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-female_eligibilityComponent
  female_eligibilityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-not_eligibleComponent
  not_eligibleComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-disibility_moduleComponent
  disibility_moduleComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-eligibilityComponent
  eligibilityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-price_checkComponent
  price_checkComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-nicotineComponent
  nicotineComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-gov_employeeComponent
  gov_employeeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-gross_incomeComponent
  gross_incomeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-full_timeComponent
  full_timeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-occupationComponent
  occupationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-provinceComponent
  provinceComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-genderComponent
  genderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-date_pickerComponent
  date_pickerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-four_iconsComponent
  four_iconsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-three_iconsComponent
  three_iconsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
  footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-page_not_foundComponent
  page_not_foundComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-reccomended_optionsComponent
  reccomended_optionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-password_setupComponent
  password_setupComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-disibility_insuranceComponent
  disibility_insuranceComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navBar_2Component
  navBar_2Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-summaryComponent
  summaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
  registerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stepperComponent
  stepperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navBarComponent
  navBarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-base_layoutComponent
  base_layoutComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-disibility_module_summary_objectService
  disibility_module_summary_objectService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: base_layoutComponent,
    children: [
      { path: 'register', component: registerComponent },
      { path: 'summary', component: summaryComponent },
      {
        path: 'disibility-insurance',
        component: disibility_insuranceComponent,
      },
      { path: 'password-setup', component: password_setupComponent },
      { path: 'reccomended-options', component: reccomended_optionsComponent },
      { path: '404', component: page_not_foundComponent },
      {
        path: 'disibility-module',
        component: disibility_moduleComponent,
        children: [
          { path: 'three', component: three_iconsComponent },
          { path: 'four', component: four_iconsComponent },
          { path: 'date', component: date_pickerComponent },
          { path: 'gender', component: genderComponent },
          { path: 'province', component: provinceComponent },
          { path: 'occupation', component: occupationComponent },
          { path: 'full-time', component: full_timeComponent },
          { path: 'gross', component: gross_incomeComponent },
          { path: 'gov', component: gov_employeeComponent },
          { path: 'nicotine', component: nicotineComponent },
          { path: 'price', component: price_checkComponent },
          { path: 'eligibility', component: eligibilityComponent },
          { path: 'not-eligible', component: not_eligibleComponent },
          {
            path: 'female-eligibility',
            component: female_eligibilityComponent,
          },
          { path: 'job-category', component: job_categoryComponent },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/home/register', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
