/// <reference types="node" />
import * as SPEnums from "./stream_processor_enums";
export declare type RequiredSettings = {
    width: number;
    height: number;
    format: SPEnums.Format;
    quality: number;
};
export declare type TextSettings = {
    cam_name?: string;
    text_position?: SPEnums.TextPosition;
    show_date?: boolean;
    font_size?: number;
    font_path?: string;
};
export declare type MotionSettings = {
    gaussian_size?: number;
    scale_denominator?: number;
    bg_stabil_length?: number;
    motion_stabil_length?: number;
    min_pixel_diff?: number;
    min_changed_pixels?: number;
    motion_fps_scale?: number;
};
export declare type DeviceSettings = {
    device_type?: SPEnums.DeviceType;
    device_choice?: number;
};
export declare type Processed = {
    compressed: Buffer;
    motion: boolean;
};
