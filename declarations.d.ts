declare module '@theme-toggles/react' {
    import { ComponentType } from 'react'
  
    export interface ToggleProps {
      toggled?: boolean
      toggle?: (toggled: boolean) => void
      duration?: number
      reversed?: boolean
      forceMotion?: boolean
      idPrefix?: string
      className?: string
      style?: React.CSSProperties
      title?: string
      'aria-label'?: string
    }
  
    export const Classic: ComponentType<ToggleProps>
  }
  