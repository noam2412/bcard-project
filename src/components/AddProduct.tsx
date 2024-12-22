import { FunctionComponent } from "react";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";
import { addProduct } from "../services/apiService";

interface AddProductProps {
  onHide: () => void;
  refresh: () => void;
}

const AddProduct: FunctionComponent<AddProductProps> = ({ onHide, refresh }) => {
  const formik: FormikValues = useFormik({
    initialValues: {
      name: "",
      price: 0,
      category: "",
      description: "",
      image: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required").min(2, "Minimum 2 characters"),
      price: yup.number().required("Price is required").moreThan(0, "Price must be greater than 0"),
      category: yup.string().required("Category is required").min(2, "Minimum 2 characters"),
      description: yup.string().required("Description is required").min(2, "Minimum 2 characters"),
      image: yup.string().required("Image URL is required").url("Invalid URL"),
    }),
    onSubmit: (values) => {
      addProduct({ ...values, available: true })
        .then(() => {
          onHide();
          refresh();
          alert("Product was added successfully!");
        })
        .catch((err) => console.error(err));
    },
  });

  return (
    <div className="container w-75">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-floating mt-3 mb-3 w-100">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Product Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="name">Name</label>
          {formik.touched.name && formik.errors.name && <p className="text-danger">{formik.errors.name}</p>}
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="price">Price</label>
          {formik.touched.price && formik.errors.price && <p className="text-danger">{formik.errors.price}</p>}
        </div>

        <div className="form-floating mt-3 w-100">
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="Category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="category">Category</label>
          {formik.touched.category && formik.errors.category && <p className="text-danger">{formik.errors.category}</p>}
        </div>

        <div className="form-floating mt-3 w-100">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="description">Description</label>
          {formik.touched.description && formik.errors.description && (
            <p className="text-danger">{formik.errors.description}</p>
          )}
        </div>

        <div className="form-floating mt-3 w-100">
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Image URL"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="image">Image URL</label>
          {formik.touched.image && formik.errors.image && <p className="text-danger">{formik.errors.image}</p>}
        </div>

        <button className="btn btn-success mt-3 w-100" type="submit" disabled={!formik.dirty || !formik.isValid}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
