import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Rating,
  Stack,
  Divider,
} from "@mui/material";
import { Product } from "@/types/product";
import ProductDetailsCard from "@/components/ProductDetailsCard";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `https://dummyjson.com/products/${id}`
          );
          const productWithVolume = {
            ...response.data,
            volume:
              response.data.dimensions.width *
              response.data.dimensions.height *
              response.data.dimensions.depth,
          };
          setProduct(productWithVolume);
        } catch (error) {
          setError("Error loading product");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  // if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  if (!product) return null;

  return (
    <ProductDetailsCard
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
  );
};

export default ProductDetail;
