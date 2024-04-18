import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Minimun 3 charecters")
    .max(10, "Maximum 10 charecters"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const initialValue = { name: "", email: "" };

// eslint-disable-next-line react/prop-types
const FormikComponent = ({ onValidationChange }) => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  console.log("re render");
  return (
    <>
      <h3>Formik in your app!</h3>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,

          /* and other goodies */
        }) => {
          onValidationChange?.(isValid);

          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
              </div>
              <div>
                <input
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikComponent;
