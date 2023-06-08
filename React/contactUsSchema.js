import * as Yup from "yup";

const contactUsSchema = Yup.object().shape({
  senderName: Yup.string().min(2).max(50).required("Required"),
  senderEmail: Yup.string().email("Invalid email").required("Required"),
  senderMessage: Yup.string().required("Input complete message"),
});

export default contactUsSchema;
