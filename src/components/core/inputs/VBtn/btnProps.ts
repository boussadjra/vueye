import { appendProps, blockProps, cornerProps, disabledProps, linkProps, loadingProps, outlinedProps, sizeProps, smoothProps, textProps, variantProps } from "~/composables";

const btnProps = {
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