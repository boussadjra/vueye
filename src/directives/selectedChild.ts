import type { Directive, DirectiveBinding, VNode } from "vue";


const vSelectedChild: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {


        //el click and get the index of the clicked child button
        el.addEventListener('click', (e: Event) => {
            //@ts-ignore
            const index = Array.from(e.target.parentElement.children).indexOf(e.target);

            binding.value(index);

            //@ts-ignore
            Array.from(e.target.parentElement.children).forEach((button: HTMLElement, i) => {
                if (i === index) {

                    button.classList.add('selected');
                } else {

                    button.classList.remove('selected');
                }
            });
        });

    }
}


export default vSelectedChild;