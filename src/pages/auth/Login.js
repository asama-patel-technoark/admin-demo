import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import FileUploadPage from '../FileUploadPage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Grid,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
  // TextField
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { TextField } from 'formik-material-ui'
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone'
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import api from '../../api'
// import ReCAPTCHA from 'react-google-recaptcha'
import Snackbar from '../../components/Snackbar'
import { useCookies } from 'react-cookie'

export default function Login(props) {
  const navigate = useNavigate()
  const [checked1, setChecked1] = useState(true)
  const [disableButton, setDisableButton] = useState(false)
  const [toast, setToast] = useState({ state: false, message: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [cookies, setCookie] = useCookies(['mfaToken'])
  const handleChange1 = (event) => {
    setChecked1(event.target.checked)
  }

  const handleSubmit = async (values) => {
    // ev.preventDefault();
    try {
      // setIsLoading(true);
      api.interceptors.request.use(
        function (config) {
          // Do something before request is sent

          if (cookies.mfaToken) {
            config.headers['MFAToken'] = cookies.mfaToken
          }
          return config
        },
        function (error) {
          // Do something with request error
          return Promise.reject(error)
        },
      )
      let { data } = await api.post('/auth', values)
      if (data.code == 306) {
        setToast({
          state: true,
          message: data.message,
          color: 'danger',
        })
      } else if (data.code == 200) {
        localStorage.setItem('authToken', `Bearer ${data.authToken}`)
        localStorage.setItem('authuser', JSON.stringify(data.data))

        // props.history.push('/dashboard')
        navigate('/dashboard')
      }
    } catch (error) {
      if (
        error.response !== undefined &&
        error.response.data !== null &&
        error.response.data.errors.length !== 0
      ) {
        setToast({
          state: true,
          message: error.response.data.errors[0],
          color: 'danger',
        })
      } else {
        setToast({
          state: true,
          message: error.response.data.errors,
          color: 'danger',
        })
      }
    }
    // resetForm();
  }

  return (
    <>
      <Snackbar toast={toast} setToast={setToast} />
      <div className='app-wrapper bg-grey min-vh-100'>
        <div className='app-main min-vh-100'>
          <div className='app-content p-0'>
            <div className='app-content--inner d-flex align-items-center'>
              <div className='flex-grow-1 w-100 d-flex align-items-center'>
                <div className='bg-composed-wrapper--content py-0'>
                  <Grid item md={10} lg={8} xl={4} className='mx-auto'>
                    <Formik
                      validationSchema={yup.object({
                        authpassword: yup.string().required('Required'),
                        authuser: yup.string(),
                        // .email('Invalid email address')
                        // .required('Required'),
                      })}
                      initialValues={{
                        authuser: '',
                        authpassword: '',
                      }}
                      onSubmit={handleSubmit}
                    >
                      <Form>
                        <div className='text-center'>
                          <h1 className='display-4 mb-4 font-weight-bold'>
                            Login
                          </h1>
                        </div>

                        <div>
                          <div className='mb-4'>
                            <Field
                              component={TextField}
                              name='authuser'
                              fullWidth
                              variant='outlined'
                              label='Email address'
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position='start'>
                                    <MailOutlineTwoToneIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                          <br />
                          <div className='mb-3'>
                            <Field
                              component={TextField}
                              name='authpassword'
                              fullWidth
                              variant='outlined'
                              // id="textfield-password"
                              label='Password'
                              type={showPassword ? 'text' : 'password'}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position='start'>
                                    <LockTwoToneIcon />
                                  </InputAdornment>
                                ),
                                endAdornment: (
                                  <InputAdornment position='end'>
                                    <IconButton
                                      onClick={() => {
                                        setShowPassword(!showPassword)
                                      }}
                                    >
                                      {showPassword ? (
                                        <Visibility />
                                      ) : (
                                        <VisibilityOff />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                          <div className='d-flex justify-content-between align-items-center font-size-md'>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked1}
                                  onChange={handleChange1}
                                  value='checked1'
                                  color='primary'
                                />
                              }
                              label='Remember me'
                            />
                          </div>
                          <div className='text-center py-4'>
                            <Button
                              type='submit'
                              disabled={disableButton}
                              className='btn-second font-weight-bold w-50 my-2'
                            >
                              Sign in
                            </Button>
                          </div>
                        </div>
                      </Form>
                    </Formik>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
        <FileUploadPage />
      </div>
    </>
  )
}
