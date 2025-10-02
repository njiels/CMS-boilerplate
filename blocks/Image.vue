<template>
  <div class="flex justify-center py-4">
    
    <div :style="{ width: `${widthPercentage}%` }" class="max-w-full">
      
      <PruviousPicture :image="image" :lazy="true" class="image-container w-full h-auto">
        <img :src="image?.src" :alt="image?.alt || 'Afbeelding'" class="w-full h-auto" />
      </PruviousPicture>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { imageField, numberField } from '#pruvious'

defineProps({
  // Bestaande afbeelding prop (geen wijzigingen nodig, is al perfect)

  image: imageField({
    minWidth: 1600,
    minHeight: 1600,
    sources: [
      { media: '(max-width: 768px)', format: 'webp', width: 1024, height: 1024, resize: 'cover' },
      { media: '(max-width: 768px)', format: 'jpeg', width: 1024, height: 1024, resize: 'cover' },
      { format: 'webp', width: 1600, height: 1600, resize: 'cover' },
      { format: 'jpeg', width: 1600, height: 1600, resize: 'cover' },
    ],
  }),

  // Nieuwe prop voor de breedte van de afbeelding
  widthPercentage: numberField({
    label: 'Afbeelding breedte (%)', // Label dat in Pruvious getoond wordt
    description: 'Bepaal de breedte van de afbeelding als een percentage.',
    default: 100, // Standaardwaarde is 100%
    min: 10, // Minimum breedte (bijv. 10%)
    max: 100, // Maximum breedte (100% is volledig)
    step: 5, // De stapgrootte van de slider
    slider: true, // Belangrijk: dit zorgt voor de slider-weergave in Pruvious
  }),
})
</script>

<style scoped>

</style>