import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import './App.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoginForm = lazy(() => import('./Components/loginPage'));
const Registration = lazy(() => import('./Components/registrationPage'));
const Home = lazy(() => import('./Components/Home'));
const Products = lazy(() => import('./Components/Products'));
const ProductDetails = lazy(() => import('./Components/productsDetailsPage'));



function App() {
  return (
    <Suspense fallback={
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    }>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Suspense>
  );
}

export default App;
