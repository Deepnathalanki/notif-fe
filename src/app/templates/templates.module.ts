import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesPageComponent } from './templates-page/templates-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';
import { TemplateDetailsComponent } from './template-details/template-details.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TemplatesPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [TemplatesPageComponent, TemplateDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzSelectModule,
    NzDropDownModule,
    NzToolTipModule,
    FormsModule,
  ],
})
export class TemplatesModule {}
