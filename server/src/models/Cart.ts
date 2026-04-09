import mongoose, { Schema, Document } from 'mongoose';

export interface ICartItem {
  product: mongoose.Types.ObjectId;
  name: string;
  qty: number;
  image: string;
  price: number;
  selectedSize?: string;
  selectedFinish?: string;
}

export interface ICart extends Document {
  user: mongoose.Types.ObjectId;
  items: ICartItem[];
  createdAt: Date;
  updatedAt: Date;
}

const CartItemSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  name: { type: String, required: true },
  qty: { type: Number, required: true, default: 1 },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  selectedSize: { type: String },
  selectedFinish: { type: String },
});

const CartSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
      unique: true, // One cart per user
    },
    items: [CartItemSchema],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model<ICart>('Cart', CartSchema);

export default Cart;
