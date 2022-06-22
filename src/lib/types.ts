export type Frame = {
  project: Project
  position: {
    target: Position
    origin: Position
  }
  size: number
}

export type Project = {
  id: number
  title: string
  focus: boolean
}

export type Viewport = {
  width: number
  height: number
}

export type Position = {
  x: number
  y: number
}
