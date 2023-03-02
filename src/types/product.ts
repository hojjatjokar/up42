export type Product = {
  name: string;
  id: string;
  displayName: string;
  metadata: { blockPricingStrategy: { credits: number; name: string } };
};
