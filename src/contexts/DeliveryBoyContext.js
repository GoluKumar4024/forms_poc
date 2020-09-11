import contextCreator from "./contextCreator";
import DeliveryBoyData from "../RawData/DeliveryBoyData.json";

// All the operations that should be performed on deliveryBoy should be
// defined and described here
const delieryBoyReducer = (state, action) => {
  switch (action.type) {
    case "addDeliveryBoy":
      console.log("adding new deliveryBoy");
      console.log(action.payload);
      return [...state, action.payload];
    case "updateDeliveryBoy":
      return state.map((deliveryBoy) =>
        deliveryBoy.useId === action.payload.userId
          ? action.payload
          : deliveryBoy
      );
    case "deleteDeliveryBoy":
      return state.filter(
        (deliveryBoy) => deliveryBoy.userId !== payload.userId
      );
  }
};

const addDeliveryBoy = (dispatch) => {
  return (deliveryBoy, callback) => {
    dispatch({ type: "addDeliveryBoy", payload: deliveryBoy });
    if (callback) {
      callback();
    }
  };
};

const updateDeliveryBoy = (dispatch) => {
  return (deliveryBoy, callback) => {
    dispatch({ type: "updateDeliveryBoy", payload: deliveryBoy });
    if (callback) {
      callback();
    }
  };
};

const deleteDeliveryBoy = (dispatch) => {
  return (deliveryBoy) => {
    dispatch({ type: "deleteDeliveryBoy", payload: deliveryBoy });
  };
};

export const { Context, Provider } = contextCreator(
  delieryBoyReducer,
  { addDeliveryBoy, updateDeliveryBoy, deleteDeliveryBoy },
  DeliveryBoyData
);
