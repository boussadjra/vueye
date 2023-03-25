import { cornerProps, sizeProps } from "~/composables";

const avatarProps={
    ...cornerProps,
    ...sizeProps,
    src: {
        type: String,
        default: '',
        description: 'Set the image source of the avatar',  
    },
    alt: {
        type: String,
        default: '',
        description: 'Set the alt text of the avatar',
    }
}

export default avatarProps