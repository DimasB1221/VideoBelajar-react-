import FormProduct from "./formProduct";
import { type Courses } from "@/types/courses";
import useCreateProduct from "@/hooks/products/createProducts";
import { useState } from "react";

interface CreateProductsProps {
  onClose?: () => void;
}

const CreateProducts = ({ onClose }: CreateProductsProps) => {
  const createProduct = useCreateProduct();
  const [formKey, setFormKey] = useState(0);

  const handleCreate = (data: Courses) => {
    createProduct.mutate(
      { data },
      {
        onSuccess: () => {
          if (onClose) {
            onClose();
          } else {
            // Reset form by changing key if it's an inline form
            setFormKey((prev) => prev + 1);
          }
        },
      }
    );
  };

  return (
    <FormProduct
      key={formKey}
      onClose={onClose}
      onSubmit={handleCreate}
      isLoading={createProduct.isPending}
    />
  );
};

export default CreateProducts;
