<template>
  <div>
    <p>Example index.vue!</p>
    <WPImage
      path="/gravatar/"
      :style="{ height: '100px', width: '100px' }"
      src="/avatar/b2d44779ae171a3d25f4620509614d49?s=360&d=identicon&r=g"
      alt="" />
  </div>
</template>

<script setup lang="ts">
  const { buildCdnUrl } = useWPImage()

  onMounted(() => {
    const newUrl = buildCdnUrl({
      relativeUrl: '/wp-content/uploads/2023/01/gemali-martinez-is6MxPxm3uk-unsplash-edited.jpg',
      builderPath: '/wordpress-madebyfabian/',
    })

    console.log({ newUrl })
  })
</script>
