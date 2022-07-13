import blockProps from "~/composables/core/props/blockProps";
import labelProps from "~/composables/core/props/labelProps";
import hintProps from "~/composables/core/props/hintProps";
import modelValueProps from "~/composables/core/props/modelValueProps";
import { variantProps } from "~/composables/core/variant";
import appendProps from "~/composables/core/props/appendProps";

const textFieldProps = {
    ...labelProps,
    ...hintProps,
    ...variantProps,
    ...modelValueProps,
    ...blockProps,
    ...appendProps,
    type: {
        type: String,
        default: 'text',
        description: 'The input type "text", "number" "email" ...'
    },
    tag: {
        type: String,
        default: 'input',
        description: 'The input tag "input" "textarea"',
        validator: (value: string) => {
            return ['input', 'textarea'].includes(value);
        }

    },
    id: {
        type: String,
        default: '',
        description: 'The id of the input bound to the label'
    }



}


export default textFieldProps;