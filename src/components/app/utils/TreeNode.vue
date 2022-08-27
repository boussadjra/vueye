<script lang="ts">
import type { PropType } from 'vue'
interface Item {
  name: string
  children: Array<Item>
}

export default defineComponent({
  name: 'TreeNode',
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () =>
      h('div', {}, [
        h('div', {}, {default:()=>slots.default?.({ item: props.item })}),
        h('div', { style: { marginLeft: '10px' } }, [
          props.item.children.map((child, index) =>
            h('TreeNode', { key: index, item: child }, {default:()=>slots.default?.({ item: props.item })}),
          ),
        ]),
      ])
  },
})
</script>
