export default (obj, dom, depth = 1) => {
  if (dom) {
    return new FormData(dom);
  }

  if (depth === 1) {
    const formdata = new FormData();
    Object.entries(obj).forEach(([prop, value]) => {
      formdata.append(prop, value);
    });
    return formdata;
  }

  return '';
};
