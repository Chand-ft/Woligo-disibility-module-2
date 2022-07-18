/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { disibility_module_summary_objectService } from 'app/services/disibility_module_summary_object/disibility_module_summary_object.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-password_setup',
  templateUrl: './password_setup.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class password_setupComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_fOEYbesY7PxlkVnX(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_fOEYbesY7PxlkVnX(bh) {
    try {
      bh = this.sd_Sw35zwQuuj0J5KyH(bh);
      //appendnew_next_sd_fOEYbesY7PxlkVnX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fOEYbesY7PxlkVnX');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_nIQC4hRMD1O1O2EQ(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wQsusR9RUCeGZWiu');
    }
  }

  //appendnew_flow_password_setupComponent_start

  sd_Sw35zwQuuj0J5KyH(bh) {
    try {
      this.page.loginForm = {};
      bh = this.sd_yexqVeVEWp7Sfrpn(bh);
      //appendnew_next_sd_Sw35zwQuuj0J5KyH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sw35zwQuuj0J5KyH');
    }
  }

  sd_yexqVeVEWp7Sfrpn(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_Sf9LgzzmnZrbipUX(bh);
      //appendnew_next_sd_yexqVeVEWp7Sfrpn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yexqVeVEWp7Sfrpn');
    }
  }

  sd_Sf9LgzzmnZrbipUX(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_KvIafFB5WEYfXz5U(bh);
      //appendnew_next_sd_Sf9LgzzmnZrbipUX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sf9LgzzmnZrbipUX');
    }
  }

  sd_KvIafFB5WEYfXz5U(bh) {
    try {
      const page = this.page;
      page.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
      });
      //appendnew_next_sd_KvIafFB5WEYfXz5U
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KvIafFB5WEYfXz5U');
    }
  }

  sd_nIQC4hRMD1O1O2EQ(bh) {
    try {
      const page = this.page;
      console.log('this form', page.loginForm);

      page.backendService.loginDetails = page.loginForm;
      // form that's coming from the service after being populated from the register form inputs
      console.log(
        'service form(login)',
        page.backendService.loginDetails.value
      );

      //appendnew_next_sd_nIQC4hRMD1O1O2EQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nIQC4hRMD1O1O2EQ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_password_setupComponent_Catch
}
