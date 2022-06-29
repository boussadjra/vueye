import  { variantProps } from '~/composables/core/variant';
import outlinedProps from '~/composables/core/props/outlinedProps';
import smoothProps from '~/composables/core/props/smoothProps';
import contentProps from '~/composables/core/props/contentProps';


const badgeProps={
    ...variantProps,
    ...outlinedProps,
    ...smoothProps,
    ...contentProps
}


export default badgeProps