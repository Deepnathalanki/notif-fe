import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeEditorComponent implements OnInit {
  @Input() codeEditorVisible: boolean;
  @Output() closeCodeEditor: EventEmitter<null> = new EventEmitter();

  tabValue = TabValues.DESIGN;
  readonly TAB_VALUES = TabValues;
  settingsVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onCloseCodeEditor() {
    this.closeCodeEditor.emit();
  }

  openSettings() {
    console.log('opening settings');
    this.settingsVisible = true;
  }

  closeSettings() {
    this.settingsVisible = false;
  }
}

enum TabValues {
  DESIGN = 'DESIGN',
  TEST = 'TEST',
  SETTINGS = 'SETTINGS',
}
