import { z } from 'zod';

export const validationSchema = z.object({
  product_name: z.string().min(1, 'Product name is required!'),
  product_stock: z.string().min(1, 'Product stock is required!'),
  product_price: z.string().min(1, 'Product price is required!'),
  product_description: z.string().min(1, 'Product description is required!'),
  product_variants: z.array(z.any()),
  product_photo: z.any(),
  product_status: z.string().min(1, 'Product status is required!'),
  productCategoryId: z.string().min(1, 'Product category is required!'),
});

export type ValidationSchema = z.infer<typeof validationSchema>;