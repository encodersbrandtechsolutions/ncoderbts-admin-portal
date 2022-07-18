import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MultiselectComponent } from './multiselect/multiselect.component';



@NgModule({
  declarations: [
    InputComponent,
    TextareaComponent,
    DropdownComponent,
    MultiselectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormElementsModule { }
