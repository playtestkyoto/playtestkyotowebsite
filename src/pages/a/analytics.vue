<template>
  <div class="contentcolumn padbig">
    <h2>Analytics</h2>

    <AdminPassword />

    <div class="analytics">
      <div
        v-for="dayCount in Object.keys(pageCounts)"
        :key="dayCount"
      >
        <h3>
          {{ dayCount }} day{{
            `${dayCount}` === '1' ? '' : 's'
          }}
        </h3>
        <div class="pageCountEntry">
          <span class="count"><b>Count</b></span>
          <b>Page</b>
        </div>
        <div
          class="pageCountEntry"
          v-for="pageCount in viewAll[dayCount]
            ? pageCounts[dayCount]
            : pageCounts[dayCount].slice(0, viewAllCutoff)"
          :key="dayCount + pageCount.path"
        >
          <span class="count">{{ pageCount.count }}</span>
          <nuxt-link :to="pageCount.path">{{
            pageCount.path
          }}</nuxt-link>
        </div>
        <div
          v-if="pageCounts[dayCount].length > viewAllCutoff"
        >
          <button
            @click="viewAll[dayCount] = !viewAll[dayCount]"
          >
            {{
              viewAll[dayCount] ? 'View Less' : 'View All'
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
import { get } from '~/assets/storage'

const viewAllCutoff = 10
const dayCountsToLoad = [1, 7, 30]
const pageCounts = ref<{
  [key: number]: { path: string; count: number }[]
}>({})
const viewAll = ref<{ [key: number]: boolean }>({})

onMounted(async () => {
  c.log(get('adminPassword'))
  for (const days of dayCountsToLoad) {
    const pc = await loadAnalyticsForXDays(days)
    pageCounts.value[days] = pc
    viewAll.value[days] = false
  }
})
async function loadAnalyticsForXDays(days: number) {
  const raw = await fetch(`/analytics/xdays?days=${days}`, {
    headers: {
      authorization: get('adminPassword') || '',
    },
  }).then((res) => {
    return res.json()
  })
  c.log('raw', raw)
  if (raw) {
    const pageCounts =
      rawAnalyticsDataToSortedPageCounts(raw)
    return pageCounts
  }
  return []
}

function rawAnalyticsDataToSortedPageCounts(
  rawData: PageViewEventData[],
): { path: string; count: number }[] {
  const pageCounts = rawData.reduce((acc, curr) => {
    const { path } = curr
    acc[path] = acc[path] ? acc[path] + 1 : 1
    return acc
  }, {} as { [path: string]: number })

  const sortedPageCounts = Object.entries(pageCounts)
    .map(([path, count]) => {
      return { path, count }
    })
    .sort((a, b) => b.count - a.count)
  return sortedPageCounts
}
</script>

<style lang="scss" scoped>
.analytics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  .count {
    width: 100%;
    text-align: right;
  }

  .pageCountEntry {
    display: grid;
    grid-template-columns: 44px 1fr;
    gap: 12px;
  }
}
</style>
