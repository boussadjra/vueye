import {blockProps, dismissProps, outlinedProps, smoothProps, variantProps} from '~/composables';

const alertProps={
    ...variantProps,
    ...outlinedProps,
    ...smoothProps,
    ...dismissProps,
    ...blockProps,
    border: {
        type: [Boolean, String],
        validator: (val: boolean | string) => {
            return typeof val === 'boolean' || [
                'top',
                'right',
                'bottom',
                'left',
            ].includes(val)
        },
    },
    block: {
        default: true,
        description: 'Make the alert take up the full width of its container',
    },
    title: {
        type: String,
        default: '',
        description: 'Set the title of the alert',
        
    },
    content: {
        type: String,
        default: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Set the content of the alert',
    },

}

export default alertProps