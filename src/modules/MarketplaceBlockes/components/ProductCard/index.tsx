import { Product } from '@/types/product';
import { Button, Card, CardContent, Box, Typography } from '@mui/material';

export type Props = {
  product: Product;
  onClick: Function;
  isSelected: boolean;
};

const ProductCard = ({ product, onClick, isSelected }: Props) => (
  <Card
    variant="outlined"
    sx={{
      display: 'flex',
      flex: { xs: '1 50%', lg: '1 21%' },
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
    <CardContent>
      <Typography>{product.displayName}</Typography>
    </CardContent>

    <Box padding={1}>
      <Typography sx={{ fontWeight: 'bold' }}>
        {product.metadata.blockPricingStrategy.credits} Credits
      </Typography>
      <Button
        disabled={isSelected}
        variant="contained"
        fullWidth
        onClick={() => onClick(product)}>
        Add to cart
      </Button>
    </Box>
  </Card>
);

export { ProductCard };
