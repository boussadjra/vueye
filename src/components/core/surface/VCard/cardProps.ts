import { blockProps, elevationProps, outlinedProps, titleProps } from "~/composables"

const cardProps = {
    ...elevationProps,
    ...outlinedProps,
    ...blockProps,
    ...titleProps,
    tag: {
        type: String,
        default: "div"
    },
    mediaAside: {
        type: Boolean,
        default: false
    },
}

export default cardProps