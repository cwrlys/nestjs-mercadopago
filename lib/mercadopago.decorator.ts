import { Inject } from "@nestjs/common";
import { MERCADOPAGO_CONFIG_PROVIDER, MERCADOPAGO_PAYMENT_PROVIDER, MERCADOPAGO_PREFERENCE_PROVIDER, MERCADOPAGO_SUBSCRIPTION_PROVIDER } from "./mercadopago.constants";

export function InjectMercadoPagoConfig() {
  return Inject(MERCADOPAGO_CONFIG_PROVIDER);
}

export function InjectPayment() {
  return Inject(MERCADOPAGO_PAYMENT_PROVIDER);
}

export function InjectSubscriptions() {
  return Inject(MERCADOPAGO_SUBSCRIPTION_PROVIDER);
}

export function InjectPreference() {
  return Inject(MERCADOPAGO_PREFERENCE_PROVIDER);
}
