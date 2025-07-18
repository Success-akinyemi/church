import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51P2cbNHw86RH5XOFq3nK5XceBIBgDBKh8nw1P1jg77ogQs17QjbTnMDUYXPZHOFGSzHtQ30VEjFLW7c8GwUEAz3J00f9FWYeMa') // Replace with your Stripe publishable key

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
        <Elements stripe={stripePromise}>
            <App />
        </Elements>
    </PersistGate>
  </Provider>,
)