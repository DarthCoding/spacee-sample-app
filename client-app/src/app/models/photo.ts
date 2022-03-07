import { Camera } from "./camera";
import { Rover } from "./rover";

export class Photo {
    public id: number;
    public sol: number;
    public camera: Camera;
    public img_src: string;
    public earth_date: Date;
    public rover: Rover;
}