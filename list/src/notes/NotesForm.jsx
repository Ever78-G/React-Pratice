import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NotesContext } from "../contexts/NoteContext";
import useNotes from "../hooks/UseNotes";
//import {NotesContext} from "./NotesContext";

export default function NotesForm() {
    const {add} = useNotes(NotesContext)
    return (
        <Formik
            initialValues={{
                title: "",
                message: ""
            }}
            validate={(values) => {
                const errors = {};
                if (!values.title) {
                    errors.title = "El título es requerido";
                }
                if (!values.message) {
                    errors.message = "El mensaje es requerido";
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                add(values.title,values.message)
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="form">
                    <div>
                        <label htmlFor="title">Título: </label>
                        <Field type="text" name="title" />
                        <ErrorMessage name="title" component="p" />
                    </div>

                    <div>
                        <label htmlFor="message">¿Qué quieres guardar?: </label>
                        <Field as="textarea" name="message" />
                        <ErrorMessage name="message" component="p" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Guardando..." : "Guardar nota"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}