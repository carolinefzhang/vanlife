import React from 'react'
import { Formik, Form, Field } from 'formik'
import Button from '../components/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../api'

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = React.useState<string | null>(null)
    return (
        <div className='p-4 max-w-md mx-auto'>
            <h3 className='text-center text-red-500'>{location.state?.message}</h3>
            <h1>Sign in to your account</h1>
            {
                error && <h3 className='text-center text-red-500'>{error}</h3>
            }
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={async (values) => {
                    try {
                        await loginUser(values.email, values.password)
                        localStorage.setItem("loggedIn", "true")
                        navigate(location.state?.from || '/', { replace: true })
                    } catch (err) {
                        console.error(err)
                        setError((err as {message: string}).message)
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col justify-center align-center gap-6 mt-6">
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                            <label htmlFor="email">Email address</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                className="md:col-span-2"
                            />
                        </div>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                className="md:col-span-2"
                            />
                        </div>
                        <Button className="yellow-button mt-6" type="submit" disabled={ isSubmitting }>{ isSubmitting ? "Logging in..." : "Log in"}</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login
