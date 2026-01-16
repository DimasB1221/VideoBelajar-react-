import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/productServices";
import { type Courses } from "@/types/courses";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Courses }) => {
      return productService.update(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      console.log(queryClient.getQueriesData);
    },
    onError: () => {
      console.log("error");
    },
  });
};
