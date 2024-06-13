export type Card = {
    title: string;
    des: string;
    price?: {
        from: number;
        to: number;
    };
    priceText?: string;
    buttonText: string;
};