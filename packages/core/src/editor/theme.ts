import { AllEditor } from '.';
import { createCls } from '../utils';

export class Theme {
  constructor(public readonly editor: AllEditor) {}
  init() {
    this.editor.container.classList.add(createCls('theme-default'));
  }
}
