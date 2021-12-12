import { IOptions } from '../models/interfaces';

const createOptionsArrayForSelect = (
  optionsArr: object[],
  keyField1: string,
  keyField2?: string,
): IOptions[] => optionsArr
  .map((item: any) => {
    const val = keyField2 === undefined ? item[keyField1] : `${item[keyField1]} ${item[keyField2]}`;
    return ({
      value: item.id,
      label: val,
    });
  });

export default createOptionsArrayForSelect;
