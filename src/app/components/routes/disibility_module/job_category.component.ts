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
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
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

  professionalSelected(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_upeXAOQawd1vTzk0(bh);
      //appendnew_next_professionalSelected
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WKBFdujeAgSdHEwv');
    }
  }

  tehnicalSelected(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kVBxIyzLSqAvKiY5(bh);
      //appendnew_next_tehnicalSelected
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UfWMsTcTN9Q5ZBtD');
    }
  }

  lightLaborSelected(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ov62CZafpU5ABBTt(bh);
      //appendnew_next_lightLaborSelected
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pflESjmqHv9GWsjE');
    }
  }

  labourSelected(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_2S5R0AibblvYBajG(bh);
      //appendnew_next_labourSelected
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AbcCX0LXVhO04ECE');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_XSaWdgcCEgFUC9VQ(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZArdWdEAV9bM4KL2');
    }
  }

  //appendnew_flow_job_categoryComponent_start

  sd_06sTL5W3vd5q6oQV(bh) {
    try {
      this.page.jobsCategory = undefined;
      this.page.professionalSelected = false;
      this.page.showJobInput = false;
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
        jobInput: new FormControl('', [Validators.required]),
      });
      //appendnew_next_sd_ieHxDyPLZk35L57M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ieHxDyPLZk35L57M');
    }
  }

  sd_upeXAOQawd1vTzk0(bh) {
    try {
      const page = this.page;
      (page.professionalSelected = true), (page.showJobInput = true);
      //appendnew_next_sd_upeXAOQawd1vTzk0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_upeXAOQawd1vTzk0');
    }
  }

  sd_kVBxIyzLSqAvKiY5(bh) {
    try {
      const page = this.page;
      page.professionalSelected = false;
      page.showJobInput = true;

      //appendnew_next_sd_kVBxIyzLSqAvKiY5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kVBxIyzLSqAvKiY5');
    }
  }

  sd_ov62CZafpU5ABBTt(bh) {
    try {
      const page = this.page;
      page.professionalSelected = false;
      page.showJobInput = true;

      //appendnew_next_sd_ov62CZafpU5ABBTt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ov62CZafpU5ABBTt');
    }
  }

  sd_2S5R0AibblvYBajG(bh) {
    try {
      const page = this.page;
      page.professionalSelected = false;
      page.showJobInput = true;

      //appendnew_next_sd_2S5R0AibblvYBajG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2S5R0AibblvYBajG');
    }
  }

  sd_XSaWdgcCEgFUC9VQ(bh) {
    try {
      const page = this.page;
      console.log('Occupation form', page.jobsCategory.value.jobInput);
      // take the object (summaryForm) from the service (needs to be imported with dependancy) and put it inside of page.formData-(now holding the service object)
      page.formData = page.backendService.summaryForm;
      // (populate service object)inside the formData, navigate to the key and put the user input inside as the value
      page.formData.occupation = page.jobsCategory.value.jobInput;
      // log the updated service form
      console.log('backend object', page.backendService.summaryForm);

      // page.jobsCategory =  new FormGroup({
      //     category: new FormControl('', [Validators.required]),
      //     jobInput: new FormControl('', [Validators.required]),
      //   });
      //appendnew_next_sd_XSaWdgcCEgFUC9VQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XSaWdgcCEgFUC9VQ');
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
