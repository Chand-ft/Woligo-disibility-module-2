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
  selector: 'bh-nicotine',
  templateUrl: './nicotine.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class nicotineComponent {
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
      this.sd_aU6jvUFuWdc8oXcE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_aU6jvUFuWdc8oXcE(bh) {
    try {
      bh = this.sd_ndzZCs2Tpk5KXysJ(bh);
      //appendnew_next_sd_aU6jvUFuWdc8oXcE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aU6jvUFuWdc8oXcE');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_8Du4k2inGqqo6IlB(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K0QUOsQKw4iowkl6');
    }
  }

  selectYes(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_itE5ogG9MmIO3gw9(bh);
      //appendnew_next_selectYes
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZJaOx4p1mnWQQnay');
    }
  }

  selectNo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_pzQMGwlOTBlZhIi3(bh);
      //appendnew_next_selectNo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fniA2nO7mjoRoJzJ');
    }
  }

  //appendnew_flow_nicotineComponent_start

  sd_ndzZCs2Tpk5KXysJ(bh) {
    try {
      this.page.selectNicotineForm = undefined;
      this.page.selectedYes = false;
      this.page.selectedNo = false;
      this.page.formData = undefined;
      bh = this.sd_mnWbUPxcVWRAJTXO(bh);
      //appendnew_next_sd_ndzZCs2Tpk5KXysJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ndzZCs2Tpk5KXysJ');
    }
  }

  sd_mnWbUPxcVWRAJTXO(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_CNlH5zGTBgBPYrAe(bh);
      //appendnew_next_sd_mnWbUPxcVWRAJTXO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mnWbUPxcVWRAJTXO');
    }
  }

  sd_CNlH5zGTBgBPYrAe(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_RJo8KuYTztIetSMO(bh);
      //appendnew_next_sd_CNlH5zGTBgBPYrAe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CNlH5zGTBgBPYrAe');
    }
  }

  sd_RJo8KuYTztIetSMO(bh) {
    try {
      const page = this.page;
      page.selectNicotineForm = new FormGroup({
        nicotine: new FormControl(page.backendService.summaryForm.nicotine, [
          Validators.required,
        ]),
      });
      if (page.backendService.summaryForm.nicotine === 'Yes') {
        page.selectedYes = true;
      } else {
        page.selectedYes = false;
      }
      if (page.backendService.summaryForm.nicotine === 'No') {
        page.selectedNo = true;
      } else {
        page.selectedNo = false;
      }

      console.log('Full Time form', page.selectNicotineForm);
      //appendnew_next_sd_RJo8KuYTztIetSMO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RJo8KuYTztIetSMO');
    }
  }

  sd_8Du4k2inGqqo6IlB(bh) {
    try {
      const page = this.page;
      console.log('Nicotine form', page.selectNicotineForm.value.nicotine);

      // take the object (summaryForm) from the service (needs to be imported with dependancy) and put it inside of page.formData-(now holding the service object)
      page.formData = page.backendService.summaryForm;
      // (populate service object)inside the formData, navigate to the key and put the user input inside as the value
      page.formData.nicotine = page.selectNicotineForm.value.nicotine;
      // log the updated service form
      console.log('backend object', page.backendService.summaryForm);
      //appendnew_next_sd_8Du4k2inGqqo6IlB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Du4k2inGqqo6IlB');
    }
  }

  sd_itE5ogG9MmIO3gw9(bh) {
    try {
      const page = this.page;
      page.selectedYes = true;
      page.selectedNo = false;

      //appendnew_next_sd_itE5ogG9MmIO3gw9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_itE5ogG9MmIO3gw9');
    }
  }

  sd_pzQMGwlOTBlZhIi3(bh) {
    try {
      const page = this.page;
      page.selectedNo = true;
      page.selectedYes = false;

      //appendnew_next_sd_pzQMGwlOTBlZhIi3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pzQMGwlOTBlZhIi3');
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
  //appendnew_flow_nicotineComponent_Catch
}
