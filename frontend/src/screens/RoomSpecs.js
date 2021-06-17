import * as React from 'react'
import { Link } from 'react-router-dom'
import IntroText from '../components/IntroText'
import InputField from '../components/formElements/InputField'
// We can start here with some basic Formik stuff
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik'
import Loader from 'react-ts-loaders'

const RoomSpecs = () => {
  // I imagine you're following a tutorial? useFormik should be
  // used in some specific edges cases, not normally.
  // I remove the useFormik stuff you had (see github diff to review it)

  // Go to https://formik.org/docs/overview and down to the
  // 'Reducing Boilerplate' section. This is a basic setup for Formik
  // I added the basic setup below. This is far from what we want, but
  // start here and learn this. Validation works. OnSubmit works. I
  // have <code> section showing the values live. An error message
  // appears if there is no value in the first/height field.

  // Do you need to use <Form> and <Field> from Formik? Nope.
  // In fact, here are a few things I think would help you.
  // 1. Learn what's happening below.
  // 2. Remove one of the <Field> uses and replace with a <input> field
  //    and make sure that is working. See above link for examples
  // 3. Move that single input field to its own component. Pass down the
  //    the props required to it so that it works.

  return (
    <>
      <div className="container room-specs">
        <IntroText
          heading="What is your living room dimesion?"
          paragraph="Enter your living room dimensions in feeet and inches"
        />
        {/* create a Formik component that wraps our form  */}
        <Formik
          // create an object with empty fields
          initialValues={{ height: '', width: '' }}
          // fake validation
          validate={values => {
            const errors = {}
            if (!values.height) errors.height = 'Height is required'
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2))
          }}
        >
          {({ values }) => (
            <>
              <Form>
                <Field type="input" name="height" />
                <ErrorMessage name="height" component="div" />
                <Field type="input" name="width" />
                <button type="submit">Submit</button>
              </Form>
              <code>
                <pre>Height: {values.height}</pre>
                <pre>Width: {values.width}</pre>
              </code>
            </>
          )}
        </Formik>
        {/* <InputField /> */}

        <Link to="/add-room">Back</Link>
        <Link to="/room-details">Next</Link>
      </div>
    </>
  )
}

export default RoomSpecs
