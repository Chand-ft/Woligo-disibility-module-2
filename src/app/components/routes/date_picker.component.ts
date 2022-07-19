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
  ValidationErrors,
} from '@angular/forms'; //_splitter_
import { disibility_module_summary_objectService } from 'app/services/disibility_module_summary_object/disibility_module_summary_object.service'; //_splitter_
import { NgxAgeValidator } from 'ngx-age-validator'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-date_picker',
  templateUrl: './date_picker.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class date_pickerComponent {
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
      this.sd_tKFRXUWhhpI6WDXW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_tKFRXUWhhpI6WDXW(bh) {
    try {
      bh = this.sd_BTFCfA3abSwxojZw(bh);
      //appendnew_next_sd_tKFRXUWhhpI6WDXW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tKFRXUWhhpI6WDXW');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_giBh7k3T5oVFyrgm(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K596gUwW8U9JRvk9');
    }
  }

  //appendnew_flow_date_pickerComponent_start

  sd_BTFCfA3abSwxojZw(bh) {
    try {
      this.page.dateOfBirth = undefined;
      this.page.formData = undefined;
      this.page.goToVar = undefined;
      bh = this.sd_cCbwr4YLRGgCYzEB(bh);
      //appendnew_next_sd_BTFCfA3abSwxojZw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BTFCfA3abSwxojZw');
    }
  }

  sd_cCbwr4YLRGgCYzEB(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_LmHouawhoPBKdoO6(bh);
      //appendnew_next_sd_cCbwr4YLRGgCYzEB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cCbwr4YLRGgCYzEB');
    }
  }

  sd_LmHouawhoPBKdoO6(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_EQm0gRptlXadAXCw(bh);
      //appendnew_next_sd_LmHouawhoPBKdoO6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LmHouawhoPBKdoO6');
    }
  }

  sd_EQm0gRptlXadAXCw(bh) {
    try {
      bh = this.sd_aGsmQfCbZIBnsI0r(bh);
      //appendnew_next_sd_EQm0gRptlXadAXCw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EQm0gRptlXadAXCw');
    }
  }

  sd_aGsmQfCbZIBnsI0r(bh) {
    try {
      const page = this.page;
      page.dateOfBirth = new FormGroup({
        // dob: new FormControl('', [Validators.required])
        dob: new FormControl(page.backendService.summaryForm.dob, [
          NgxAgeValidator(18, 60.5),
          Validators.required,
        ]),
      });
      console.log('Date', page.dateOfBirth);
      console.log('on Init object', page.backendService.summaryForm.dob);

      bh = this.sd_zsYDmTwY7m8DYVGf(bh);
      //appendnew_next_sd_aGsmQfCbZIBnsI0r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aGsmQfCbZIBnsI0r');
    }
  }

  sd_zsYDmTwY7m8DYVGf(bh) {
    try {
      const page = this.page;
      page.dateOfBirth.controls.dob.valueChanges.subscribe(() => {
        const controlErrors: ValidationErrors | null =
          page.dateOfBirth.controls.dob.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            console.log(
              ' keyError: ' + keyError + ', err value: ',
              controlErrors[keyError]
            );
          });
        }
      });
      //appendnew_next_sd_zsYDmTwY7m8DYVGf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zsYDmTwY7m8DYVGf');
    }
  }

  sd_giBh7k3T5oVFyrgm(bh) {
    try {
      const page = this.page; // This gets the user input
      // console.log("date-picker form",page.dateOfBirth.value.dob);

      // page.backendService.registerDetails= page.registerForm;
      // // form that's coming from the service after being populated from the register form inputs
      // console.log("service form",page.backendService.registerDetails.value);

      // console.log("date-picker form",page.dateOfBirth.value.dob);

      // take the object (summaryForm) from the service (needs to be imported with dependancy) and put it inside of page.formData-(now holding the service object)
      page.formData = page.backendService.summaryForm;
      // (populate service object)inside the formData, navigate to the "dob" key and put the user input inside
      page.formData.dob = page.dateOfBirth.value.dob;
      // log the updated service form
      // console.log("log form backend object", page.backendService.summaryForm);

      // console.log("testing", page.dateOfBirth.controls.dob.hasError('tooOld'));

      //appendnew_next_sd_giBh7k3T5oVFyrgm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_giBh7k3T5oVFyrgm');
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
  //appendnew_flow_date_pickerComponent_Catch
}
