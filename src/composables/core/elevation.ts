import type { PropType } from 'vue';

export const elevations = ['none', 'sm', 'md', 'lg', 'xl', '2xl']
type IElevation = typeof elevations[number]
let shadows: Record<IElevation, string> = {
    'none': 'shadow-none hover:shadow-sm',
    'sm': 'shadow-sm focus:shadow-none active:shadow-none',
    'md': 'shadow-md focus:shadow-sm active:shadow-sm',
    'lg': 'shadow-lg focus:shadow-md active:shadow-md',
    'xl': 'shadow-xl focus:shadow-lg active:shadow-lg',
    '2xl': 'shadow-2xl focus:shadow-xl active:shadow-xl'
}


export const elevationProps = {
    elevation: {
        type: String as PropType<IElevation>,
        default: 'sm'
    }
}

export function useElevation(props: {
    elevation: IElevation,
    outlined: boolean
}) {

    return {
        shapeClass: computed(() => props.outlined ? 'border border-slate-300 dark:border-slate-700' : `${shadows[props.elevation]} shadow-slate-400 dark:shadow-primary-800`)
    }
}