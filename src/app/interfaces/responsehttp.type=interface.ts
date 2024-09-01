import { User } from "./user.type=interface";

export interface Respuestahttp  {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    results:     User[];
}