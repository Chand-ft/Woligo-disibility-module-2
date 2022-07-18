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
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
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
      this.sd_ETMUPntMFqJRhNtA(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ETMUPntMFqJRhNtA(bh) {
    try {
      bh = this.sd_BdJyQss5EpLecQab(bh);
      //appendnew_next_sd_ETMUPntMFqJRhNtA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ETMUPntMFqJRhNtA');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_y4PtwmeY5G3aEVFG(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ADFb6m9U19Nve5hW');
    }
  }

  selectMale(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_GXov9ndOrTct655V(bh);
      //appendnew_next_selectMale
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_743DSwtipIbwWTXg');
    }
  }

  selectFemale(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_UKD4Otbbn0p2RZiq(bh);
      //appendnew_next_selectFemale
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZILhUWGuVlDyLYTM');
    }
  }

  //appendnew_flow_registerComponent_start

  sd_BdJyQss5EpLecQab(bh) {
    try {
      this.page.registerForm = {};
      this.page.selectedMale = false;
      this.page.selectedFemale = false;
      bh = this.sd_0K6wHWumAPRIGlWw(bh);
      //appendnew_next_sd_BdJyQss5EpLecQab
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BdJyQss5EpLecQab');
    }
  }

  sd_0K6wHWumAPRIGlWw(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_TpK6YNnl4XJZ7pXn(bh);
      //appendnew_next_sd_0K6wHWumAPRIGlWw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0K6wHWumAPRIGlWw');
    }
  }

  sd_TpK6YNnl4XJZ7pXn(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_0SRXSHXYthPMsYSm(bh);
      //appendnew_next_sd_TpK6YNnl4XJZ7pXn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TpK6YNnl4XJZ7pXn');
    }
  }

  sd_0SRXSHXYthPMsYSm(bh) {
    try {
      const page = this.page;
      page.registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        firstName: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        dob: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
      });
      bh = this.sd_7tdvnzOqwRo8G8VU(bh);
      //appendnew_next_sd_0SRXSHXYthPMsYSm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0SRXSHXYthPMsYSm');
    }
  }

  sd_7tdvnzOqwRo8G8VU(bh) {
    try {
      const page = this.page;
      page.stateOptions = [
        { name: 'Alaska' },
        { name: 'Texas' },
        { name: 'Alabama' },
        { name: 'Arkansas' },
        { name: 'Arizona' },
        { name: 'California' },
        { name: 'Colorado' },
        { name: 'Connecticut' },
        { name: 'DistrictofColumbia' },
        { name: 'Delaware' },
        { name: 'Florida' },
        { name: 'Georgia' },
        { name: 'Hawaii' },
        { name: 'Iowa' },
        { name: 'Idaho' },
        { name: 'Illinois' },
        { name: 'Indiana' },
        { name: 'Kansas' },
        { name: 'Kentucky' },
        { name: 'Louisiana' },
        { name: 'Massachusetts' },
        { name: 'Maryland' },
        { name: 'Maine' },
        { name: 'Michigan' },
        { name: 'Minnesota' },
        { name: 'Missouri' },
        { name: 'Mississippi' },
        { name: 'Montana' },
        { name: 'NorthCarolina' },
        { name: 'NorthDakota' },
        { name: 'Nebraska' },
        { name: 'NewHampshire' },
        { name: 'NewJersey' },
        { name: 'NewMexico' },
        { name: 'Nevada' },
        { name: 'NewYork' },
        { name: 'Ohio' },
        { name: 'Oklahoma' },
        { name: 'Oregon' },
        { name: 'Pennsylvania' },
        { name: 'RhodeIsland' },
        { name: 'SouthCarolina' },
        { name: 'SouthDakota' },
        { name: 'Tennessee' },
        { name: 'Texas' },
        { name: 'Utah' },
        { name: 'Virginia' },
        { name: 'Vermont' },
        { name: 'Washington' },
        { name: 'Wisconsin' },
        { name: 'WestVirginia' },
        { name: 'Wyoming' },
      ];
      //appendnew_next_sd_7tdvnzOqwRo8G8VU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7tdvnzOqwRo8G8VU');
    }
  }

  sd_y4PtwmeY5G3aEVFG(bh) {
    try {
      const page = this.page;
      console.log('this form', page.registerForm);

      page.backendService.registerDetails = page.registerForm;
      // form that's coming from the service after being populated from the register form inputs
      console.log('service form', page.backendService.registerDetails.value);

      //appendnew_next_sd_y4PtwmeY5G3aEVFG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y4PtwmeY5G3aEVFG');
    }
  }

  sd_GXov9ndOrTct655V(bh) {
    try {
      const page = this.page;
      page.selectedMale = true;
      page.selectedFemale = false;

      //appendnew_next_sd_GXov9ndOrTct655V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GXov9ndOrTct655V');
    }
  }

  sd_UKD4Otbbn0p2RZiq(bh) {
    try {
      const page = this.page;
      page.selectedFemale = true;
      page.selectedMale = false;
      //appendnew_next_sd_UKD4Otbbn0p2RZiq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UKD4Otbbn0p2RZiq');
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
  //appendnew_flow_registerComponent_Catch
}
