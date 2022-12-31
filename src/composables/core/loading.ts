import { computed } from 'vue';

export const loadingProps = {
    loading: {
        type: Boolean,
        default: false,
        description: "Add a loading indicator to the component",
    }
}

export function useLoading(props: {
    loading: boolean
}) {

    const loadingClass = computed(() => ({ 'animate-spin': props.loading }))

    return {
        loadingClass: loadingClass.value
    }
}