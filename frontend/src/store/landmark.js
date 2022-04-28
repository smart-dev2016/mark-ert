import { csrfFetch } from "./csrf";

const LOAD = "landmarks/LOAD";
const CREATE = "landmarks/CREATE";

const EDIT = "landmarks/EDIT";
const DELETE = "landmarks/DELETE";

// Action creator for getting all landmarks.
const get = (landmarks) => ({
  type: LOAD,
  landmarks,
});
// Action creator for posting landmark.
const create = () => ({});
// Action creator for editing landmark.
const edit = () => ({});
// Action creator for deleting landmark.
const deleteLandmark = () => ({});

// Thunk for getting all landmarks.

export const getLandmarks = () => async (dispatch) => {
  const response = await fetch("/api/landmarks");

  if (response.ok) {
    // array of landmarks.
    const landmarks = await response.json();
    // console.log(landmarks);
    dispatch(get(landmarks.landmark));
  }
};

// initial state.

const initialState = {};

// Ex. data for landmark
/*
{
          userId: 1,
          name: "Eiffel Tower",
          imageUrl: "https://w.wallhaven.cc/full/6q/wallhaven-6qmzj6.jpg",
          description:
            "The Eiffel tower is a puddled iron structure, an iron that has lost some of its carbon and therefore rusts less quickly. It is pyramidal in shape with slightly curved sides. It measures 324m high and is divided into 4 parts separated by a floor.",
          lat: 48.8584,
          lng: 2.2945,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
*/

const landMarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allLandmarks = {};
      action.landmarks.forEach((landmark) => {
        allLandmarks[landmark.id] = landmark;
      });
      return {
        ...state,
        ...allLandmarks,
      };
    default:
      return state;
  }
};

export default landMarkReducer;