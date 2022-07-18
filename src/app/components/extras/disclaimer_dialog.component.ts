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
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-disclaimer_dialog',
  templateUrl: './disclaimer_dialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class disclaimer_dialogComponent {
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
      this.sd_MnD8qsBTTGoslMb9(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_MnD8qsBTTGoslMb9(bh) {
    try {
      bh = this.sd_9kTK5FKP4oI2cXk0(bh);
      //appendnew_next_sd_MnD8qsBTTGoslMb9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MnD8qsBTTGoslMb9');
    }
  }

  closeDisclaimer(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_P1l3e7yn4vAn289E(bh);
      //appendnew_next_closeDisclaimer
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZZTGPWKsoOrWnbwC');
    }
  }

  //appendnew_flow_disclaimer_dialogComponent_start

  sd_9kTK5FKP4oI2cXk0(bh) {
    try {
      this.page.disclaimer = undefined;
      //appendnew_next_sd_9kTK5FKP4oI2cXk0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9kTK5FKP4oI2cXk0');
    }
  }

  sd_P1l3e7yn4vAn289E(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.disclaimer);

      //appendnew_next_sd_P1l3e7yn4vAn289E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P1l3e7yn4vAn289E');
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
  //appendnew_flow_disclaimer_dialogComponent_Catch
}
