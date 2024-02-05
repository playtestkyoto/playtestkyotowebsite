<template>
  <div
    class="calendarholder"
    :class="{ singlecolumn: singleColumn }"
  >
    <div class="calendar">
      <div
        v-for="(row, index) in rows"
        :key="'calendar' + index"
        class="row"
        :class="{ alternate: index % 2 }"
      >
        <template v-if="singleColumn">
          <div class="date">
            {{ row.date }} ({{ row.dayOfWeek }})
          </div>
        </template>
        <template v-else>
          <div class="date">
            {{ row.date }}
          </div>

          <div class="dayofweek">
            <span class="sub">({{ row.dayOfWeek }})</span>
          </div>
        </template>

        <div
          class="events"
          :style="
            singleColumn
              ? undefined
              : {
                  height: `calc(var(--row-height) * ${
                    row.maxDepth + 1
                  }`,
                }
          "
        >
          <div
            class="event"
            v-for="(event, index) in row.events"
            :class="{ bold: event.bold }"
            :style="
              singleColumn
                ? undefined
                : {
                    left:
                      ((event.from.hours +
                        event.from.minutes / 60 -
                        startTime) /
                        shownSpan) *
                        100 +
                      '%',

                    top: `calc(var(--row-height) * ${event.depth} `,

                    'z-index': Math.round(
                      (event.from.hours +
                        event.from.minutes / 60) *
                        4,
                    ),

                    width:
                      ((event.to.hours +
                        event.to.minutes / 60 -
                        event.from.hours -
                        event.from.minutes / 60) /
                        shownSpan) *
                        100 +
                      '%',
                  }
            "
          >
            <div class="eventname">{{ event.name }}</div>
            <div class="sub">
              {{ event.from.hours
              }}<template v-if="event.from.minutes"
                >:{{ event.from.minutes < 9 ? '0' : ''
                }}{{ event.from.minutes }}</template
              >–{{ event.to.hours
              }}<template v-if="event.from.minutes"
                >:{{ event.to.minutes < 9 ? '0' : ''
                }}{{ event.to.minutes }}</template
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'

const props = defineProps({
  text: { default: '' },
})

const singleColumn = computed(() => {
  return appState.winSize.value.width < 1200
})

const rows = computed(() => {
  return props.text
    .trim()
    .split('\n')
    .map((row) => {
      return rowToElements(row)
    })
    .filter((row) => row.date)
})

const startTime = computed(() => {
  return rows.value.reduce((min, currentRow) => {
    return Math.min(
      min,
      currentRow.events.reduce(
        (min, currentEvent) =>
          Math.min(
            min,
            currentEvent.from.hours +
              currentEvent.from.minutes / 60,
          ),
        24,
      ),
    )
  }, 24)
})

const endTime = computed(() => {
  return rows.value.reduce((max, currentRow) => {
    return Math.max(
      max,
      currentRow.events.reduce(
        (max, currentEvent) =>
          Math.max(
            max,
            currentEvent.to.hours +
              currentEvent.to.minutes / 60,
          ),
        0,
      ),
    )
  }, 0)
})

const shownSpan = computed(() => {
  return endTime.value - startTime.value
})

function rowToElements(row: string) {
  const rawElements = row
    .split('|')
    .map((el) => `${el}`.trim())
  const elements = {
    date: (rawElements[0] || '')
      .substring(0, (rawElements[0] || '').indexOf('('))
      .trim(),
    dayOfWeek: (rawElements[0] || '')
      .substring(
        (rawElements[0] || '').indexOf('(') + 1,
        (rawElements[0] || '').indexOf(')'),
      )
      .trim(),
    events: (rawElements[1] || '')
      .split(',')
      .filter((e) => e)
      .map((eventString) => {
        let name = eventString
          .substring(0, eventString.indexOf('['))
          .trim()

        const bold = true
        // bold = name.indexOf('*') === 0
        // if (bold) name = name.substring(1).trim()

        const rawTime = eventString
          .substring(
            eventString.indexOf('[') + 1,
            eventString.indexOf(']'),
          )
          .trim()
        const times = rawTime
          .split('-')
          .map((timeString) => timeStringToTime(timeString))

        return {
          name,
          from: times[0],
          to: times[1],
          bold,
          depth: undefined as number | undefined,
        }
      })
      .filter((event) => event.name),
  }

  // calculate depth
  let maxDepth = 0

  function calculateDepth(events, event) {
    const previousEvents = events.filter(
      (previousEvent, secondaryIndex) => {
        const previousEventStartTime =
          previousEvent.from.hours +
          previousEvent.from.minutes / 60

        const currentEventStartTime =
          event.from.hours + event.from.minutes / 60

        if (events.indexOf(event) > secondaryIndex)
          return (
            previousEventStartTime <= currentEventStartTime
          )
        return (
          previousEventStartTime < currentEventStartTime
        )
      },
    )
    const overlappingEvents = previousEvents.filter(
      (previousEvent) =>
        previousEvent.to.hours +
          previousEvent.to.minutes / 60 >
        event.from.hours + event.from.minutes / 60,
    )
    if (
      overlappingEvents.find((oe) => oe.depth === undefined)
    )
      return false
    let depth = 0
    while (
      overlappingEvents.find(
        (oe) => (oe.depth || 0) === depth,
      )
    )
      depth++
    if (depth > maxDepth) maxDepth = depth
    return depth
  }
  while (
    elements.events.find((e) => e.depth === undefined)
  ) {
    for (let event of elements.events) {
      const depth = calculateDepth(elements.events, event)
      if (depth !== false) event.depth = depth
    }
  }
  return { ...elements, maxDepth }
}

