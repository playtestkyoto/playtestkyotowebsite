import * as c from '~/assets/common'
import { addPageViewEvent } from '../../analyticsManager'

export default defineEventHandler(async (event) => {
  const { path, query } = await readBody(event)
  // const headers = await getHeaders(event)
  const ip = await getRequestIP(event, {
    xForwardedFor: true,
  })
  const now = Date.now()

  addPageViewEvent({
    path,
    query,
    ip,
    time: now,
  })

  return true
})
