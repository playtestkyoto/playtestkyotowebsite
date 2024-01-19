import fs from 'fs'
import path from 'path'
import * as c from '~/assets/common'
import { fileURLToPath } from 'url'

const dirName = fileURLToPath(import.meta.url)
const analyticsDataFolder = path.join(
  dirName,
  '../../../analyticsData',
)
if (!fs.existsSync(analyticsDataFolder)) {
  fs.mkdirSync(analyticsDataFolder)
}

const knownToExist = new Set<string>()

function getFilePathForTime(time: number): string {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const filePath = path.join(
    analyticsDataFolder,
    `${year}-${month}-${day}.json`,
  )
  if (knownToExist.has(filePath)) return filePath

  if (!fs.existsSync(filePath))
    fs.writeFileSync(filePath, '[]')
  knownToExist.add(filePath)
  return filePath
}

const queue: PageViewEventData[] = []

export function addPageViewEvent(e: PageViewEventData) {
  queue.push(e)
  handleNext()
}

let busy = false

async function handleNext() {
  if (busy) return

  const e = queue.shift()
  if (!e) return

  busy = true
  const filePath = getFilePathForTime(e.time)
  const data = await fs.promises.readFile(filePath, 'utf8')
  const arr = JSON.parse(data) as PageViewEventData[]
  arr.push(e)
  await fs.promises.writeFile(filePath, JSON.stringify(arr))

  busy = false
  handleNext()
}

export async function getPageViewEventsInPastXDays(
  days: number,
): Promise<PageViewEventData[]> {
  const now = Date.now()
  const events: PageViewEventData[] = []
  for (let i = 0; i < days; i++) {
    const filePath = getFilePathForTime(
      now - i * 24 * 60 * 60 * 1000,
    )
    const data = await fs.promises.readFile(
      filePath,
      'utf8',
    )
    const arr = JSON.parse(data) as PageViewEventData[]
    events.push(...arr)
  }
  return events
}
