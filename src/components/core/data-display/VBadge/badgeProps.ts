import  { contentProps, outlinedProps, smoothProps, variantProps } from '~/composables';

const badgeProps={
    ...variantProps,
    ...outlinedProps,
    ...smoothProps,
    ...contentProps
}


export default badgeProps