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
import { dialogBoxComponent } from '../extras/dialogBox.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-three_icons',
  templateUrl: './three_icons.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class three_iconsComponent {
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
      this.sd_LXqgMTpeIYJecZBd(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_LXqgMTpeIYJecZBd(bh) {
    try {
      bh = this.sd_kCl4j3VAFVjnalHa(bh);
      //appendnew_next_sd_LXqgMTpeIYJecZBd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LXqgMTpeIYJecZBd');
    }
  }

  toggleFamilyImage(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_jPb3w1v0J7URJwMp(bh);
      //appendnew_next_toggleFamilyImage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qHjGSVyifYEeH3Np');
    }
  }

  openDialog(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = {};
      bh = this.sd_6TvMM6zAabMfWaji(bh);
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xGKX8MNbJSGpVWmz');
    }
  }

  //appendnew_flow_three_iconsComponent_start

  sd_kCl4j3VAFVjnalHa(bh) {
    try {
      this.page.items = [];
      this.page.familySelected = false;
      bh = this.sd_YSH5ZXtdOs8bUJcB(bh);
      //appendnew_next_sd_kCl4j3VAFVjnalHa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kCl4j3VAFVjnalHa');
    }
  }

  sd_YSH5ZXtdOs8bUJcB(bh) {
    try {
      const page = this.page;
      page.items = [
        {
          icon: 'assets/Web/Downloaded images/family.png',
          inactive: 'assets/Web/Downloaded images/family.png',
          active: 'assets/Web/Downloaded images/colorFamily.png',
          text: 'I need to protect my income or family',
        },
        {
          icon: 'assets/Web/Downloaded images/health.png',
          text: 'I need health insurance',
        },
        {
          icon: 'assets/Web/Downloaded images/business.png',
          text: 'I need to protect my business',
        },
      ];
      //appendnew_next_sd_YSH5ZXtdOs8bUJcB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YSH5ZXtdOs8bUJcB');
    }
  }

  sd_jPb3w1v0J7URJwMp(bh) {
    try {
      const page = this.page;
      page.familySelected = !page.familySelected;

      //appendnew_next_sd_jPb3w1v0J7URJwMp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jPb3w1v0J7URJwMp');
    }
  }

  sd_6TvMM6zAabMfWaji(bh) {
    try {
      const dialogBoxDialog = this.__page_injector__.get(MatDialog);
      const dialogBoxDialogRef = dialogBoxDialog.open(dialogBoxComponent, {
        data: bh.input.data,
        minWidth: '500px',
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6TvMM6zAabMfWaji');
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
  //appendnew_flow_three_iconsComponent_Catch
}
