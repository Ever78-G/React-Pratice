import { Formik, Form, Field, ErrorMessage} from "formik";

function AppForms() {
    return (
        <Formik
            initialValues={{ name: "", email: "", message: "Hola, te contacto con ..." }}
            validate={values => {
                let errors = {};

                if (!values.name) {
                    errors.name = "Este campo es requerido";
                }

                if (!values.email) {
                    errors.email = "Este campo es requerido";
                } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email)) {
                    errors.email = "El correo no es válido";
                }

                return errors;
            }}
            onSubmit={(values,{setSubmitting}) => {
                let url ="https://formspree.io/f/xvgkpwoo"
                let formData = new FormData()
                formData.append("name", values.name)
                formData.append("email", values.email)
                formData.append("message", values.message)
                fetch(url,{
                    method:"post",
                    body:formData,
                    headers:{
                        'accept':'aplication/json'
                    }
                }).then(Response =>{
                    setSubmitting(false)
                    alert('Gracias por su comunicacion ')
                })
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <Field type="text" name="name" />
                        <ErrorMessage   name="name" component="p" />
                        
                    </div>

                    <div>
                        <label htmlFor="email">Correo Electrónico:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage   name="email" component="p" />

                    </div>

                    <div>
                        <label htmlFor="message">Mensaje:</label>
                        <Field component="textarea"  name="message" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Enviar mensaje
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default AppForms;

