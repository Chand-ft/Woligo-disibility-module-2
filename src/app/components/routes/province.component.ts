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
  selector: 'bh-province',
  templateUrl: './province.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class provinceComponent {
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
      this.sd_xlwO6VaTzbThwA2p(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xlwO6VaTzbThwA2p(bh) {
    try {
      bh = this.sd_Ba0xZOZEzUIEQDij(bh);
      //appendnew_next_sd_xlwO6VaTzbThwA2p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xlwO6VaTzbThwA2p');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_039Tq8DHmaON7RPH(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ytuqJKi0QoAWDXI');
    }
  }

  //appendnew_flow_provinceComponent_start

  sd_Ba0xZOZEzUIEQDij(bh) {
    try {
      this.page.states = [];
      this.page.formData = undefined;
      bh = this.sd_1jb57hEEqNkijoyI(bh);
      //appendnew_next_sd_Ba0xZOZEzUIEQDij
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ba0xZOZEzUIEQDij');
    }
  }

  sd_1jb57hEEqNkijoyI(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_EEeYDgCHE4BS7nB6(bh);
      //appendnew_next_sd_1jb57hEEqNkijoyI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1jb57hEEqNkijoyI');
    }
  }

  sd_EEeYDgCHE4BS7nB6(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_asfdcpH4kAx3hF2P(bh);
      //appendnew_next_sd_EEeYDgCHE4BS7nB6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EEeYDgCHE4BS7nB6');
    }
  }

  sd_asfdcpH4kAx3hF2P(bh) {
    try {
      const page = this.page;
      page.selectStateForm = new FormGroup({
        state: new FormControl('', [Validators.required]),
      });

      console.log('State form', page.selectStateForm);

      // page.states = [
      //         {name: 'Alaska'},
      //         {name: 'Texas'},
      //         {name: 'Alabama'},
      //         {name: 'Arkansas'},
      //         {name: 'Arizona'},
      //         {name: 'California'},
      //         {name: 'Colorado'},
      //         {name: 'Connecticut'},
      //         {name: 'DistrictofColumbia'},
      //         {name: 'Delaware'},
      //         {name: 'Florida'},
      //         {name: 'Georgia'},
      //         {name: 'Hawaii'},
      //         {name: 'Iowa'},
      //         {name: 'Idaho'},
      //         {name: 'Illinois'},
      //         {name: 'Indiana'},
      //         {name: 'Kansas'},
      //         {name: 'Kentucky'},
      //         {name: 'Louisiana'},
      //         {name: 'Massachusetts'},
      //         {name: 'Maryland'},
      //         {name: 'Maine'},
      //         {name: 'Michigan'},
      //         {name: 'Minnesota'},
      //         {name: 'Missouri'},
      //         {name: 'Mississippi'},
      //         {name: 'Montana'},
      //         {name: 'NorthCarolina'},
      //         {name: 'NorthDakota'},
      //         {name: 'Nebraska'},
      //         {name: 'NewHampshire'},
      //         {name: 'NewJersey'},
      //         {name: 'NewMexico'},
      //         {name: 'Nevada'},
      //         {name: 'NewYork'},
      //         {name: 'Ohio'},
      //         {name: 'Oklahoma'},
      //         {name: 'Oregon'},
      //         {name: 'Pennsylvania'},
      //         {name: 'RhodeIsland'},
      //         {name: 'SouthCarolina'},
      //         {name: 'SouthDakota'},
      //         {name: 'Tennessee'},
      //         {name: 'Texas'},
      //         {name: 'Utah'},
      //         {name: 'Virginia'},
      //         {name: 'Vermont'},
      //         {name: 'Washington'},
      //         {name: 'Wisconsin'},
      //         {name: 'WestVirginia'},
      //         {name: 'Wyoming'}
      //         ];
      bh = this.sd_0zWyN5i4zvkyPjTv(bh);
      //appendnew_next_sd_asfdcpH4kAx3hF2P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_asfdcpH4kAx3hF2P');
    }
  }

  sd_0zWyN5i4zvkyPjTv(bh) {
    try {
      const page = this.page;
      page.stateOptions = [
        { name: 'Alaska' },
        // {name: 'Texas'},
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
      //appendnew_next_sd_0zWyN5i4zvkyPjTv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0zWyN5i4zvkyPjTv');
    }
  }

  sd_039Tq8DHmaON7RPH(bh) {
    try {
      const page = this.page;
      console.log('State form', page.selectStateForm.value.state);

      // page.backendService.registerDetails= page.registerForm;
      // // form that's coming from the service after being populated from the register form inputs
      // console.log("service form",page.backendService.registerDetails.value);

      // take the object (summaryForm) from the service (needs to be imported with dependancy) and put it inside of page.formData-(now holding the service object)
      page.formData = page.backendService.summaryForm;
      // (populate service object)inside the formData, navigate to the key and put the user input inside as the value
      page.formData.state = page.selectStateForm.value.state;

      // log the updated service form
      console.log('backend object', page.backendService.summaryForm);
      //appendnew_next_sd_039Tq8DHmaON7RPH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_039Tq8DHmaON7RPH');
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
  //appendnew_flow_provinceComponent_Catch
}
