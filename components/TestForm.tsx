import { Formik, Form, Field } from "formik";

interface Values {
  [key: string]: any;
}

export default function TestForm() {
  return (
    <Formik<Values>
      initialValues={{}}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(props) => (
        <Form>
          <Field id="test" name="test" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
