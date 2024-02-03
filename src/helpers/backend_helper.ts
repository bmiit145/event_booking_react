import axios from "axios";
import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();
//const api_url = "https://satnam-backend.vercel.app/event/"
const api_url = "http://localhost:4001/event/"

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data : any) => api.create(url.POST_FAKE_REGISTER, data);

// Login Method
export const postFakeLogin = (data : any) => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = (data : any) => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = (data : any) => api.create(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data : any) => api.update(url.POST_EDIT_PROFILE + '/' + data.idx, data);

// Register Method
export const postJwtRegister = (url : string, data  :any) => {
  return api.create(url, data)
    .catch(err => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
export const postJwtLogin = (data : any) => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data : any) => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data : any) => api.create(url.SOCIAL_LOGIN, data);

// Calendar
// get Events
// export const getEvents = () => api.get(url.GET_EVENTS);
export const getEvents = () => api.get(api_url + "/events");
//export const getEvents = () => api.get("https://satnam-backend.vercel.app/event/events");


// get Events
export const getCategories = () => api.get(url.GET_CATEGORIES);

// get Upcomming Events
// export const getUpCommingEvent = () => api.get(url.GET_UPCOMMINGEVENT);
export const getUpCommingEvent = () => api.get(api_url + '/upcommingevents');
//export const getUpCommingEvent = () => api.get("https://satnam-backend.vercel.app/event/upcommingevents");

// add Events
//export const addNewEvent = (event : any) => api.create(url.ADD_NEW_EVENT, event);
export const addNewEvent = (event : any) => api.create(api_url + '/add', event).then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});
//export const addNewEvent = (event : any) => api.create('https://satnam-backend.vercel.app/event/add', event);

// update Event
// export const updateEvent = (event : any) => api.put(url.UPDATE_EVENT, event);
export const updateEvent = (event : any) => api.put(api_url + '/update', event);

// delete Event
export const deleteEvent = (event : any) => api.delete(api_url + '/delete', { headers: { event } , data: { id : event } });

