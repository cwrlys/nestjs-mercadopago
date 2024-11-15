import { MercadoPagoAsyncOptions, MercadoPagoOptions } from "./interfaces";
import { DynamicModule, Global, Module } from "@nestjs/common";
import { MERCADOPAGO_OPTIONS_PROVIDER } from "./mercadopago.constants";
import { createExportProviders, createProviders } from "./mercadopago.provider";

@Global()
@Module({})
export class MercadoPagoModule {
  static forRoot(options: MercadoPagoOptions): DynamicModule {
    return {
      module: MercadoPagoModule,
      providers: [
        {
          provide: MERCADOPAGO_OPTIONS_PROVIDER,
          useValue: options,
        },
        ...createProviders(),
      ],
      exports: createExportProviders(),
    }
  }

  static forRootAsync(options: MercadoPagoAsyncOptions): DynamicModule {
    return {
      module: MercadoPagoModule,
      providers: [
        {
          provide: MERCADOPAGO_OPTIONS_PROVIDER,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        ...createProviders(),
      ],
      exports: createExportProviders(),
    }
  }
}
