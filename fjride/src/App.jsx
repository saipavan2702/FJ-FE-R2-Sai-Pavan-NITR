import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
// import PaymentTypes from "./components/PaymentTypes";
// import CardForm from "./components/payment/CardForm";
// import IbanForm from "./components/payment/IbanForm";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

function App() {
  // const demos = [
  //   {
  //     path: "/card-element",
  //     label: "CardElement",
  //     component: CardForm,
  //   },
  //   {
  //     path: "/iban-element",
  //     label: "IbanElement",
  //     component: IbanForm,
  //   },
  // ];
  // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  // const Booking = () => (
  //   <Elements stripe={stripePromise}>
  //     <PaymentTypes demos={demos} />
  //   </Elements>
  // );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/booking" element={< />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
