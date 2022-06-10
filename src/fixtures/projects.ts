import { IWindow } from '@/lib/windowStore'

const PROJECTS: IWindow[] = [{ id: 23 }, { id: 42 }, { id: 3 }]

export const getProjectData = new Promise<IWindow[]>(resolve => {
  setTimeout(() => {
    resolve(PROJECTS)
  }, 2000)
})
