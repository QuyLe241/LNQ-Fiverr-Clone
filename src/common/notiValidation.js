export const notiValidation = {
  empty: "Not empty",
  email: "Vui lòng nhập đúng định dạng email",
  min: (minValue) => {
    return `Vui lòng nhập ${minValue} ký tự`;
  },
  max: (maxValue) => {
    return `Vui lòng nhập ${maxValue} ký tự`;
  },
};
