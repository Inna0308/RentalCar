import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

import { FormSchema } from "../../utils/bookCarSchema";

import styles from "./FormRental.module.css";

const INITIAL_VALUES = { name: "", email: "", date: "", comment: "" };

const FormRental = () => {
  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    toast.success("Successfully booked a car!");
  };

  return (
    <div>
      <h2 className={styles.bookTitle}>Book your car now</h2>
      <p className={styles.bookText}>Stay connected! We are always ready to help you.</p>

      <Formik initialValues={INITIAL_VALUES} validationSchema={FormSchema} onSubmit={handleSubmit}>
        <Form className={styles.bookForm}>
          <div className={styles.bookInputs}>
            <div className={styles.inputWrapper}>
              <Field placeholder="Name*" className={styles.bookInput} type="text" name="name" />
              <ErrorMessage className={styles.error} name="name" component="span" />
            </div>
            <div className={styles.inputWrapper}>
              <Field placeholder="Email*" className={styles.bookInput} type="email" name="email" />
              <ErrorMessage className={styles.error} name="email" component="span" />
            </div>

            <Field placeholder="Booking date" className={styles.bookInput} type="date" name="date" />

            <Field placeholder="Comment" className={styles.bookInput} as="textarea" name="comment" />
          </div>
          <button className={styles.bookBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormRental;
