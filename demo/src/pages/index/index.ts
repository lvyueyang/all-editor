import '@/styles/global.scss';
import 'all-editor/style';

import { AllEditor } from 'all-editor';

const editor = new AllEditor({
  container: document.querySelector('#container')!,
});

console.log('editor:', editor);
