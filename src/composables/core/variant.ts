import type { PropType } from 'vue'

const allowedVariants = ['default', 'success', 'info', 'warning', 'error'] as const
export const extendedAllowedVariants = ['primary', 'secondary', 'dark', 'light', ...allowedVariants]

export type Variant = typeof allowedVariants[number]
export type ExtendedVariant = typeof extendedAllowedVariants[number]

function isValidColor(value: string) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value) || /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(value)
}

export const variantProps = {
  variant: {
    type: String as PropType<Variant | ExtendedVariant>,
    default: 'default',
    validator: (value: Variant & ExtendedVariant) => allowedVariants.includes(value),
    description: 'Set the variant of the component <i>(default, success, info, warning, error, primary, secondary)</i>',
  },
  bgColor: {
    type: String,
    default: '',
    validator: (value: string) => {
      // test if color is hexa or rgb with regex
      const isColor = isValidColor(value)
      if (!isColor || value) {
        console.warn(`${value} is not a valid color`)
        return false
      }
      return true
    },
    description: 'Set the background color of the component',
  },
  textColor: {
    type: String,
    default: '',
    validator: (value: string) => {
      // test if color is hexa or rgb with regex
      const isColor = isValidColor(value)
      if (!isColor || value) {
        console.warn(`${value} is not a valid color`)
        return false
      }
      return true
    },
    description: 'Set the text color of the component',
  },
}

export default function useVariant(props: any) {
  const classes = computed(() => `${props.variant}`)
  console.log('props.variant ', props)
  watch(
    () => props,
    (val) => {
      console.log('props ', val)
    },
    {
      deep: true,
    },
  )
  return {
    variantClasses: classes,
    variantStyle: computed(() => ({
      backgroundColor: props.bgColor,
      color: props.textColor,
      borderColor: props.bgColor,
    })),
  }
}
