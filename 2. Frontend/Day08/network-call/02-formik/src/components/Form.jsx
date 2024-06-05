import {useFormik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
       .max(15, 'Must be 15 characters or less')
       .required('Required'),
    email: Yup.string()
       .email('Invalid email address')
       .required('Required'),
    password: Yup.string()
       .min(8, 'Must be 8 characters or more')
       .required('Required'),
    confirmPassword: Yup.string()
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
       .required('Required'),
    terms: Yup.bool()
       .oneOf([true], 'You must agree to the terms and conditions')
       .required('Required'),
})

function Form(){
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema
        // validate: (values) => {
        //     let errors = {};

        //     if (!values.name) {
        //         errors.name = 'Required';
        //     } else if (values.name.length > 15) {
        //         errors.name = 'Must be 15 characters or less';
        //     }

        //     if (!values.email) {
        //         errors.email = 'Required';
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';
        //     }

        //     if (!values.password) {
        //         errors.password = 'Required';
        //     } else if (values.password.length < 8) {
        //         errors.password = 'Must be 8 characters or more';
        //     }

        //     return errors;
        // }
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: "column"}}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} />
            {formik.errors.name && formik.touched.name && <small style={{color: 'red'}}>{formik.errors.name}</small>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
            {formik.errors.email && formik.touched.email && <small style={{color: 'red'}}>{formik.errors.email}</small>}

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} />
            {formik.errors.password && formik.touched.password && <small style={{color: 'red'}}>{formik.errors.password}</small>}

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;  