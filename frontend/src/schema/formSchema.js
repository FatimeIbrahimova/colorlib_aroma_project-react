import * as yup from "yup";


export const addFormSchema=yup.object().shape({
    name:yup.string().required("name is required"),
    category:yup
    .string("category must be string")
    .required("category is required"),
    price:yup
    .number("price must be number")
    .required("price is required"),
    url:yup
    .string("url must be string")
    .required("url is required")
})