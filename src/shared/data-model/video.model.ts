import {Thumbnail} from './thumbnail.model';

export interface Video {
    id: string;
    title: string;
    description: string;
    width: number;
    height: number;
    tags: string[];
    thumbnail: Thumbnail;
}