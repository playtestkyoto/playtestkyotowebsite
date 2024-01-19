import * as c from '~/assets/common'
import type { H3Event, EventHandlerRequest } from 'h3'

const password = 'riverhouse'

export default function authCheck(
  event: H3Event<EventHandlerRequest>,
) {
  // authed requests should have an authentication header
  const authHeader = event.node.req.headers['authorization']
  if (!authHeader) return false
  if (authHeader !== password) return false
  return true
}
