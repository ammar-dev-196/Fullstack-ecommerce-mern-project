import mongoose from "mongoose";
import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";
import Address from "../models/address.model.js"; // Your Address Model
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

/**
 * Check the order, saving address to user address schema if needed.
 * @route POST api/v1/orders/checkout
 * @access private (Authenticated users only)
 */

export const createOrder = asyncHandler(async (request, response) => {
  const userId = request.user._id; // Provided by verifyJWT middleware
  const {
    addressId, // Provided if choosing a saved address
    newAddress, // Provided if typing a new address for the first time
    orderNo,
    shippingMethodTitle,
    shippingCost,
    taxTitle,
    taxAmount,
  } = request.body;

  if (!shippingMethodTitle) {
    throw new ApiError(400, "Shipping method selection is mandatory");
  }

  // 1. Resolve Shipping Address Data
  let finalShippingData = null;

  if (addressId) {
    // SCENARIO A: User selected a previously saved address
    if (!mongoose.Types.ObjectId.isValid(addressId)) {
      throw new ApiError(400, "Invalid Address ID format");
    }

    const savedAddress = await Address.findOne({ _id: addressId, userId });
    if (!savedAddress) {
      throw new ApiError(404, "The selected saved address could not be found");
    }

    finalShippingData = savedAddress;
  } else if (newAddress) {
    // SCENARIO B: First-time buyer or adding a completely new address
    const {
      fullName,
      phoneNo,
      address,
      city,
      stateOrProvince,
      country,
      zipcode,
    } = newAddress;

    if (
      !fullName ||
      !phoneNo ||
      !address ||
      !city ||
      !stateOrProvince ||
      !country
    ) {
      throw new ApiError(400, "Address fields are required");
    }

    // Pro Move: Automatically persist this brand new address into the Address table for future use
    const savedNewAddress = await Address.create({
      userId,
      fullName,
      phoneNo,
      address,
      city,
      stateOrProvince,
      country,
      zipcode: zipcode || "",
    });

    finalShippingData = savedNewAddress;
  } else {
    // Neither was sent
    throw new ApiError(
      400,
      "Please provide a valid saved address ID or enter new delivery details",
    );
  }

  // 2. Fetch active user cart data
  const cart = await Cart.findOne({ userId }).populate("items.productId");
  if (!cart || cart.items.length === 0) {
    throw new ApiError(400, "Your shopping cart is empty");
  }

  // 3. Map Cart entries into snapshot Order array entries
  let itemsSubtotal = 0;
  const orderItems = cart.items.map((item) => {
    const product = item.productId;
    if (!product) {
      throw new ApiError(
        404,
        "One or more products in your cart are no longer active in our store",
      );
    }

    itemsSubtotal += product.price * item.quantity;

    return {
      productId: product._id,
      title: product.title,
      sku: product.sku,
      quantity: item.quantity,
      priceAtPurchase: product.regularPrice,
    };
  });

  // 4. Financial Calculations
  const calculatedSubtotal = Number(itemsSubtotal.toFixed(2));
  const finalCost =
    calculatedSubtotal + Number(shippingCost || 0) + Number(taxAmount || 0);
  const totalAmount = Number(finalCost.toFixed(2));

  // 5. Generate Order Identifier Tracking String
  // const orderNo = `ORD-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

  // 6. Build the Finalized Order document with explicit text mapping
  const newOrder = await Order.create({
    orderNo,
    userId,
    items: orderItems,
    shippingAddress: {
      fullName: finalShippingData.fullName,
      phoneNo: finalShippingData.phoneNo,
      address: finalShippingData.address,
      city: finalShippingData.city,
      stateOrProvince: finalShippingData.stateOrProvince,
      zipcode: finalShippingData.zipcode,
      country: finalShippingData.country,
    },
    pricingSummary: {
      itemsSubtotal: calculatedSubtotal,
      shippingMethodTitle,
      shippingCost: Number(shippingCost || 0),
      taxTitle: taxTitle,
      taxAmount: Number(taxAmount || 0),
      totalAmount,
    },
    payment: {
      paymentType: request.body.paymentType,
      paymentId: request.body.paymentId,
      paymentStatus: "pending",
    },
  });

  // 7. Clear the cart
  await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } });

  // 8. Send structured response payload
  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        newOrder,
        "Order successfully processed and address recorded",
      ),
    );
});

/**
 * Fetch order list
 * @route GET api/v1/orders/
 * @access private (Authenticated users only)
 */

export const orderList = asyncHandler(async (request, response) => {});
