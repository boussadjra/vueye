export const dismissProps = {
    dismissible: {
        type: Boolean,
        default: false,
        description: "Make the component dismissible (closeable)",

    },
    closed: {
        type: Boolean,
        default: false,
        description: "Make the component closed",
    }
}

export function useDismiss(emit: Function) {

    function close() {   
        emit('update:closed', true)
    }

    return {
         close
    }
}