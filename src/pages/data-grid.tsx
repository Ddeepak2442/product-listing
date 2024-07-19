import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Product } from "@/types/product";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const productsWithVolume = response.data.products.map(
          (product: Product) => ({
            ...product,
            volume:
              product.dimensions.width *
              product.dimensions.height *
              product.dimensions.depth,
          })
        );
        setProducts(productsWithVolume);
      } catch (error) {
        setError("Error loading products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleRowClick = (params: GridRowParams) => {
    router.push(`/products/${params.id}`);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "rating", headerName: "Rating", width: 100 },
    { field: "stock", headerName: "Stock", width: 100 },
    { field: "volume", headerName: "Product Volume", width: 150 },
  ];

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        onRowClick={handleRowClick}
        loading={loading}
      />
    </Box>
  );
};

export default ProductList;
