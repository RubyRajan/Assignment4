import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  profilePicture: { type: String },
  purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  shippingAddress: {
    type: {
      street: String,
      city: String,
      state: String,
      country: String,
      postalCode: String,
    },
  },
});

export const User = mongoose.model('User', userSchema);
