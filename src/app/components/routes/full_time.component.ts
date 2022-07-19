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
  selector: 'bh-full_time',
  templateUrl: './full_time.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class full_timeComponent {
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
      this.sd_7dSRvUEjcs4rha9q(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7dSRvUEjcs4rha9q(bh) {
    try {
      bh = this.sd_n7gfJTu8KV9rYIJX(bh);
      //appendnew_next_sd_7dSRvUEjcs4rha9q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7dSRvUEjcs4rha9q');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_1We4FzNY6RVSfUvf(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WncRTF4AJGP5Py2q');
    }
  }

  selectYes(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kxt10M0wqO2DdRKR(bh);
      //appendnew_next_selectYes
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_17j4GbCrEvA61dhQ');
    }
  }

  selectNo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_mIbrhae60mg214LM(bh);
      //appendnew_next_selectNo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JRhKhtSe42Q7TMhA');
    }
  }

  //appendnew_flow_full_timeComponent_start

  sd_n7gfJTu8KV9rYIJX(bh) {
    try {
      this.page.selectFullTimeForm = {};
      this.page.selectedYes = false;
      this.page.selectedNo = false;
      this.page.formData = undefined;
      bh = this.sd_oyF2wPw08fEv4xRE(bh);
      //appendnew_next_sd_n7gfJTu8KV9rYIJX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n7gfJTu8KV9rYIJX');
    }
  }

  sd_oyF2wPw08fEv4xRE(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_RxvpiOq9vMEHFkL9(bh);
      //appendnew_next_sd_oyF2wPw08fEv4xRE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oyF2wPw08fEv4xRE');
    }
  }

  sd_RxvpiOq9vMEHFkL9(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_vQSio3AzkUEupBzl(bh);
      //appendnew_next_sd_RxvpiOq9vMEHFkL9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RxvpiOq9vMEHFkL9');
    }
  }

  sd_vQSio3AzkUEupBzl(bh) {
    try {
      const page = this.page;
      page.selectFullTimeForm = new FormGroup({
        fullTime: new FormControl(page.backendService.summaryForm.fullTime, [
          Validators.required,
        ]),
      });

      console.log('Full Time form', page.selectFullTimeForm);
      //appendnew_next_sd_vQSio3AzkUEupBzl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vQSio3AzkUEupBzl');
    }
  }

  sd_1We4FzNY6RVSfUvf(bh) {
    try {
      const page = this.page;
      console.log('Full Time form', page.selectFullTimeForm.value.fullTime);

      // page.backendService.registerDetails= page.registerForm;
      // // form that's coming from the service after being populated from the register form inputs
      // console.log("service form",page.backendService.registerDetails.value);

      // take the object (summaryForm) from the service (needs to be imported with dependancy) and put it inside of page.formData-(now holding the service object)
      page.formData = page.backendService.summaryForm;
      // (populate service object)inside the formData, navigate to the key and put the user input inside as the value
      page.formData.fullTime = page.selectFullTimeForm.value.fullTime;
      // log the updated service form
      console.log('backend object', page.backendService.summaryForm);
      //appendnew_next_sd_1We4FzNY6RVSfUvf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1We4FzNY6RVSfUvf');
    }
  }

  sd_kxt10M0wqO2DdRKR(bh) {
    try {
      const page = this.page;
      page.selectedYes = true;
      page.selectedNo = false;

      //appendnew_next_sd_kxt10M0wqO2DdRKR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kxt10M0wqO2DdRKR');
    }
  }

  sd_mIbrhae60mg214LM(bh) {
    try {
      const page = this.page;
      page.selectedNo = true;
      page.selectedYes = false;

      //appendnew_next_sd_mIbrhae60mg214LM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mIbrhae60mg214LM');
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
  //appendnew_flow_full_timeComponent_Catch
}
