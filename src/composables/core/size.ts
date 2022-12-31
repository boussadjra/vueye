import type { PropType } from 'vue'

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

export type Size = typeof sizes[number]

export const sizeProps = {
  size: {
    type: String as PropType<Size>,
    default: 'md',
    validator: (value: Size) => sizes.includes(value),
    description: 'Set the size of the component (xs, sm, md, lg, xl, xxl)',
  },
}

export function useSize(props:any) {
  const classes = computed(() => `${props.size}`)
  return {
    sizeClasses: classes,
  }
}
