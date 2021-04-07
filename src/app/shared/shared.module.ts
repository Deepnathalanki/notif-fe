import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, NzMenuModule, NzIconModule],
  exports: [SideNavComponent],
})
export class SharedModule {}
