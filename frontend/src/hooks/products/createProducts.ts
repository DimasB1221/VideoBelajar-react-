// hooks/useCreateProduct.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/productServices";
import type { Courses } from "@/types/courses";

const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: Courses }) => {
      return productService.create(data);
    },

    onSuccess: () => {
      // refresh data products setelah create
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });
};

export default useCreateProduct;
