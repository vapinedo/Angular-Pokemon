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

export interface PokemonShort {
    name: string;
    moves: any[];
    image: string;
}