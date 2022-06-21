import { computed, Ref } from 'vue';





export const loadingProps = {
    loading: {
        type: Boolean,
        default: false
    }
}

export function useLoading(props: {
    loading: Ref<boolean>
}) {


    let loadingClass = computed(() => ({ 'animate-spin' : props.loading  }) )

    return {
        loadingClass: loadingClass.value
    }
}