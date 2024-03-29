export const winSize: Ref<{
  width: number
  height: number
}> = ref({
  width: 1000,
  height: 1000,
})

export const mobile = computed(
  () => winSize.value.width < 768,
)
