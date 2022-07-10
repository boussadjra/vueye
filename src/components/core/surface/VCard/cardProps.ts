import outlinedProps from "~/composables/core/props/outlinedProps"
import { elevationProps } from "~/composables/core/elevation"
import blockProps from "~/composables/core/props/blockProps"
import titleProps from "~/composables/core/props/titleProps"

const cardProps={
    ...elevationProps,
    ...outlinedProps,
    ...blockProps,
    ...titleProps,
    tag:{
        type:String,
        default:"div"
    },
    mediaAside:{
        type:Boolean,
        default:false
    },
}

export default cardProps