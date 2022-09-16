import type { PropType } from 'vue'
import labelProps from '~/composables/core/props/labelProps'
import disabledProps from '~/composables/core/props/disabledProps'
import { variantProps } from '~/composables/core/variant'

type CheckboxSize = 'sm' | 'md' | 'lg' | 'xl'

const checkboxProps = {
  ...labelProps,
  ...disabledProps,

  variant: {
    ...variantProps.variant,
    default: 'primary',
   
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
  indeterminate: {
    type: Boolean,
    default: false,
    description: 'The indeterminate state of the checkbox',
  },
  size: {
    type: String as PropType<CheckboxSize>,
    default: 'md',
    validator: (value: CheckboxSize) => ['sm', 'md', 'lg', 'xl'].includes(value),
    description: 'Set the size of the component (sm, md, lg, xl)',
  },
}

export default checkboxProps
