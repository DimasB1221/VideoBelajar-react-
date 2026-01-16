import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/productServices";

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      return productService.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });
};

export default useDeleteProduct;
