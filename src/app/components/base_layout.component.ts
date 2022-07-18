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
  selector: 'bh-base_layout',
  templateUrl: './base_layout.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class base_layoutComponent {
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
      this.sd_iCQjSUXKDPzGNIA0(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_iCQjSUXKDPzGNIA0(bh) {
    try {
      bh.local = { displayedObject: [] };
      bh = this.sd_lDUH7s1A5X2UPApW(bh);
      //appendnew_next_sd_iCQjSUXKDPzGNIA0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iCQjSUXKDPzGNIA0');
    }
  }

  displayFourIcons(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NlZZlM5vmJynwFFH(bh);
      //appendnew_next_displayFourIcons
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d8gvsp607M3UzaAZ');
    }
  }

  displayDatePicker(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_yGdIlAzhHQX0jWtP(bh);
      //appendnew_next_displayDatePicker
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VDRDnxQLYZqmJX6F');
    }
  }

  displayEligibility(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FZEr5540MKlfVqiJ(bh);
      //appendnew_next_displayEligibility
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t4BG9lUyNYXd7LX9');
    }
  }

  //appendnew_flow_base_layoutComponent_start

  sd_lDUH7s1A5X2UPApW(bh) {
    try {
      //appendnew_next_sd_lDUH7s1A5X2UPApW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lDUH7s1A5X2UPApW');
    }
  }

  sd_NlZZlM5vmJynwFFH(bh) {
    try {
      const page = this.page;
      page.displayedObject = [
        { icon: 'accessible', paragraph: 'Disability Insurance' },
        { icon: 'airport shuttle', paragraph: 'Accidental Insurance' },
        { icon: 'group add', paragraph: 'Life Insurance' },
        { icon: 'grain', paragraph: 'Discount Plans' },
      ];
      //appendnew_next_sd_NlZZlM5vmJynwFFH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NlZZlM5vmJynwFFH');
    }
  }

  sd_yGdIlAzhHQX0jWtP(bh) {
    try {
      //appendnew_next_sd_yGdIlAzhHQX0jWtP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yGdIlAzhHQX0jWtP');
    }
  }

  sd_FZEr5540MKlfVqiJ(bh) {
    try {
      //appendnew_next_sd_FZEr5540MKlfVqiJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FZEr5540MKlfVqiJ');
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
  //appendnew_flow_base_layoutComponent_Catch
}
