import React, { useState, useEffect } from 'react'
import { NativeBaseProvider } from "native-base";
import AuthProvider from './src/contexts/AuthProvider'; 
import Routes from './src/routes/index';

export default function App() {
  return (
    <NativeBaseProvider>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
   </NativeBaseProvider>
  );
}

