import { Button } from "@/components/ui/button";
import UpdateProducts from "./updateProducts";
import { useState } from "react";
import { type Courses } from "@/types/courses";
import useDeleteProduct from "@/hooks/products/deleteProduct";

// ... (keep interface DisplayProductsProps)

interface DisplayProductsProps extends Courses {
  index: number;
}

function DisplayProducts({
  id,
  img,
  name,
  description,
  price,
  profileName,
  rate,
  category,
  profileImg,
  profileDesc,
  index,
}: DisplayProductsProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const deleteProduct = useDeleteProduct();

  const handleDelete = () => {
    if (window.confirm("Apakah anda yakin ingin menghapus produk ini?")) {
      deleteProduct.mutate(id);
    }
  };

  return (
    <>
      <table className="w-full text-left border-collapse">
        {/* ... (keep table content) */}
        <thead>
          <tr className="border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
            <th className="py-4 px-4">No</th>
            <th className="py-4 px-4 w-20">Foto</th>
            <th className="py-4 px-4 w-1/3">Produk</th>
            <th className="py-4 px-4">Harga</th>
            <th className="py-4 px-4">Mentor</th>
            <th className="py-4 px-4 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          <tr key={id} className="hover:bg-gray-50/50">
            <td className="py-4 px-4 text-gray-500">{index + 1}</td>
            <td className="py-4 px-4">
              <img
                src={img}
                alt={name}
                className="w-16 h-10 object-cover rounded-md border border-gray-200"
              />
            </td>
            <td className="py-4 px-4">
              <div className="font-semibold text-gray-900 text-sm">{name}</div>
              <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                {description}
              </div>
            </td>
            <td className="py-4 px-4">
              <span className="text-green-600 font-bold text-sm">{price}</span>
            </td>
            <td className="py-4 px-4">
              <div className="text-sm font-medium text-gray-900">
                {profileName}
              </div>
              <div className="text-xs text-gray-500">{rate}</div>
            </td>
            <td className="py-4 px-4">
              <div className="flex justify-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditOpen(true)}
                  className="text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 h-8 px-3 text-xs"
                >
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDelete}
                  disabled={deleteProduct.isPending}
                  className="text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 h-8 px-3 text-xs"
                >
                  {deleteProduct.isPending ? "Hapus..." : "Hapus"}
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="w-full max-w-3xl my-8">
            <UpdateProducts
              initialData={{
                id,
                img,
                name,
                category,
                description,
                price,
                profileName,
                rate,
                profileImg,
                profileDesc,
              }}
              onClose={() => setIsEditOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default DisplayProducts;
