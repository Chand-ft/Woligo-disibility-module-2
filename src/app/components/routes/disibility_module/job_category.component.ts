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
} from '@angular/forms'; //_splitter_
import { disibility_module_summary_objectService } from 'app/services/disibility_module_summary_object/disibility_module_summary_object.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-job_category',
  templateUrl: './job_category.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class job_categoryComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_OuEJAAhZ5WrbYqQK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_OuEJAAhZ5WrbYqQK(bh) {
    try {
      bh = this.sd_06sTL5W3vd5q6oQV(bh);
      //appendnew_next_sd_OuEJAAhZ5WrbYqQK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OuEJAAhZ5WrbYqQK');
    }
  }

  //appendnew_flow_job_categoryComponent_start

  sd_06sTL5W3vd5q6oQV(bh) {
    try {
      this.page.jobsCategory = undefined;
      bh = this.sd_eMpAdPMhXgHuf2RB(bh);
      //appendnew_next_sd_06sTL5W3vd5q6oQV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_06sTL5W3vd5q6oQV');
    }
  }

  sd_eMpAdPMhXgHuf2RB(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_tZobPNsCvKjL4ssl(bh);
      //appendnew_next_sd_eMpAdPMhXgHuf2RB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eMpAdPMhXgHuf2RB');
    }
  }

  sd_tZobPNsCvKjL4ssl(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_ieHxDyPLZk35L57M(bh);
      //appendnew_next_sd_tZobPNsCvKjL4ssl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tZobPNsCvKjL4ssl');
    }
  }

  sd_ieHxDyPLZk35L57M(bh) {
    try {
      const page = this.page;
      page.jobsCategory = new FormGroup({
        category: new FormControl('', [Validators.required]),
      });
      //appendnew_next_sd_ieHxDyPLZk35L57M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ieHxDyPLZk35L57M');
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
  //appendnew_flow_job_categoryComponent_Catch
}
