import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { Product } from "@/types/product";
import StackCard from "@/components/StackCard";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  // if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box
      sx={{ width: "100%" }}
      maxWidth={"lg"}
      mx="auto"
      px={{ xs: 5, md: 15 }}
      py={5}
    >
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StackCard
              id={product.id}
              loading={loading}
              thumbnail={product.thumbnail}
              title={product.title}
              rating={product.rating}
              price={product.price}
              discountPercentage={product.discountPercentage}
              category={product.category}
              brand={product.category}
              weight={product.weight}
              volume={product.volume}
              description={product.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
