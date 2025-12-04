import { CLS_PREFIX } from '../constants';

export function createCls(cls: string) {
  return `${CLS_PREFIX}-${cls}`;
}
