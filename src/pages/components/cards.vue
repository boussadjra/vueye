<script setup lang="ts">
import cardProps from '~/components/core/surface/VCard/cardProps';

import landscape from '~/assets/img/landscape.jpg';
useHead({
  title: 'Cards'

})
</script> 

<template>
  <ComponentsDemo title="Cards">
    <ComponentsDemoItem title="Basic card (solid and outlined )">
      <div class="flex gap-2 gap-x-12">
        <VCard>
          <template #header>Card title</template>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium molestias aliquid, temporibus
          odio expedita aperiam soluta. Tempore enim molestias voluptatibus eum. Dolores, quas? Veritatis saepe
          reprehenderit maxime a modi!
        </VCard>
        <VCard outlined>
          <template #header>Card title</template>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium molestias aliquid, temporibus
          odio expedita aperiam soluta. Tempore enim molestias voluptatibus eum. Dolores, quas? Veritatis saepe
          reprehenderit maxime a modi!
        </VCard>

      </div>

    </ComponentsDemoItem>
    <ComponentsDemoItem title="Card with media">
      <div class="flex gap-2 gap-x-12">
        <VCard>

          <template #media>
            <img
              src="https://images.unsplash.com/photo-1577871450676-6159315fba89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="">
          </template>
          <template #header>Garden of Hamma </template>
          <p class="text-sm">
            The Botanical Garden of Algiers, Algeria History of the Garden In 1831, the French colony began undertaking
            remediation work on the marshlands in order to cultivate agricultural soil. By 1832, Governor General
            Antoine Avisard signed a decree that established a test garden in a place called El Hamma, east of Algiers.

          </p>
          <template #footer>
            <div class="flex gap-2">
              <VBadge content="Garden" variant="primary" smooth></VBadge>
              <VBadge content="Algiers" variant="primary" smooth></VBadge>
              <VBadge content="Green" variant="primary" smooth></VBadge>
              <VBadge content="Hamma" variant="primary" smooth></VBadge>
            </div>
          </template>

        </VCard>


      </div>

    </ComponentsDemoItem>
    <ComponentsDemoItem title="Media aside">
      <div class="flex gap-2 gap-x-12">
        <VCard media-aside>
          <template #media>
            <img src="https://images.unsplash.com/photo-1580133318324-f2f76d987dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
          </template>
          <template #header>Leaf </template>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur unde harum perferendis
            suscipit numquam commodi aut quia consequatur, doloremque ab beatae aliquam impedit sit quos praesentium
            sequi sed fugiat.

          </p>
          <template #footer>
            <div class="flex gap-2">
              <VBadge content="leaf" variant="success" smooth></VBadge>
              <VBadge content="water" variant="success" smooth></VBadge>
              <VBadge content="biology" variant="success" smooth></VBadge>
              <VBadge content="tree" variant="success" smooth></VBadge>
            </div>
          </template>

        </VCard>


      </div>

    </ComponentsDemoItem>
    <ComponentsDemoItem title="Block Card">
      <div class="flex gap-2 gap-x-12">
        <VCard block>
          <template #media>
            <img :src="landscape" alt="">
          </template>
          <template #header>Hills </template>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur unde harum perferendis
            suscipit numquam commodi aut quia consequatur, doloremque ab beatae aliquam impedit sit quos praesentium
            sequi sed fugiat.

          </p>
          <template #footer>
            <div class="flex gap-2">
              <VBadge content="Hills" variant="secondary" smooth></VBadge>
              <VBadge content="Nature" variant="secondary" smooth></VBadge>
              <VBadge content="Montains" variant="secondary" smooth></VBadge>
              <VBadge content="Trees" variant="secondary" smooth></VBadge>
            </div>
          </template>

        </VCard>


      </div>

    </ComponentsDemoItem>
    <ComponentsDemoItem title="Card with actions">
      <div class="flex gap-2 gap-x-12">
        <VCard>
          <template #header>Card title</template>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium molestias aliquid, temporibus
          odio expedita aperiam soluta. Tempore enim molestias voluptatibus eum. Dolores, quas? Veritatis saepe
          reprehenderit maxime a modi!
          <template #footer>
            <div class="flex flex-row-reverse gap-2 space-x-reverse">
              <VBtn size="sm" variant="primary"> Add </VBtn>
              <VBtn size="sm" outlined variant="error"> Cancel </VBtn>
            </div>
          </template>
        </VCard>
        <VCard>
          <template #header>Card title</template>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium molestias aliquid, temporibus
          odio expedita aperiam soluta. Tempore enim molestias voluptatibus eum. Dolores, quas? Veritatis saepe
          reprehenderit maxime a modi!
          <template #footer>
            <div class="flex justify-end gap-2 ">
              <VBtn size="lg" text icon="i-carbon-favorite-filled" variant="secondary" class=""> </VBtn>

              <VBtn size="lg" text icon="i-carbon-chat"> </VBtn>

              <VBtn size="lg" text icon="i-carbon-share"> </VBtn>

            </div>
          </template>
        </VCard>


      </div>

    </ComponentsDemoItem>


  </ComponentsDemo>
  <PropsDoc :component-props="cardProps" />
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>