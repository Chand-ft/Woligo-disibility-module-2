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
  selector: 'bh-gender',
  templateUrl: './gender.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class genderComponent {
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
      this.sd_7Tj1UcnqiI266ENS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7Tj1UcnqiI266ENS(bh) {
    try {
      bh = this.sd_MuTVPON3rxyHgr6r(bh);
      //appendnew_next_sd_7Tj1UcnqiI266ENS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7Tj1UcnqiI266ENS');
    }
  }

  selectMale(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_8w95RyB7Gz6Eh80w(bh);
      //appendnew_next_selectMale
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mtc2Fmamz35I628l');
    }
  }

  selectFemale(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_oXMwjCWmIG6oPj37(bh);
      //appendnew_next_selectFemale
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wta2AkrL97stKsvO');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3sRNNb8X1sew8Rd0(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xs5tQHlcglDrfBsV');
    }
  }

  selectYes(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_T6npMUJIzYcfRB6T(bh);
      //appendnew_next_selectYes
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mD7eO87PvFrTrnPg');
    }
  }

  selectNo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NaB2ijTylB3xGTBl(bh);
      //appendnew_next_selectNo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QPF3i7iT30msXp6l');
    }
  }

  //appendnew_flow_genderComponent_start

  sd_MuTVPON3rxyHgr6r(bh) {
    try {
      this.page.selectedMale = false;
      this.page.selectedFemale = false;
      this.page.genderForm = {};
      this.page.selectedYes = false;
      this.page.selectedNo = true;
      this.page.formData = undefined;
      bh = this.sd_5zBTO96fTjUu3ogq(bh);
      //appendnew_next_sd_MuTVPON3rxyHgr6r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MuTVPON3rxyHgr6r');
    }
  }

  sd_5zBTO96fTjUu3ogq(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_zJjLPxlhNWZpTknL(bh);
      //appendnew_next_sd_5zBTO96fTjUu3ogq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5zBTO96fTjUu3ogq');
    }
  }

  sd_zJjLPxlhNWZpTknL(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_cq3M5RpBZgzazVi6(bh);
      //appendnew_next_sd_zJjLPxlhNWZpTknL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zJjLPxlhNWZpTknL');
    }
  }

  sd_cq3M5RpBZgzazVi6(bh) {
    try {
      const page = this.page;
      page.genderForm = new FormGroup({
        maternity: new FormControl('No', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
      });
      //appendnew_next_sd_cq3M5RpBZgzazVi6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cq3M5RpBZgzazVi6');
    }
  }

  sd_8w95RyB7Gz6Eh80w(bh) {
    try {
      const page = this.page;
      page.selectedMale = true;
      page.selectedFemale = false;

      //appendnew_next_sd_8w95RyB7Gz6Eh80w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8w95RyB7Gz6Eh80w');
    }
  }

  sd_oXMwjCWmIG6oPj37(bh) {
    try {
      const page = this.page;
      page.selectedFemale = true;
      page.selectedMale = false;
      //appendnew_next_sd_oXMwjCWmIG6oPj37
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oXMwjCWmIG6oPj37');
    }
  }

  sd_3sRNNb8X1sew8Rd0(bh) {
    try {
      const page = this.page;
      console.log('gender(1) form', page.genderForm.value.gender);
      console.log('gender(2) form', page.genderForm.value.maternity);

      // if (page.genderForm.maternity== ''){
      //     page.genderForm.maternity== 'No'
      // }
      // page.backendService.registerDetails= page.registerForm;
      // // form that's coming from the service after being populated from the register form inputs
      // console.log("service form",page.backendService.registerDetails.value);

      // take the object (summaryForm) from the service (needs to be imported with dependancy) and put it inside of page.formData-(now holding the service object)
      page.formData = page.backendService.summaryForm;
      // (populate service object)inside the formData, navigate to the key and put the user input inside as the value
      page.formData.gender = page.genderForm.value.gender;
      page.formData.maternity = page.genderForm.value.maternity;

      // log the updated service form
      console.log('backend object', page.backendService.summaryForm);
      //appendnew_next_sd_3sRNNb8X1sew8Rd0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3sRNNb8X1sew8Rd0');
    }
  }

  sd_T6npMUJIzYcfRB6T(bh) {
    try {
      const page = this.page;
      page.selectedYes = true;
      page.selectedNo = false;

      //appendnew_next_sd_T6npMUJIzYcfRB6T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T6npMUJIzYcfRB6T');
    }
  }

  sd_NaB2ijTylB3xGTBl(bh) {
    try {
      const page = this.page;
      page.selectedNo = true;
      page.selectedYes = false;

      //appendnew_next_sd_NaB2ijTylB3xGTBl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NaB2ijTylB3xGTBl');
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
  //appendnew_flow_genderComponent_Catch
}
