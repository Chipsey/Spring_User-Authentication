import {
  FETCH_ORDERS,
  ADD_ORDER,
  DELETE_ORDER,
  UPDATE_ORDER,
  FETCH_ORDER_BY_ID,
} from "../constants/actionTypes.js";
import * as api from "../api/index.js";

export const fetchOrders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders();
    // console.log(data);

    dispatch({ type: FETCH_ORDERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// export const fetchOrderById = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchOrderById(id);
//     console.log(data);
//     dispatch({ type: FETCH_ORDER_BY_ID, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteOrder = (id) => async (dispatch) => {
//   try {
//     await api.deleteOrder(id);

//     dispatch({ type: DELETE_ORDER, payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const addOrder = (orderData) => async (dispatch) => {
  try {
    const { data } = await api.addOrder(orderData);
    console.log(JSON.stringify(data).length);
    dispatch({ type: ADD_ORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const updateOrder = (id, updatedOrderData) => async (dispatch) => {
//   try {
//     const { data } = await api.updateOrder(id, updatedOrderData);
//     dispatch({ type: UPDATE_ORDER, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateDetails = (id, updatedProductData) => async (dispatch) => {
//   try {
//     const { data } = await api.updateDetails(id, updatedProductData);
//     dispatch({ type: UPDATE_ORDER, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
