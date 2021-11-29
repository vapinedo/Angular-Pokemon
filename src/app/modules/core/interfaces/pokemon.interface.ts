export interface PokemonExtended {
    id: number;
    forms: any[];
    moves: any[];
    name: string;
    stats: any[];
    types: any[];
    species: any;
    sprites: any;
    order: number;
    height: number;
    weight: number;
    abilities: any[];
    held_items: any[];
    past_types: any[];
    game_indices: any[];
    is_default: boolean;
    base_experience: number;
    location_area_encounters: string;
}

export interface PokemonMedium {
    id: number;
    name: string;
    image: string;
    movesCount: number;
}

export interface PokemonShort {
    name: string;
    url: string;
}   
