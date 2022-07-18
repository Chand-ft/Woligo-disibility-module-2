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
//append_imports_end

@Component({
  selector: 'bh-reccomended_options',
  templateUrl: './reccomended_options.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class reccomended_optionsComponent {
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
      this.sd_fLVfg7Onam16ypDW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_fLVfg7Onam16ypDW(bh) {
    try {
      bh = this.sd_Ah4fIkuEys8Pogxi(bh);
      //appendnew_next_sd_fLVfg7Onam16ypDW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fLVfg7Onam16ypDW');
    }
  }

  checkButton(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_03yS1Ax6MmmPoOy9(bh);
      //appendnew_next_checkButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywuFnhuC0b8RReaq');
    }
  }

  radioButton(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ABdYWlOkzy5RPXfx(bh);
      //appendnew_next_radioButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fRxM4MxS1PFH2Wfv');
    }
  }

  buttonToggle(index: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { index: index };
      bh.local = {};
      bh = this.sd_SE8zlPmnDyOd3WGs(bh);
      //appendnew_next_buttonToggle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S4CW8EPTZ3QkGpP5');
    }
  }

  //appendnew_flow_reccomended_optionsComponent_start

  sd_Ah4fIkuEys8Pogxi(bh) {
    try {
      this.page.checked = false;
      this.page.showSelected = false;
      this.page.radioBtnSelected = false;
      this.page.selectedIndex = -1;
      bh = this.options(bh);
      bh = this.safeguard(bh);
      bh = this.well_being(bh);
      //appendnew_next_sd_Ah4fIkuEys8Pogxi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ah4fIkuEys8Pogxi');
    }
  }

  options(bh) {
    try {
      const page = this.page;
      page.optionsArray = [
        {
          heading: 'Option 1',
          monthlyCost: '17',
          paragraph: {
            monthlyBenefitAmount: '$1,221',
            benefitPeriod: '5 year',
            button: 'Choose Plan',
            eliminationPeriod: '30 days',
          },
        },
        {
          heading: 'Option 2',
          monthlyCost: '28',
          paragraph: {
            monthlyBenefitAmount: '$11,221',
            benefitPeriod: '5 year',
            button: 'Choose Plan',
            eliminationPeriod: '90 days',
          },
        },
        {
          heading: 'Option 3',
          monthlyCost: '95',
          paragraph: {
            monthlyBenefitAmount: '$21,221',
            benefitPeriod: 'To Age 65',
            button: 'Choose Plan',
            eliminationPeriod: '90 days',
          },
        },
      ];
      //appendnew_next_options
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3nDRTQM1kMcEmU4Z');
    }
  }

  safeguard(bh) {
    try {
      const page = this.page;
      page.safeguardArray = [
        {
          heading: 'Safeguard Discount Plan',
          blueText: 'Includes:',
          paragraph: [
            { text: 'ID Sanctuary' },
            { text: 'Global Travel Assistance' },
            { text: 'Roadside Assistance' },
            { text: 'Legal Access Services' },
            { text: 'Financial Services' },
          ],
          perPerson: '$10.95',
          perFamily: '$16.95',
        },
      ];
      //appendnew_next_safeguard
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HjRK1FJMMaASEtF6');
    }
  }

  well_being(bh) {
    try {
      const page = this.page;
      page.discountPlansArray = [
        {
          heading: 'Well-Being Discount Plan',
          lightGreyText:
            'Add your spouse and your dependents (up to age 26) for free',
          blueText: 'Includes:',
          paragraph: [
            { text: 'Telehealth' },
            { text: 'Teladoc Mental Health and Dermatology' },
            { text: 'Health Advocate Solutions' },
            { text: 'Dental Discount Plan' },
            { text: 'Vision Discount Plan' },
            { text: 'Retail and Mail-Order Pharmacy Discount' },
          ],
          perMonth: '$14.95',
        },
      ];
      //appendnew_next_well_being
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m0p88DKObGpXB93G');
    }
  }

  sd_03yS1Ax6MmmPoOy9(bh) {
    try {
      const page = this.page; // if(page.checked=="false"){
      //     page.checked = "true"
      // }else{
      //     page.checked = "false"
      // };
      // page.checked = !page.checked;
      page.checked = !page.checked;
      // page.radioBtnSelected = false;
      //appendnew_next_sd_03yS1Ax6MmmPoOy9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_03yS1Ax6MmmPoOy9');
    }
  }

  sd_ABdYWlOkzy5RPXfx(bh) {
    try {
      const page = this.page; // page.radioBtnSelected = "true"
      // page.radioBtnSelected = !page.radioBtnSelected;
      page.radioBtnSelected = true;
      // page.checked = false;
      //appendnew_next_sd_ABdYWlOkzy5RPXfx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ABdYWlOkzy5RPXfx');
    }
  }

  sd_SE8zlPmnDyOd3WGs(bh) {
    try {
      const page = this.page; // Useless -PTP
      // page.card.forEach(element =>{
      //     if (element.heading ==bh.input.value){
      //         element.button = "Selected"
      //     }else{
      //         element.button = "Choose"
      //     }
      // })

      console.log('index', bh.input.index);
      page.selectedIndex = bh.input.index;
      // Useless -PTP
      // page.showSelected = !page.showSelected;
      // console.log(page.showSelected);

      //appendnew_next_sd_SE8zlPmnDyOd3WGs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SE8zlPmnDyOd3WGs');
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
  //appendnew_flow_reccomended_optionsComponent_Catch
}
