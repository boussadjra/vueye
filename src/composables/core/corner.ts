import type { PropType } from 'vue';
import { computed } from 'vue';

export const corners = ['none', 'sm', 'default', 'md', 'lg', 'xl', '2xl', 'full']

type ICorner = typeof corners[number]

let borderRadius: Record<ICorner, string> = {
    'none': 'rounded-none',
    'sm': 'rounded-sm',
    'default': 'rounded',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl',
    'full': 'rounded-full',

}


export const cornerProps = {
    corner: {
        type: String as PropType<ICorner>,
        default: 'default',
        description: "Set the border radius of the component",
    }
}

export function useCorner(props: {
    corner: ICorner
}) {

    let cornerClass = computed(() => `${borderRadius[props.corner]}`)

    return {
        cornerClass: cornerClass
    }
}
