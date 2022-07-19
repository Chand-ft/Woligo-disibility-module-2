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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dialogBoxComponent } from '../extras/dialogBox.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-four_icons',
  templateUrl: './four_icons.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class four_iconsComponent {
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
      this.sd_jrCvXunhCR4JG9dp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jrCvXunhCR4JG9dp(bh) {
    try {
      bh = this.sd_CyLyTFgB5NLqWyEP(bh);
      //appendnew_next_sd_jrCvXunhCR4JG9dp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jrCvXunhCR4JG9dp');
    }
  }

  toggleDisabilityInsuranceImage(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VVV52rxoz4BtSh3w(bh);
      //appendnew_next_toggleDisabilityInsuranceImage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wYlsbEFnmTiGXdWC');
    }
  }

  openDialog(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = {};
      bh = this.sd_9wtu4ysoLW6k9CN6(bh);
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_513zAdEHzjcGPeHM');
    }
  }

  //appendnew_flow_four_iconsComponent_start

  sd_CyLyTFgB5NLqWyEP(bh) {
    try {
      this.page.items = [];
      this.page.disabilityInsuranceSelected = false;
      bh = this.sd_W0HEhrwdzWaOc34E(bh);
      //appendnew_next_sd_CyLyTFgB5NLqWyEP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CyLyTFgB5NLqWyEP');
    }
  }

  sd_W0HEhrwdzWaOc34E(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_wkIPh5JUIzdSXzRS(bh);
      //appendnew_next_sd_W0HEhrwdzWaOc34E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W0HEhrwdzWaOc34E');
    }
  }

  sd_wkIPh5JUIzdSXzRS(bh) {
    try {
      this.page.backendService = this.__page_injector__.get(
        disibility_module_summary_objectService
      );
      bh = this.sd_DiYhXXTZydTRg0Pu(bh);
      //appendnew_next_sd_wkIPh5JUIzdSXzRS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wkIPh5JUIzdSXzRS');
    }
  }

  sd_DiYhXXTZydTRg0Pu(bh) {
    try {
      const page = this.page;
      page.items = [
        {
          icon: '/Web/Downloaded images/disabilityInsure.png',
          text: 'Disability Insurance',
        },
        {
          icon: '/Web/Downloaded images/accidentInsurance.png',
          text: 'Accidental Insurance',
        },
        {
          icon: '/Web/Downloaded images/lifeInsurance.png',
          text: 'Life Insurance',
        },
        {
          icon: '/Web/Downloaded images/discountPlans.png',
          text: 'Discount Plans',
        },
      ];

      if (page.backendService.summaryForm.insuranceType != null) {
        this.toggleDisabilityInsuranceImage();
      }

      //appendnew_next_sd_DiYhXXTZydTRg0Pu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DiYhXXTZydTRg0Pu');
    }
  }

  sd_VVV52rxoz4BtSh3w(bh) {
    try {
      const page = this.page; // page.disabilityInsuranceSelected = !page.disabilityInsuranceSelected;

      if (page.disabilityInsuranceSelected == true) {
        page.disabilityInsuranceSelected = false;
      } else {
        page.disabilityInsuranceSelected = true;
        this.openDialog();
        page.backendService.summaryForm.insuranceType =
          page.disabilityInsuranceSelected;
      }

      //appendnew_next_sd_VVV52rxoz4BtSh3w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VVV52rxoz4BtSh3w');
    }
  }

  sd_9wtu4ysoLW6k9CN6(bh) {
    try {
      const dialogBoxDialog = this.__page_injector__.get(MatDialog);
      const dialogBoxDialogRef = dialogBoxDialog.open(dialogBoxComponent, {
        data: bh.input.data,
        minWidth: '500px',
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9wtu4ysoLW6k9CN6');
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
  //appendnew_flow_four_iconsComponent_Catch
}
