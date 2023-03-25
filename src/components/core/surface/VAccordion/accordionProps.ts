import { blockProps, elevationProps, outlinedProps } from "~/composables"

const accordionProps = {
    ...elevationProps,
    ...outlinedProps,
    ...blockProps,
    
    tag: {
        type: String,
        default: "div"
    },
}

export default accordionProps