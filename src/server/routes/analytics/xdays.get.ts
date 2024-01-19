import * as c from '~/assets/common'
import { getPageViewEventsInPastXDays } from '../../analyticsManager'
import authCheck from '~/server/authCheck'

export default defineEventHandler(async (event) => {
  if (!authCheck(event)) return false

  const paramsString =
    event.node.req.url?.split('?')[1] ?? ''
  const params = parseQueryParams(paramsString)
  const days = parseInt(params.days)
  const events = await getPageViewEventsInPastXDays(days)
  return events
})

function parseQueryParams(paramsString: string) {
  const params = {} as Record<string, string>
  const pairs = paramsString.split('&')
  for (const pair of pairs) {
    const [key, value] = pair.split('=')
    params[key] = value
  }
  return params
}
