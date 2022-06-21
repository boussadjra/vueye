export const dismissProps = {
    dismissible: {
        type: Boolean,
        default: false
    },
    closed: {
        type: Boolean,
        default: false
    }
}

export function useDismiss(emit: Function) {

    function close() {
        console.log('emit close')
        emit('update:closed', true)
    }

    return {
         close
    }
}