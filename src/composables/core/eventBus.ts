import { Ref } from "vue";

type TBusReturn = {
    emit: (event: string, ...args: any[]) => void;
    bus: Ref<Map<string, any[]>>
};

const bus = ref<Map<string, any[]>>(new Map());

export default function useEventsBus(): TBusReturn {

    function emit(event: string, ...args: any[]) {
        bus.value.set(event, args);
    }

    return {
        emit,
        bus
    }
}