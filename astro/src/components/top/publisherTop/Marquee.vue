<template>
  <div class="marquee-wrapper">
    <div class="marquee-track" ref="track">
      <div
        v-for="(logoSet, index) in logoSets"
        :key="index"
        class="logo-set"
        ref="logoSetEls"
      >
        <img
          v-for="(logo, i) in logos"
          :key="i"
          :src="logo.src"
          :alt="logo.alt"
          class="logo-img"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
//これはすごく適当
import { ref, onMounted, nextTick, watch } from 'vue'
import logoIherb from '../../../assets/images/brands/logo_iherb.png' 
import logoLazada from '../../../assets/images/brands/logo_lazada.png' 
import logoPayoneer from '../../../assets/images/brands/logo_payoneer.png' 
import logoRakutenStay from '../../../assets/images/brands/logo_rakuten_stay.png' 
import logoSkylum from '../../../assets/images/brands/logo_skylum.png' 
import logoSonyMusic from '../../../assets/images/brands/logo_sony_music.png' 
import logoSorare from '../../../assets/images/brands/logo_sorare.png' 
import logoSsense from '../../../assets/images/brands/logo_ssense.png' 
import logoSwarvoski from '../../../assets/images/brands/logo_swarvoski@2x5.png' 
import logoThaiHand from '../../../assets/images/brands/logo_thai_hand.png'

const logos = [
  { src: logoIherb.src, alt: 'iherb' },
  { src: logoLazada.src, alt: 'lazada' },
  { src: logoPayoneer.src, alt: 'payoneer' },
  { src: logoRakutenStay.src, alt: 'rakuten_stay' },
  { src: logoSkylum.src, alt: 'skylum' },
  { src: logoSonyMusic.src, alt: 'sony_music' },
  { src: logoSorare.src, alt: 'sorare' },
  { src: logoSsense.src, alt: 'ssense' },
  { src: logoSwarvoski.src, alt: 'swarvoski' },
  { src: logoThaiHand.src, alt: 'thai_hand' },
]

const logoSets = ref([0, 1])

const track = ref(null)
const logoSetEls = ref([])

let observer

onMounted(async () => {
  await nextTick()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logoSets.value.push(Date.now())

          if (logoSets.value.length > 3) {
            logoSets.value.shift()
          }
        }
      })
    },
    {
      root: track.value,
      threshold: 0.1,
    }
  )

  const lastSet = logoSetEls.value[logoSetEls.value.length - 1]
  if (lastSet) {
    observer.observe(lastSet)
  }
})

watch(
  () => logoSets.value.length,
  async () => {
    await nextTick()
    const lastSet = logoSetEls.value[logoSetEls.value.length - 1]
    if (lastSet) {
      observer.observe(lastSet)
    }
  }
)
</script>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  height: 150px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  position: relative;
}

.marquee-track {
  display: flex;
  gap: 40px;
  animation: scroll-left 20s linear infinite;
}

.logo-set {
  display: flex;
  gap: 40px;
  flex-shrink: 0;
}

.logo-img {
  width: 200px;
  height: 100%;
  object-fit: contain;
  flex-shrink: 0;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
