const Validate = {

    emailCheck: (value) =>
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value),

};
  
export default Validate;