function timeStringToTime(timeString) {
  timeString = timeString.replace(/[^0-9:]/g, '')
  const [hours, minutes] = timeString.split(':')
  return {
    hours: parseInt(hours) || 0,
    minutes: parseInt(minutes) || 0,
  }
}
</script>

<style lang="scss" scoped>
.calendarholder {
  --row-height: 4em;
  --section-pad: var(--section-pad, 2em);
  --eventColor: var(--c1);
  --eventColorAlternate: var(--c1);
  --eventTextColor: var(--bg);
  --rowBackground: var(--bg-d);

  --shadowWidth: 2px;
  --shadowColor: var(--text);
  --shadowTBColor: var(--shadowColor);

  --box-shadow: inset 0 0 0 var(--shadowWidth)
      var(--shadowColor),
    0 0 0 var(--shadowWidth) var(--shadowColor);
  --box-shadow-right: inset calc(-1 * var(--shadowWidth)) 0
      0 0 var(--shadowColor),
    var(--shadowWidth) 0 0 0 var(--shadowColor);
  --box-shadow-left: inset var(--shadowWidth) 0 0 0
      var(--shadowColor),
    calc(-1 * var(--shadowWidth)) 0 0 0 var(--shadowColor);
  --box-shadow-bottom: inset 0 calc(-1 * var(--shadowWidth))
      0 0 var(--shadowTBColor),
    0px var(--shadowWidth) 0 0 var(--shadowTBColor);
  --box-shadow-top: inset 0 var(--shadowWidth) 0 0
      var(--shadowTBColor),
    0px calc(-1 * var(--shadowWidth)) 0 0
      var(--shadowTBColor);

  position: relative;
  // left: 50%;
  width: 100%;
  // max-width: 95vw;
  // transform: translateX(-50%);

  margin: var(--section-pad) 0;

  .calendar {
    position: relative;
  }

  .row {
    display: grid;
    grid-template-columns: 4.5em 3em 1fr;
    box-shadow: var(--box-shadow);
    margin-bottom: 4em;
    background: var(--rowBackground);

    &.alternate {
      .events {
        .event {
          background: var(--eventColorAlternate);
        }
      }
    }

    & > * {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .date {
      flex-shrink: 0;
      text-align: center;
    }

    .dayofweek {
      flex-shrink: 0;
      box-shadow: var(--box-shadow-right);
      text-align: center;
    }

    .events {
      position: relative;
      height: var(--row-height);
      font-size: 0.9em;

      .event {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0;
        justify-content: center;
        height: var(--row-height);
        color: var(--eventTextColor);
        background: var(--eventColor);
        box-shadow: var(--box-shadow);
        padding: 0.4em 0.6em;
        overflow: hidden;
        line-height: 1;

        .eventname {
          margin-bottom: 0.3em;
        }
      }
    }
  }
}

.bold {
  font-weight: bold;
}

.singlecolumn {
  padding: var(--section-pad);
  .calendar {
    left: 0;
    width: auto;
    margin: 0 1em;
    transform: none;
    margin-bottom: 2em;

    .row {
      box-shadow: none;
      grid-template-columns: 1fr;
      display: block;
      background: transparent;

      .date {
        font-weight: bold;
        display: block;
        text-align: left;
        margin-top: 1em;
      }

      .events {
        display: block;
        height: auto;

        .event {
          font-size: 1rem;
          height: auto;
          position: relative;
          box-shadow: inset 0 0 0 1px var(--text),
            0 0 0 1px var(--text);
          padding: 1em 0.8em 0.6em 0.8em;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
