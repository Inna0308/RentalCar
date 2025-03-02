import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { format } from "date-fns";

import DatePicker from "react-datepicker";

import { FormSchema } from "../../utils/bookCarSchema";

import styles from "./FormRental.module.css";
import "react-datepicker/dist/react-datepicker.css";

const INITIAL_VALUES = { name: "", email: "", date: "", comment: "" };

const FormRental = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    toast.success("Successfully booked a car!");
    resetForm();
  };

  return (
    <div>
      <h2 className={styles.bookTitle}>Book your car now</h2>
      <p className={styles.bookText}>Stay connected! We are always ready to help you.</p>

      <Formik initialValues={INITIAL_VALUES} validationSchema={FormSchema} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
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

              <div className={styles.inputWrapper}>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setFieldValue("date", format(date, "yyyy-MM-dd"));
                  }}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Booking date"
                  className={styles.bookInput}
                  calendarClassName="react-datepicker"
                />
              </div>

              <Field placeholder="Comment" className={styles.bookTextarea} as="textarea" name="comment" />
            </div>
            <button className={styles.bookBtn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormRental;
