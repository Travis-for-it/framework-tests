<template>
  <div class="inline-block relative">
    <div class="border border-gray-300 overflow-hidden bg-white shadow-sm">
      <button
        @click="toggleDropdown"
        class="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        {{ currentLocale.toUpperCase() }}
        <svg
          class="ml-2 h-5 w-5"
          :class="{'transform rotate-180' : showDropdown}"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div v-if="showDropdown" class="w-full border border-gray-200 absolute bg-white divide-y divide-gray-200">
        <a
          v-for="locale in supportedLocales"
          :key="locale"
          :href="getLocaleLink(locale)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          {{ locale.toUpperCase() }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { defaultLocale } from '../utils/allLocales';

interface Props {
    allLocales: string[]
    currentLocale: string
}

const props = defineProps<Props>()

const supportedLocales = props.allLocales

const showDropdown = ref(false)
const currentLocale = ref(props.currentLocale)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const getCurrentLocale = () => {
  const pathParts = window.location.pathname.split('/').filter(Boolean)
  const firstSegment = pathParts[0]
  return supportedLocales.includes(firstSegment) ? firstSegment : defaultLocale
}

const getLocaleLink = (newLocale: string) => {
  const url = new URL(window.location.href)
  const pathParts = url.pathname.split('/').filter(Boolean)
  const search = url.search

  if (supportedLocales.includes(pathParts[0])) {
    pathParts.shift()
  }

  const newPath =
    newLocale === defaultLocale
      ? '/' + pathParts.join('/')
      : `/${newLocale}/${pathParts.join('/')}`

  return newPath + search
}

onMounted(() => {
  currentLocale.value = getCurrentLocale()
})
</script>
