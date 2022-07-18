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
  selector: 'bh-gross_income',
  templateUrl: './gross_income.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class gross_incomeComponent {
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
      this.sd_Qhs5Ss0kURUJdx9I(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Qhs5Ss0kURUJdx9I(bh) {
    try {
      bh = this.sd_SRvENg4sov0qPTvo(bh);
      //appendnew_next_sd_Qhs5Ss0kURUJdx9I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qhs5Ss0kURUJdx9I');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wEaA2bBekJkcjyfD(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T7fv7EqLBcQGRk40');
    }
  }

  //appendnew_flow_gross_incomeComponent_start

  sd_SRvENg4sov0qPTvo(bh) {
    try {
      this.page.selectGrossIncomeForm = undefined;
      this.page.formData = undefined;
      bh = this.sd_tlvM5ACiG9Qbz1D5(bh);
      //appendnew_next_sd_SRvENg4sov0qPTvo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SRvENg4sov0qPTvo');
    }
  }

  sd_tlvM5ACiG9Qbz1D5(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_GfZA5BTCXazmKkvQ(bh);
      //appendnew_next_sd_tlvM5ACiG9Qbz1D5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tlvM5ACiG9Qbz1D5');
    }
  }

  sd_GfZA5BTCXazmKkvQ(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_SsvZVCWearjcHIgu(bh);
      //appendnew_next_sd_GfZA5BTCXazmKkvQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GfZA5BTCXazmKkvQ');
    }
  }

  sd_SsvZVCWearjcHIgu(bh) {
    try {
      const page = this.page;
      page.selectGrossIncomeForm = new FormGroup({
        grossIncome: new FormControl('', [
          Validators.required,
          Validators.min(1200),
          Validators.pattern('[0-9 ]*'),
        ]),
      });

      console.log('Gross Income form', page.selectGrossIncomeForm);
      //appendnew_next_sd_SsvZVCWearjcHIgu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SsvZVCWearjcHIgu');
    }
  }

  sd_wEaA2bBekJkcjyfD(bh) {
    try {
      const page = this.page;
      console.log(
        'Gross Income form',
        page.selectGrossIncomeForm.value.grossIncome
      );

      // take the object (summaryForm) from the service (needs to be imported with dependancy) and put it inside of page.formData-(now holding the service object)
      page.formData = page.backendService.summaryForm;
      // (populate service object)inside the formData, navigate to the key and put the user input inside as the value
      page.formData.grossIncome = page.selectGrossIncomeForm.value.grossIncome;
      // log the updated service form
      console.log('backend object', page.backendService.summaryForm);
      //appendnew_next_sd_wEaA2bBekJkcjyfD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wEaA2bBekJkcjyfD');
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
  //appendnew_flow_gross_incomeComponent_Catch
}
