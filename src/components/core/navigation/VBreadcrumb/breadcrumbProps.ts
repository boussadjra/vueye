import type { PropType } from 'vue';

export interface IBreadcrumbItem {
    text: string,
    disabled?: boolean,
    link?: string,
    icon?: string
}

const breadcrumbProps = {
    tag: {
        type: String,
        default: 'div'
    },
    items: {
        type: Array as PropType<Array<IBreadcrumbItem>>,
        default: () => []
    },
    divider: {
        type: String,
        default: '/'
    },

    itemText: {
        type: String,
        default: 'text'
    }
}

export default breadcrumbProps