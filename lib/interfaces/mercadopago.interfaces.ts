import MercadoPagoConfig from 'mercadopago';

export interface MercadoPagoOptions extends MercadoPagoConfig {}

export interface MercadoPagoAsyncOptions {
  inject?: any[];
  useFactory?: (...args: any[]) => Promise<MercadoPagoOptions>;
}
