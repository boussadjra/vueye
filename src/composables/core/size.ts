import { PropType, Ref } from "vue";

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export type Size = typeof sizes[number];

export const sizeProps = {
    size: {
        type: String as PropType<Size>,
        default: 'md',
        validator: (value: Size) => sizes.includes(value)
    }
}

export function useSize(options: {
    size?: Ref<Size>
}) {
    const classes = computed(() => (
        `${options.size?.value}`))
    return {
        sizeClasses: classes,

    }
}