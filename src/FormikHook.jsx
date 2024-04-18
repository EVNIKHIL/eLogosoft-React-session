import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Minimun 3 charecters")
    .max(10, "Maximum 10 charecters"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

// eslint-disable-next-line react/prop-types
const FormikHook = ({ onValidationChange }) => {
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    onValidationChange(formik.isValid);
  }, [formik.isValid, onValidationChange]);

  return (
    <>
      <h3>Formik hook in your app!</h3>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Name</label>
          <input
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name}
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormikHook;
