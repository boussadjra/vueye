import { PropType } from "vue";

const modelValueProps = {
    modelValue: {
        type: [String, Number,Object],
        default: null,
        description: 'The value of the input'
    },

}

export default modelValueProps