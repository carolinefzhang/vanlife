interface Van {
    id: string;
    name: string;
    price: number;
    description: string;
    image_url: string;
    type: string;
}

interface Review {
    user: string;
    rating: number;
    comment: string;
    created_at: string;
}

type NavbarProps = {
    name: string,
    url: string,
}

export type { Van, Review, NavbarProps }