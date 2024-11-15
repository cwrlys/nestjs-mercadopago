import mercadopago, { Payment, PreApproval, Preference } from "mercadopago";
import {
  MERCADOPAGO_PAYMENT_PROVIDER,
  MERCADOPAGO_SUBSCRIPTION_PROVIDER,
  MERCADOPAGO_PREFERENCE_PROVIDER,
  MERCADOPAGO_CONFIG_PROVIDER,
  MERCADOPAGO_OPTIONS_PROVIDER,
} from "./mercadopago.constants";
import { MercadoPagoOptions } from "./interfaces";

export function createProviders() {
  return [
    {
      provide: MERCADOPAGO_CONFIG_PROVIDER,
      useFactory: (config: MercadoPagoOptions): mercadopago => {
        return new mercadopago({ accessToken: config.accessToken, options: config.options });
      },
      inject: [MERCADOPAGO_OPTIONS_PROVIDER],
    },
    {
      provide: MERCADOPAGO_PAYMENT_PROVIDER,
      useFactory: (client: mercadopago) => {
        return new Payment(client);
      },
      inject: [MERCADOPAGO_CONFIG_PROVIDER],
    },
    {
      provide: MERCADOPAGO_SUBSCRIPTION_PROVIDER,
      useFactory: (client: mercadopago) => {
        return new PreApproval(client);
      },
      inject: [MERCADOPAGO_CONFIG_PROVIDER],
    },
    {
      provide: MERCADOPAGO_PREFERENCE_PROVIDER,
      useFactory: (client: mercadopago) => {
        return new Preference(client);
      },
      inject: [MERCADOPAGO_CONFIG_PROVIDER],
    },
  ];
}

export function createExportProviders() {
  return [
    MERCADOPAGO_CONFIG_PROVIDER,
    MERCADOPAGO_PAYMENT_PROVIDER,
    MERCADOPAGO_SUBSCRIPTION_PROVIDER,
    MERCADOPAGO_PREFERENCE_PROVIDER
  ];
}
