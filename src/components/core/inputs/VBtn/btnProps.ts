
import appendProps from "~/composables/core/props/appendProps";
import blockProps from "~/composables/core/props/blockProps";
import disabledProps from "~/composables/core/props/disabledProps";
import linkProps from "~/composables/core/props/linkProps";
import outlinedProps from "~/composables/core/props/outlinedProps";
import smoothProps from "~/composables/core/props/smoothProps";
import textProps from "~/composables/core/props/textProps";
import { sizeProps } from "~/composables/core/size";
import { variantProps } from "~/composables/core/variant";
import { cornerProps } from "~/composables/core/corner";
import { loadingProps } from "~/composables/core/loading";

const btnProps =  {
    ...variantProps,
    ...sizeProps,
    ...blockProps,
    ...outlinedProps,
    ...smoothProps,
    ...textProps,
    ...linkProps,
    ...appendProps,
    ...loadingProps,
    ...cornerProps,
    ...disabledProps,
    icon: {
       type: String,
       default: "",
       description: "Icon name, it should start with <code>i-carbon-</code> prefix",
 
    },
    tag: {
         type: String,
       default: 'button',
       description: "The tag to use for the button",
    },
 
 
 }

 export default btnProps;