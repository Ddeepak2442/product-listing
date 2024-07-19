import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const ProductDetailsCard = ({
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
}: {
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
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: "20px",
        m: "20px",
      }}
    >
      <CardMedia
        sx={{
          width: { xs: "100%", md: 300 },
          height: { xs: 200, md: 300 },
          mx: { xs: "auto", md: "100px" },
          my: { xs: 2, md: "50px" },
        }}
        image={thumbnail}
        title={title}
      />
      <CardContent sx={{ flex: 1 }}>
        <Stack gap={1}>
          <Typography fontWeight={600} fontSize={22}>
            {title}
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Typography fontWeight={400} fontSize={16}>
              {rating}
            </Typography>
            <Rating name="read-only" value={rating} readOnly />
          </Stack>
          <Divider />
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Typography
              color={"red"}
              fontWeight={400}
              fontSize={16}
              alignContent={"flex-end"}
            >
              - {discountPercentage} %
            </Typography>
            <Typography fontWeight={600} fontSize={22}>
              {price} $
            </Typography>
          </Stack>
          <Typography fontWeight={400} fontSize={14}>
            M.R.P:
            <span style={{ textDecoration: "line-through" }}>{price}</span> $
          </Typography>

          <Divider />
          <Stack direction={"row"} gap={5}>
            <Box minWidth={100}>
              <Typography fontWeight={600} fontSize={16}>
                Category
              </Typography>
            </Box>
            <Typography fontWeight={400} fontSize={16}>
              {category}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={5}>
            <Box minWidth={100}>
              <Typography fontWeight={600} fontSize={16}>
                Brand
              </Typography>
            </Box>
            <Typography fontWeight={400} fontSize={16}>
              {brand}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={5}>
            <Box minWidth={100}>
              <Typography fontWeight={600} fontSize={16}>
                Weight
              </Typography>
            </Box>
            <Typography fontWeight={400} fontSize={16}>
              {weight} kg
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={5}>
            <Box minWidth={100}>
              <Typography fontWeight={600} fontSize={16}>
                Volume
              </Typography>
            </Box>
            <Typography fontWeight={400} fontSize={16}>
              {Math.round(volume)} cubic units
            </Typography>
          </Stack>
          <Divider />
          <Stack direction={"column"} gap={1}>
            <Typography fontWeight={600} fontSize={16}>
              About this item
            </Typography>
            <Typography fontWeight={400} fontSize={16}>
              {description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsCard;
