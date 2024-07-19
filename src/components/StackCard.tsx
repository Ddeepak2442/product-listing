import {
  Box,
  Button,
  Chip,
  Divider,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const StackCard = ({
  id,
  thumbnail,
  title,
  rating,
  price,
  discountPercentage,
  category,
  brand,
  weight,
  volume,
  description,
  loading,
}: {
  id: number;
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
  discountPercentage: number;
  category: string;
  brand: string;
  weight: number;
  volume: number;
  description: string;
  loading: boolean;
}) => {
  const router = useRouter();
  const offerPrice = price - (price * discountPercentage) / 100;

  const handleCardClick = () => {
    router.push(`/products/${id}`);
  };

  return (
    <Box
      sx={{
        border: "1px solid #C7D7FE",
        borderRadius: "12px",
        p: 2,
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        },
      }}
      gap={1}
      onClick={handleCardClick}
    >
      <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
        {loading ? (
          <Skeleton variant="rectangular" width={200} height={200} />
        ) : (
          <img
            src={thumbnail}
            alt="product-image"
            style={{ height: "200px" }}
          />
        )}
      </Box>
      <Typography
        fontWeight={600}
        fontSize={20}
        sx={{
          "&:hover": {
            color: "orange",
          },
        }}
      >
        {title}
      </Typography>
      <Stack direction={"row"} gap={1}>
        <Chip label={rating} size="small" />
        <Rating name="read-only" value={rating} size="small" readOnly />
      </Stack>
      <Divider />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        gap={1}
      >
        <Typography fontWeight={500} fontSize={20} alignContent={"flex-end"}>
          {Math.round(offerPrice)}$
        </Typography>
        <Typography fontWeight={400} fontSize={14} color={"grey"}>
          M.R.P: <span style={{ textDecoration: "line-through" }}>{price}</span>
          $ ({discountPercentage}% off)
        </Typography>
      </Box>
    </Box>
  );
};

export default StackCard;
