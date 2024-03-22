type NullOrUndefined = null | undefined
export function isNullOrUndefined(value: unknown): value is NullOrUndefined {
  return value === null || value === undefined
}

// feature/fd/NUMERO_TICKET_JIRA-check
