import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import theme from "./theme";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCookies } from "react-cookie";
import axios from "axios";

import './animate.css'
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ForgotPasswordNotification from "./pages/auth/ForgotPasswordNotification";
import Home from "./pages/Dashboard/Home";
import Transactions from "./pages/Dashboard/Transactions";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});


export const App = () =>{
  const [cookie] = useCookies()
  const token = cookie.token;
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      // For example, you can add headers
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          {/* <Provider store={store}> */}
            {token ? (
              <Routes>
               
              </Routes>
            ) : (
              <Routes>
               <Route path="/auth/sign-up" element={<SignUp />}></Route>
               <Route path="/auth/forgot-password" element={<ForgotPassword />}></Route>
               <Route path="/auth/forgot-password/notification" element={<ForgotPasswordNotification />}></Route>
               <Route path="/dashboard" element={<Home />}></Route>
               <Route path="/dashboard/transactions" element={<Transactions />}></Route>
               <Route path="*" element={<Login />}></Route>
              </Routes>
            )}
          {/* </Provider> */}
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
} ;
