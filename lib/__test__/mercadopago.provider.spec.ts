import { Test } from '@nestjs/testing';
import mercadopago, { Payment, PreApproval, Preference } from 'mercadopago';
import {
  MERCADOPAGO_CONFIG_PROVIDER,
  MERCADOPAGO_PAYMENT_PROVIDER,
  MERCADOPAGO_SUBSCRIPTION_PROVIDER,
  MERCADOPAGO_PREFERENCE_PROVIDER,
  MERCADOPAGO_OPTIONS_PROVIDER,
} from '../mercadopago.constants';
import { createProviders } from '../mercadopago.provider';
import { MercadoPagoOptions } from '../interfaces';

describe('MercadoPago Providers', () => {
  const mockOptions: MercadoPagoOptions = {
    accessToken: 'test_access_token',
    options: { timeout: 5000 },
  };

  let configProvider: mercadopago;
  let paymentProvider: Payment;
  let subscriptionProvider: PreApproval;
  let preferenceProvider: Preference;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MERCADOPAGO_OPTIONS_PROVIDER,
          useValue: mockOptions,
        },
        ...createProviders(),
      ],
    }).compile();

    configProvider = moduleRef.get<mercadopago>(MERCADOPAGO_CONFIG_PROVIDER);
    paymentProvider = moduleRef.get<Payment>(MERCADOPAGO_PAYMENT_PROVIDER);
    subscriptionProvider = moduleRef.get<PreApproval>(MERCADOPAGO_SUBSCRIPTION_PROVIDER);
    preferenceProvider = moduleRef.get<Preference>(MERCADOPAGO_PREFERENCE_PROVIDER);
  });

  it('should create a mercadopago client', () => {
    expect(configProvider).toBeInstanceOf(mercadopago);
    expect(configProvider.accessToken).toBeDefined();
  });

  it('should create a Payment provider', () => {
    expect(paymentProvider).toBeInstanceOf(Payment);
    expect(paymentProvider.create).toBeDefined();
  });

  it('should create a PreApproval provider', () => {
    expect(subscriptionProvider).toBeInstanceOf(PreApproval);
    expect(subscriptionProvider.get).toBeDefined();
  });

  it('should create a Preference provider', () => {
    expect(preferenceProvider).toBeInstanceOf(Preference);
    expect(preferenceProvider.create).toBeDefined();
  });
});
