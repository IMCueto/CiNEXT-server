
// https://api.cinemark-peru.com/api/vista/data/theatres
type FetchedTheatresResponse = FetchedTheatre[]

export interface FetchedTheatre {
  city: string;
  cinemas: FetchedCinema[];
}

interface FetchedCinema {
  ID: string;
  Name: string;
  PhoneNumber: string;
  Address1: string;
  Address2: string;
  City: string;
  Latitude: string;
  Longitude: string;
  LoyaltyCode: string;
  Description: string;
  Slug: string;
}
interface CinemaInformation {
  cinema_id: string;
  name: string;
  city: string;
}
// extends CinemaInformation
interface CinemaInformationWithCoords extends CinemaInformation {
  coords: {
    lat: number;
    lon: number;
  }
}

// api.url/cines/cercanos

interface NearCinemasRouteResponse {
  city: string | null;
  cinemas: CinemaInformation[]
  nearest_id: string | null
  code: number,
  error: string | null
}

// api.url/cines/all

interface AllCinemasRouteResponse {
  cinemas: CinemaInformation[];
  code: number;
  error: string | null;
}

//https://api.cinemark-peru.com/api/vista/ticketing/concession/items?cinema_id={}

interface FetchedConsessionItemsResponse {
  ConcessionItems: FetchedConcessionItem[];
  ErrorDescription: null | string;
  ResponseCode: number;
}

interface FetchedConcessionItem {
  AlternateItems: any[];
  CanGetBarcode: boolean;
  Description: string;
  DescriptionAlt: string;
  DescriptionTranslations: any[];
  DiscountsAvailable: any[];
  ExtendedDescription: string;
  ExtendedDescriptionAlt: string;
  HOPK: string;
  HeadOfficeItemCode: string;
  Id: string;
  IsAvailableForInSeatDelivery: boolean;
  IsAvailableForPickupAtCounter: boolean;
  IsRecognitionOnly: boolean;
  IsVariablePriceItem: boolean;
  ItemClassCode: string;
  LoyaltyDiscountCode: string;
  MaximumVariablePriceInCents?: number;
  MinimumVariablePriceInCents?: number;
  ModifierGroups: any[];
  PackageChildItems: any[];
  PriceInCents: number;
  RecognitionExpiryDate?: any;
  RecognitionId: number;
  RecognitionMaxQuantity: number;
  RecognitionPointsCost: number;
  RecognitionSequenceNumber: number;
  RedeemableType: number;
  RequiresPickup: boolean;
  RestrictToLoyalty: boolean;
  ShippingMethod: string;
  SmartModifiers: any[];
  VoucherSaleType: string;
}

interface CinemaConfiteriaInformation {
  item_id: string;
  name: string;
  description: string;
  priceInCents: number;
}

// api.url/cines/:cinema_id/confiteria

interface CinemaConfiteriaRouteResponse {
  confiteria: CinemaConfiteriaInformation[]
  code: number,
  error: string | null
}
