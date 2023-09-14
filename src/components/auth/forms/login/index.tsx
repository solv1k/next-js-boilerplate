"use client"

import { useFormik } from "formik"
import * as yup from "yup"

export default function LoginForm(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      login: yup.string().trim().required('Login is required'),
      password: yup.string().trim().required('Password is required'),
    })
  })

  return (
    <>
      <div className="login-form-container fixed flex right-2 bottom-2 text-sm">
        <form className="login-form p-4 flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div>
            <input 
              type="text"
              name="login"
              placeholder="Login"
              className="bg-transparent p-1 border-b border-white rounded-none"
              value={formik.values.login}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.login && (
              <div className="text-red-500 text-xs">{formik.errors.login}</div>
            )}
          </div>
          <div>
            <input 
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent p-1 border-b border-white rounded-none"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && (
              <div className="text-red-500 text-xs">{formik.errors.password}</div>
            )}
          </div>
          <div className="flex gap-4">
            <button
              className="p-2 bg-cyan-800"
              type="button"
              onClick={formik.handleReset}
            >Clear</button>
            
            <button
              className="p-2 bg-cyan-600"
              type="submit"
            >Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
