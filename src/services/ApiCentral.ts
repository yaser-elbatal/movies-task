import axios, { AxiosRequestConfig } from "axios";
import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "@store";
import { axiosAPI } from "@utils";

export const request = async (options: any, message: any, hideToaster = false, hideToken = false,) => {
  // Two Variables path to every request
  // let lang = (await AsyncStorage.getItem("lang")) || store.getState().general.lang,
  //   token = (await AsyncStorage.getItem("token")) || store.getState().auth.token;

  // Create our Request --> Axios ..
  // With server-url - token and language
  const client = axios.create({
    baseURL: axiosAPI.baseURL, // project server-url
    params: { lang: I18nManager.isRTL ? "ar" : "en" },
    headers: {
      // Authorization: !hideToken ? (token ? token : token) : null,
    },
  });


  const onSuccess = function (response: any) {
    // The Result of the Request
    // #TODO Can Handle Toaster for Every Request

    return response.data;
  };

  // Function for Error request
  const onError = function (error: any) {
    // method returns a Promise object that is rejected with a given reason.
    return Promise.reject(error?.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};


