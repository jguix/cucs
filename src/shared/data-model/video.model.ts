import {Thumbnail} from './thumbnail.model';

export interface Video {
    name: string;
    description: string;
    tags: string[];
    thumbnail: Thumbnail;
    uri: string;
    embed: string;
}