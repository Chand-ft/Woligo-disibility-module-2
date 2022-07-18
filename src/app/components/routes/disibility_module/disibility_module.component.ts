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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { disclaimer_dialogComponent } from '../../extras/disclaimer_dialog.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-disibility_module',
  templateUrl: './disibility_module.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class disibility_moduleComponent {
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
      this.sd_1YrYhYSOxlK5dkfu(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1YrYhYSOxlK5dkfu(bh) {
    try {
      bh = this.sd_gPYxIqFzjkQTzkKv(bh);
      //appendnew_next_sd_1YrYhYSOxlK5dkfu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1YrYhYSOxlK5dkfu');
    }
  }

  openDisclaimer(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = {};
      bh = this.sd_3gFNsnaJbLcczcGN(bh);
      //appendnew_next_openDisclaimer
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s8K9aKRMORSdaVjA');
    }
  }

  //appendnew_flow_disibility_moduleComponent_start

  sd_gPYxIqFzjkQTzkKv(bh) {
    try {
      //appendnew_next_sd_gPYxIqFzjkQTzkKv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gPYxIqFzjkQTzkKv');
    }
  }

  sd_3gFNsnaJbLcczcGN(bh) {
    try {
      const disclaimer_dialogDialog = this.__page_injector__.get(MatDialog);
      const disclaimer_dialogDialogRef = disclaimer_dialogDialog.open(
        disclaimer_dialogComponent,
        { data: bh.input.data, minWidth: '500px' }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3gFNsnaJbLcczcGN');
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
  //appendnew_flow_disibility_moduleComponent_Catch
}
