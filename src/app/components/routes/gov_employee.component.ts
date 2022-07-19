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
  selector: 'bh-gov_employee',
  templateUrl: './gov_employee.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class gov_employeeComponent {
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
      this.sd_bh7JxOveQSWf0PJz(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bh7JxOveQSWf0PJz(bh) {
    try {
      bh = this.sd_wZxiBuX7LERfeLYV(bh);
      //appendnew_next_sd_bh7JxOveQSWf0PJz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bh7JxOveQSWf0PJz');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_2sRO0AqsupTlQCzV(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R1KcsUQpJSs8GgCs');
    }
  }

  selectYes(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_0bR5VPSgiVU1gudK(bh);
      //appendnew_next_selectYes
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N6yjx0XOU6Rx1xN7');
    }
  }

  selectNo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KiwkD9hfpuAtOoU0(bh);
      //appendnew_next_selectNo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7deVPGqEIGVxL60X');
    }
  }

  //appendnew_flow_gov_employeeComponent_start

  sd_wZxiBuX7LERfeLYV(bh) {
    try {
      this.page.selectGovEmployeeForm = undefined;
      this.page.slectedYes = false;
      this.page.selectedNo = false;
      bh = this.sd_vLIUtJ74s6jy0Rb1(bh);
      //appendnew_next_sd_wZxiBuX7LERfeLYV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wZxiBuX7LERfeLYV');
    }
  }

  sd_vLIUtJ74s6jy0Rb1(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_ip0ulOQToKOiQuaK(bh);
      //appendnew_next_sd_vLIUtJ74s6jy0Rb1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vLIUtJ74s6jy0Rb1');
    }
  }

  sd_ip0ulOQToKOiQuaK(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_SbMzmT1NZ4ATsZX1(bh);
      //appendnew_next_sd_ip0ulOQToKOiQuaK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ip0ulOQToKOiQuaK');
    }
  }

  sd_SbMzmT1NZ4ATsZX1(bh) {
    try {
      const page = this.page;
      page.selectGovEmployeeForm = new FormGroup({
        govEmployee: new FormControl(
          page.backendService.summaryForm.govEmployee,
          [Validators.required]
        ),
        category: new FormControl(page.backendService.summaryForm.category),
        // state: new FormControl(''),
      });
      if (page.backendService.summaryForm.govEmployee === 'Yes') {
        page.selectedYes = true;
      } else {
        page.selectedYes = false;
      }
      if (page.backendService.summaryForm.govEmployee === 'No') {
        page.selectedNo = true;
      } else {
        page.selectedNo = false;
      }

      console.log('Gov Employee form', page.selectGovEmployeeForm);
      bh = this.sd_svZnZwujgFWZaWe7(bh);
      //appendnew_next_sd_SbMzmT1NZ4ATsZX1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SbMzmT1NZ4ATsZX1');
    }
  }

  sd_svZnZwujgFWZaWe7(bh) {
    try {
      const page = this.page;
      page.govCatOptions = [
        {
          name: 'Department of Agriculture, Land Reform and Rural Development',
        },
        { name: 'Department of Basic Education' },
        {
          name: 'Minister of Communications	Department of Communications and Digital Technologies',
        },
        { name: 'Department of Cooperative Governance' },
        { name: 'Department of Traditional Affairs' },
        { name: 'Department of Defence' },
        { name: 'Department of Military Veterans' },
        { name: 'Department of Employment and Labour' },
        { name: 'Department of Environment, Forestry and Fisheries' },
        { name: 'National Treasury' },
        { name: 'South African Revenue Service' },
        { name: 'Department of Health' },
        { name: 'Department of Higher Education and Training' },
        { name: 'Department of Science and Innovation' },
        { name: 'Department of Home Affairs' },
        { name: 'Department of Human Settlements' },
        { name: 'Department of International Relations and Cooperation' },
        { name: 'Department of Justice and Constitutional Development' },
        { name: 'Department of Correctional Services' },
        { name: 'Department of Mineral Resources and Energy' },
        { name: 'Department of Police' },
        { name: 'South African Police Service' },
        { name: 'Independent Police Investigative Directorate' },
        { name: 'Civilian Secretariat for the Police Service' },
        { name: 'Department of Planning, Monitoring and Evaluation' },
        { name: 'Government Communication and Information System' },
        { name: 'State Security Agency' },
        { name: 'Statistics South Africa' },
        { name: 'Department of Women, Youth and Persons with Disabilities' },
        { name: 'Department of Public Enterprises' },
        { name: 'Department of Public Service and Administration' },
        { name: 'National School of Government' },
        { name: 'Department of Public Works and Infrastructure' },
        { name: 'Department of Small Business Development' },
        { name: 'Department of Social Development' },
        { name: 'Department of Sports, Arts and Culture' },
        { name: 'Department of Tourism' },
        { name: 'Department of Trade, Industry and Competition' },
        { name: 'Department of Transport' },
        { name: 'Department of Water and Sanitation' },
      ];
      //appendnew_next_sd_svZnZwujgFWZaWe7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_svZnZwujgFWZaWe7');
    }
  }

  sd_2sRO0AqsupTlQCzV(bh) {
    try {
      const page = this.page;
      console.log(
        'Gov Employee form',
        page.selectGovEmployeeForm.value.govEmployee
      );

      // take the object (summaryForm) from the service (needs to be imported with dependancy) and put it inside of page.formData-(now holding the service object)
      page.formData = page.backendService.summaryForm;
      // (populate service object)inside the formData, navigate to the key and put the user input inside as the value
      page.formData.govEmployee = page.selectGovEmployeeForm.value.govEmployee;
      // log the updated service form
      console.log('backend object', page.backendService.summaryForm);
      //appendnew_next_sd_2sRO0AqsupTlQCzV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2sRO0AqsupTlQCzV');
    }
  }

  sd_0bR5VPSgiVU1gudK(bh) {
    try {
      const page = this.page;
      page.selectedYes = true;
      page.selectedNo = false;

      //appendnew_next_sd_0bR5VPSgiVU1gudK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0bR5VPSgiVU1gudK');
    }
  }

  sd_KiwkD9hfpuAtOoU0(bh) {
    try {
      const page = this.page;
      page.selectedNo = true;
      page.selectedYes = false;

      //appendnew_next_sd_KiwkD9hfpuAtOoU0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KiwkD9hfpuAtOoU0');
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
  //appendnew_flow_gov_employeeComponent_Catch
}
