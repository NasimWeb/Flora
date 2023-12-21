import * as Yup from "yup";


const ContactUsSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short")
      .max(20, "Too Long")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.number('please type just number').required("Required"),
    message: Yup.string().required("Required"),
  });


  export default ContactUsSchema