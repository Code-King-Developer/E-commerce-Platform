import mongoose, { Schema, Document } from 'mongoose';

export interface IProductFinish {
  name: string;
  hex: string;
  outlineColor?: string;
}

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  tag?: string;
  image: string;
  images: string[];
  alt: string;
  inStock: boolean;
  sizes: string[];
  finishes: IProductFinish[];
  dimensionsMaterials: string[];
  shippingReturns: string[];
  featuredReview?: {
    author: string;
    date: string;
    quote: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a product title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a product price'],
      min: 0,
    },
    category: {
      type: String,
      required: [true, 'Please provide a product category'],
    },
    tag: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      required: [true, 'Please provide a main product image'],
    },
    images: {
      type: [String],
      default: [],
    },
    alt: {
      type: String,
      required: [true, 'Please provide alt text for the image'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    sizes: {
      type: [String],
      default: [],
    },
    finishes: [
      {
        name: { type: String, required: true },
        hex: { type: String, required: true },
        outlineColor: { type: String },
      },
    ],
    dimensionsMaterials: {
      type: [String],
      default: [],
    },
    shippingReturns: {
      type: [String],
      default: [],
    },
    featuredReview: {
      author: { type: String },
      date: { type: String },
      quote: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
