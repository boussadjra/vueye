import type { PropType } from 'vue'
import labelProps from '~/composables/core/props/labelProps'
import disabledProps from '~/composables/core/props/disabledProps'
import { variantProps } from '~/composables/core/variant'

type radioSize = 'sm' | 'md' | 'lg' | 'xl'

const radioProps = {
  ...labelProps,
  ...disabledProps,

  variant: {
    ...variantProps.variant,
    // default: 'primary',
   
  },
  id: {
    type: String,
    default: '',
    description: 'The id of the input bound to the label',
  },
  modelValue: {
    type: Boolean,
    default: true,
    description: 'The value of the input',
  },

  size: {
    type: String as PropType<radioSize>,
    default: 'md',
    validator: (value: radioSize) => ['sm', 'md', 'lg', 'xl'].includes(value),
    description: 'Set the size of the component (sm, md, lg, xl)',
  },
}

export default radioProps
