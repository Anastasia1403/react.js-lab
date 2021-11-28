const createOptionsArrayForSelect = (optionsArr, keyField1, keyField2) => optionsArr
  .map((item) => {
    const val = keyField2 === undefined ? item[keyField1] : `${item[keyField1]} ${item[keyField2]}`;
    return ({
      value: item.id,
      label: val,
    });
  });

export default createOptionsArrayForSelect;
