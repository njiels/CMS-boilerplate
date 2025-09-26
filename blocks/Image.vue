<template>
  <div class="flex justify-center py-4">
    <div :class="['w-[' + widthPercentage + '%]']">
      <PruviousPicture :image="image" :lazy="true" class="image w-full h-auto" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { imageField, numberField } from '#pruvious'

defineProps({
  // Bestaande afbeelding prop
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

  // Nieuwe prop voor de breedte van de afbeelding, weergegeven als slider
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

<style>
.image {
  width: 100%;
}
</style>