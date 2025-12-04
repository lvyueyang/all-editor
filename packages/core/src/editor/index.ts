import { AllEditorOptions } from '../types/index.js';
import { createCls } from '../utils';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { Theme } from './theme.js';

export class AllEditor {
  container: HTMLElement;
  tEditor!: Editor;

  theme: Theme;

  constructor(public readonly opt: AllEditorOptions) {
    this.container = opt.container;
    this.container.classList.add(createCls('container'));
    this.initTipTapEditor();

    this.theme = new Theme(this);
    this.theme.init();
  }

  initTipTapEditor() {
    const tEditor = new Editor({
      element: this.container,
      extensions: [StarterKit],
      content: this.opt.defaultValue || '',
    });
    this.tEditor = tEditor;
  }
}
