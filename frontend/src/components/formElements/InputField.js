import React from 'react'
import { useFormik } from 'formik'
// Add to styles.scss, don't import into components.
//import '../styles/_input-field.scss'

const InputField = ({ text, classes, variant }) => {
  const formik = useFormik({
    initialValues: {
      width: '',
      length: '',
    },
    // Need to add validation-check input are numbers only
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="width">Width</label>
          <input
            id="width"
            name="width"
            type="width"
            placeholder="0'0"
            onChange={formik.handleChange}
            value={formik.values.width}
          />
        </div>
        <div>
          <label htmlFor="length">Length</label>
          <input
            id="length"
            name="length"
            type="length"
            placeholder="0'0"
            onChange={formik.handleChange}
            value={formik.values.length}
          />
        </div>
        {/* <button type="submit"></button> */}
      </form>
    </>
  )
}

export default InputField
