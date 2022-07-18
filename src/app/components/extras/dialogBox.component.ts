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
  selector: 'bh-dialogBox',
  templateUrl: './dialogBox.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dialogBoxComponent {
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
      this.sd_x9aB9WFDtvyMxkrQ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_x9aB9WFDtvyMxkrQ(bh) {
    try {
      bh = this.sd_vTmgjhngSxhNY4qT(bh);
      //appendnew_next_sd_x9aB9WFDtvyMxkrQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x9aB9WFDtvyMxkrQ');
    }
  }

  closeDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_djYK9VTf4IvKQikZ(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nLERPlzlMPXPYgMJ');
    }
  }

  //appendnew_flow_dialogBoxComponent_start

  sd_vTmgjhngSxhNY4qT(bh) {
    try {
      this.page.dialog = undefined;
      //appendnew_next_sd_vTmgjhngSxhNY4qT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vTmgjhngSxhNY4qT');
    }
  }

  sd_djYK9VTf4IvKQikZ(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.dialog);

      //appendnew_next_sd_djYK9VTf4IvKQikZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_djYK9VTf4IvKQikZ');
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
  //appendnew_flow_dialogBoxComponent_Catch
}
