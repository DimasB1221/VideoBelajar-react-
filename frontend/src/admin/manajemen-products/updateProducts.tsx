import FormProduct from "./formProduct";
import { type Courses } from "@/types/courses";
import { useUpdateProduct } from "@/hooks/products/updateProducts";

interface UpdateProductsProps {
  initialData: Courses;
  onClose: () => void;
}

const UpdateProducts = ({ initialData, onClose }: UpdateProductsProps) => {
  const updateProduct = useUpdateProduct();

  const handleUpdate = (data: Courses) => {
    updateProduct.mutate(
      { id: initialData.id, data },
      {
        onSuccess: () => {
          onClose(); // Close the modal on success
        },
      }
    );
  };

  return (
    <FormProduct
      initialData={initialData}
      onClose={onClose}
      onSubmit={handleUpdate}
      isLoading={updateProduct.isPending}
    />
  );
};

export default UpdateProducts;
