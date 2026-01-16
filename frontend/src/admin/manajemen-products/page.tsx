import { productService } from "@/services/productServices";
import { type Courses } from "@/types/courses";
import { Sidebar } from "@/components/ui/sidebar";
import { LayoutDashboard, Users, Package } from "lucide-react";
import logo from "@/assets/logo-videobelajar.png";
import { Button } from "@/components/ui/button";
import DisplayProducts from "./displayProducts";
import { useQuery } from "@tanstack/react-query";
import CreateProducts from "./createProducts";

function ManajemenProductsPage() {
  const {
    data: courses = [],
    isLoading,
    error,
  } = useQuery<Courses[]>({
    queryKey: ["courses"],
    queryFn: () => productService.getAll(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const sidebarItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      title: "Products",
      href: "/admin/products",
      icon: <Package className="w-5 h-5" />,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-[#FFFDF3] min-h-screen">
      <header className="bg-background relative border-b border-gray-200 py-2 md:py-0">
        <Sidebar items={sidebarItems} className="" />
        <img
          src={logo}
          alt=""
          className="absolute top-2 left-8 w-38 md:hidden"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Manajemen Produk
        </h1>

        {/* Form Section */}
        <div className="mb-10">
          <CreateProducts />
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              Daftar Produk (30)
            </h2>
          </div>

          <div className="overflow-x-auto">
            {courses.map((course, index) => (
              <DisplayProducts
                key={course.id}
                index={index}
                id={course.id}
                img={course.img}
                name={course.name}
                description={course.description}
                price={course.price}
                profileName={course.profileName}
                rate={course.rate}
                category={course.category}
                profileImg={course.profileImg}
                profileDesc={course.profileDesc}
              />
            ))}
          </div>

          {/* Pagination Mock */}
          <div className="flex justify-center items-center mt-6 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs text-gray-500"
            >
              Prev
            </Button>
            <Button
              size="sm"
              className="h-8 w-8 p-0 bg-blue-600 text-white text-xs"
            >
              1
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 text-gray-600 text-xs"
            >
              2
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 text-gray-600 text-xs"
            >
              3
            </Button>
            <span className="text-gray-400">...</span>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 text-gray-600 text-xs"
            >
              5
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 text-gray-600 text-xs"
            >
              6
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs text-gray-500"
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ManajemenProductsPage;
