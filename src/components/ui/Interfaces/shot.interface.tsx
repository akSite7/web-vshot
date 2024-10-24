export type Shot = {
  id: number;
  attributes: {
    item: any;
    tag: string;
    title: string;
    description: string;
    price: string;
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
}